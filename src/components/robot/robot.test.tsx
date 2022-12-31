import { render, screen } from "@testing-library/react";
import { Robot } from "./robot";
import { RobotObj } from "../../model/robot.model";
import userEvent from "@testing-library/user-event";

describe("Given Robot component", () => {
    const mockRobotName = "Test name";
    const mockImage = "Test image";
    const mockVelocity = "Test velocity";
    const mockStrength = "Test strength";
    const mockCreator = "Test creator name";
    const mockRobot = new RobotObj(
        mockRobotName,
        mockImage,
        mockVelocity,
        mockStrength,
        mockCreator
    );
    const handleUpdate = jest.fn();
    const handleDelete = jest.fn();
    const handleFavourite = jest.fn();
    describe("When it has been render", () => {
        test("Then the title should be in the screen", () => {
            render(
                <Robot
                    item={mockRobot}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                    handleFavourite={handleFavourite}
                ></Robot>
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

            if (mockRobot.isFavourite) {
                const btnRemoveFavourite = screen.getByRole("button", {
                    name: "heart_minus",
                });
                expect(btnRemoveFavourite).toBeInTheDocument();
                userEvent.click(btnRemoveFavourite);
                expect(handleFavourite).toHaveBeenCalledTimes(1);
            } else {
                const btnAddFavourite = screen.getByRole("button", {
                    name: "heart_plus",
                });
                expect(btnAddFavourite).toBeInTheDocument();
                userEvent.click(btnAddFavourite);
                expect(handleFavourite).toHaveBeenCalledTimes(1);
            }
        });
    });
});
