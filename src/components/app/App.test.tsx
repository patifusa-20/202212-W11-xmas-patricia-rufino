import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter as Router } from "react-router";

describe("Given App component", () => {
    describe("When it has been render", () => {
        test("Then its child components should be render also with its title", () => {
            render(
                <Router>
                    <App />
                </Router>
            );
            const elementHeader = screen.getByRole("heading", {
                name: "Challenge Week 11 Xmas",
            });
            expect(elementHeader).toBeInTheDocument();
        });
    });
});
