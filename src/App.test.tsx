import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders challenge link", () => {
    render(<App />);
    const element = screen.getByText(/challenge/i);
    expect(element).toBeInTheDocument();
});
