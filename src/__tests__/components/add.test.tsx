import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import Header from "../../components/Header";

describe("Header", () => {
  it("renders logo", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const logoElement = screen.getByTestId("logo");
    expect(logoElement).not.toBe(null);
  });

  it("renders navigation links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const homeLink = screen.getByTestId("link-home");
    const favoritesLink = screen.getByTestId("link-favorites");

    expect(homeLink).not.toBe(null);
    expect(favoritesLink).not.toBe(null);
  });

  it("renders favorites button", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const favoritesButton = screen.getByTestId("fav-button-link");
    expect(favoritesButton).not.toBe(null);
  });

  it("applies active class to active link", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const homeLink = screen.getByTestId("link-home");
    const favoritesLink = screen.getByTestId("link-favorites");

    expect(homeLink.getAttribute("class")).toContain("active");
    expect(favoritesLink.getAttribute("class")).toContain("not-active");
  });

  it("navigates to correct path on link click", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const homeLink = screen.getByTestId("link-home");
    const favoritesLink = screen.getByTestId("link-favorites");

    homeLink.click();
    expect(window.location.pathname).toBe("/home");

    favoritesLink.click();
    expect(window.location.pathname).toBe("/favorites");
  });
});
