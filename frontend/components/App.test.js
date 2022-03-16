// Write your tests here
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AppClass from "./AppClass";

test("sanity", () => {
  expect(true).toBe(true);
});

test("renders without errors", () => {
  render(<AppClass />);
});

test('Renders headings "Coordinates"', () => {
  render(<AppClass />);
  const cds = screen.queryByText("Coordinates", { exact: false });
  expect(cds).toBeInTheDocument();
});

test("renders message you can't go left when appropriate", () => {
  render(<AppClass />);
  fireEvent.click(screen.getByText("LEFT"));
  fireEvent.click(screen.getByText("LEFT"));
  const message = screen.getByTestId("message");
  expect(message.textContent).toBe("You can't go left");
});

test("renders message you can't go right when appropriate", () => {
  render(<AppClass />);
  fireEvent.click(screen.getByText("RIGHT"));
  fireEvent.click(screen.getByText("RIGHT"));
  const message = screen.getByTestId("message");
  expect(message.textContent).toBe("You can't go right");
});

test("reset button resets message", () => {
  render(<AppClass />);
  fireEvent.click(screen.getByText("reset"));
  const message = screen.getByTestId("message");
  expect(message.textContent).toBe("");
});

test("reset button resets coordinates", () => {
  render(<AppClass />);
  fireEvent.click(screen.getByText("reset"));
  const message = screen.getByTestId("coordinates");
  expect(message.textContent).toBe("Coordinates (2, 2)");
});

// test('Does NOT render "foo"', () => {
//   const notThere = screen.queryByText("foo");
//   expect(notThere).not.toBeInTheDocument();
// });

// test('Does NOT render "Coordinates"', () => {
//   const notThere = screen.queryByText("Coordinates");
//   expect(notThere).not.toBeInTheDocument();
// });

// test('Does NOT render "baz"', () => {
//   const notThere = screen.queryByText("baz");
//   expect(notThere).not.toBeInTheDocument();
// });

// describe("app component", () => {
//   test("renders without crashing", () => {
//     //screen.debug();
//   });
//   test('Renders headings "Coordinates"', () => {
//     //const heading = document.querySelector("h2");
//     const cds = screen.queryByText("Coordinates");
//   });
// });

// test('renders "LEFT"', () => {
//   const cds = screen.findByText(/left/i);
//   expect(cds).not.toBeInTheDocument();
// });

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
