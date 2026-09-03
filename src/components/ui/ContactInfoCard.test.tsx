import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactInfoCard from "./ContactInfoCard";
import { Mail } from "lucide-react";

describe("ContactInfoCard", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders label and value with icon", () => {
    render(
      <ContactInfoCard
        icon={<Mail data-testid="mail-icon" size={20} />}
        label="Email Address"
        value="contact@kushagra.dev"
      />
    );

    expect(screen.getByText("Email Address")).toBeInTheDocument();
    expect(screen.getByText("contact@kushagra.dev")).toBeInTheDocument();
    expect(screen.getByTestId("mail-icon")).toBeInTheDocument();
  });

  it("renders anchor when href is passed", () => {
    render(
      <ContactInfoCard
        icon={<Mail size={20} />}
        label="Email"
        value="contact@kushagra.dev"
        href="mailto:contact@kushagra.dev"
      />
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "mailto:contact@kushagra.dev");
  });

  it("handles successful clipboard copy", async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    render(
      <ContactInfoCard
        icon={<Mail size={20} />}
        label="Email Address"
        value="contact@kushagra.dev"
        copyable
      />
    );

    const copyButton = screen.getByRole("button", {
      name: /copy email address to clipboard/i,
    });
    fireEvent.click(copyButton);

    expect(writeTextMock).toHaveBeenCalledWith("contact@kushagra.dev");

    await waitFor(() => {
      expect(screen.getByText("Copied")).toBeInTheDocument();
    });
  });

  it("handles clipboard copy rejection gracefully with error indicator", async () => {
    const writeTextMock = vi
      .fn()
      .mockRejectedValue(new Error("Permission denied"));
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    render(
      <ContactInfoCard
        icon={<Mail size={20} />}
        label="Email Address"
        value="contact@kushagra.dev"
        copyable
      />
    );

    const copyButton = screen.getByRole("button", {
      name: /copy email address to clipboard/i,
    });
    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(screen.getByText("Failed")).toBeInTheDocument();
    });
  });
});
