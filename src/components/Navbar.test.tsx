import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  const defaultProps = {
    isMenuOpen: false,
    setIsMenuOpen: vi.fn(),
    activeSection: "about",
    handleNavClick: vi.fn(),
  };

  it("renders branding and desktop navigation items", () => {
    render(<Navbar {...defaultProps} />);

    expect(screen.getByLabelText("Kushagra Kumar Home")).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Main Navigation" })).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Journey")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("calls handleNavClick when desktop link is clicked", () => {
    const handleNavClick = vi.fn();
    render(<Navbar {...defaultProps} handleNavClick={handleNavClick} />);

    const projectsLink = screen.getByRole("link", { name: "Projects" });
    fireEvent.click(projectsLink);

    expect(handleNavClick).toHaveBeenCalledWith("projects", expect.anything());
  });

  it("toggles mobile menu on button click", () => {
    const setIsMenuOpen = vi.fn();
    render(<Navbar {...defaultProps} setIsMenuOpen={setIsMenuOpen} />);

    const menuButton = screen.getByRole("button", { name: "Open menu" });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(menuButton).toHaveAttribute("aria-controls", "mobile-menu");

    fireEvent.click(menuButton);
    expect(setIsMenuOpen).toHaveBeenCalledWith(true);
  });

  it("renders mobile drawer when isMenuOpen is true", () => {
    render(<Navbar {...defaultProps} isMenuOpen={true} />);

    const drawer = screen.getByRole("dialog", { name: "Mobile Navigation Menu" });
    expect(drawer).toBeInTheDocument();
    expect(drawer).toHaveAttribute("aria-modal", "true");
  });

  it("closes mobile menu when Escape key is pressed", () => {
    const setIsMenuOpen = vi.fn();
    render(
      <Navbar
        {...defaultProps}
        isMenuOpen={true}
        setIsMenuOpen={setIsMenuOpen}
      />
    );

    fireEvent.keyDown(window, { key: "Escape" });
    expect(setIsMenuOpen).toHaveBeenCalledWith(false);
  });
});
