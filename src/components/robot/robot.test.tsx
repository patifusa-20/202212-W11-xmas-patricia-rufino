import { render, screen } from "@testing-library/react";
import { Robot } from "./robot";
import { RobotObj } from "../../model/robot.model";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";

describe("Given Robot component", () => {
    const mockRobotName = "Test name";
    const mockImage = "Test image";
    const mockSpeed = "Test speed";
    const mockStrength = "Test strength";
    const mockCreator = "Test creator name";
    const mockRobot = new RobotObj(
        mockRobotName,
        mockImage,
        mockSpeed,
        mockStrength,
        mockCreator
    );
    const handleUpdate = jest.fn();
    const handleDelete = jest.fn();
    const handleFavourite = jest.fn();
    describe("When it has been render", () => {
        test("Then the button icon text should be in the screen", () => {
            render(
                <Router>
                    <Robot
                        item={mockRobot}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                        handleFavourite={handleFavourite}
                    ></Robot>
                </Router>
            );
            const btnDelete = screen.getByRole("button", {
                name: "cancel",
            });
            expect(btnDelete).toBeInTheDocument();
            userEvent.click(btnDelete);
            expect(handleDelete).toHaveBeenCalledTimes(1);

            const btnUpdate = screen.getByRole("button", {
                name: "edit_square",
            });
            expect(btnUpdate).toBeInTheDocument();
            userEvent.click(btnUpdate);
            expect(handleUpdate).toHaveBeenCalledTimes(1);

            const btnAddFavourite = screen.getByRole("button", {
                name: "heart_plus",
            });
            expect(btnAddFavourite).toBeInTheDocument();
            userEvent.click(btnAddFavourite);
            expect(handleFavourite).toHaveBeenCalledTimes(1);
        });
        test("If Robot is favourite, favourite button icon text should be in the screen", () => {
            mockRobot.isFavourite = true;
            render(
                <Router>
                    <Robot
                        item={mockRobot}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                        handleFavourite={handleFavourite}
                    ></Robot>
                </Router>
            );
            const btnRemoveFavourite = screen.getByRole("button", {
                name: "heart_minus",
            });
            expect(btnRemoveFavourite).toBeInTheDocument();
        });
    });
});
