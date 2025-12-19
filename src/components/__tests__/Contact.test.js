import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Page Test Cases", () => {
  it("renders the Contact page heading", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("displays the Contact text", () => {
    render(<Contact />);
    const contactText = screen.getByText(/contact/i);
    expect(contactText).toBeInTheDocument();
  });

  it("renders at least two paragraph elements", () => {
    const { container } = render(<Contact />);
    const paragraphs = container.querySelectorAll("p");
    expect(paragraphs.length).toBeGreaterThanOrEqual(2);
  });

  it("displays the contact phone number", () => {
    render(<Contact />);
    const phoneNumber = screen.getByText(/\+91\s*88650\s*16602/);
    expect(phoneNumber).toBeInTheDocument();
  });

  it("displays the support email address", () => {
    render(<Contact />);
    const email = screen.getByText(/support@foodhub\.com/i);
    expect(email).toBeInTheDocument();
  });

  it("renders name, email and message input fields", () => {
    render(<Contact />);

    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Write your message...")
    ).toBeInTheDocument();
  });

  it("renders the Send Message button", () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: /send message/i });
    expect(button).toBeInTheDocument();
  });
});
