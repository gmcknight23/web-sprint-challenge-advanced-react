// Write your tests here
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AppClass from "./AppClass";

test("sanity", () => {
  expect(true).toBe(true);
});

test("renders without errors", () => {
  render(<AppClass />);
});

test('Does NOT render "foo"', () => {
  const notThere = screen.queryByText("foo");
  expect(notThere).not.toBeInTheDocument();
});

test('Does NOT render "Coordinates"', () => {
  const notThere = screen.queryByText("Coordinates");
  expect(notThere).not.toBeInTheDocument();
});

test('Does NOT render "bar"', () => {
  const notThere = screen.queryByText("bar");
  expect(notThere).not.toBeInTheDocument();
});

test('Does NOT render "baz"', () => {
  const notThere = screen.queryByText("baz");
  expect(notThere).not.toBeInTheDocument();
});

// test('AppClass is a class-based component', () => {
//   expect(
//     AppClass.prototype &&
//     AppClass.prototype.isReactComponent
//   ).toBeTruthy()
// });

// beforeEach(() => {
//   render(<AppClass />)
// })

// test("renders the contact form header", () => {
//   render(<AppClass />);

//   const coords = screen.queryByText(/coordinates/i);

//   expect(headerElement).toBeInTheDocument();
//   expect(headerElement).toBeTruthy();
//   expect(headerElement).toHaveTextContent(/coordinates/i);
// });
