import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

// Component that triggers an intentional error
function BrokenComponent(): null {
  throw new Error("Test explosion");
}

function HealthyComponent() {
  return <div>Healthy Content</div>;
}

describe("ErrorBoundary", () => {
  beforeEach(() => {
    // Suppress console.error in test output for intentional errors
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  it("renders children when no error occurs", () => {
    render(
      <ErrorBoundary>
        <HealthyComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText("Healthy Content")).toBeInTheDocument();
  });

  it("renders fallback UI when child component throws", () => {
    render(
      <ErrorBoundary>
        <BrokenComponent />
      </ErrorBoundary>
    );

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(
      screen.getByText(/An unexpected error occurred/)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reload page/i })).toBeInTheDocument();
  });

  it("renders custom fallback when provided", () => {
    render(
      <ErrorBoundary fallback={<div>Custom Error View</div>}>
        <BrokenComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText("Custom Error View")).toBeInTheDocument();
  });

  it("triggers window reload when reload button is clicked", () => {
    const originalLocation = window.location;
    const reloadMock = vi.fn();

    Object.defineProperty(window, "location", {
      configurable: true,
      value: { ...originalLocation, reload: reloadMock },
    });

    render(
      <ErrorBoundary>
        <BrokenComponent />
      </ErrorBoundary>
    );

    const reloadButton = screen.getByRole("button", { name: /reload page/i });
    fireEvent.click(reloadButton);

    expect(reloadMock).toHaveBeenCalledTimes(1);

    Object.defineProperty(window, "location", {
      configurable: true,
      value: originalLocation,
    });
  });
});
