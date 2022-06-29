import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

test("renders button and checks it is present on page", () => {
  render(<button />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("checks that input field has correct placeholder text", () => {
  const text = "Add tasks here...";
  render(<input placeholder="Add tasks here..." />);

  const inputfield = screen.getByPlaceholderText(text);

  expect(inputfield).toBeInTheDocument();
});

test("check that add to list buttons runs a mock function", () => {
  const mock = jest.fn();

  render(<button onClick={mock} />);
  const button = screen.getByRole("button");

  userEvent.click(button);

  expect(mock).toHaveBeenCalled();
});
