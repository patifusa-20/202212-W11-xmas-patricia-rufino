import { render, screen } from "@testing-library/react";
import { RobotDetails } from "./details";
import { RobotObj } from "../../model/robot.model";

describe("Given Details Robot component", () => {
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
    describe("When it has been render", () => {
        test("Then the title should be in the screen", () => {
            render(<RobotDetails robot={mockRobot}></RobotDetails>);
            const elementDetails = screen.getByRole("heading", {
                name: mockRobotName,
            });
            expect(elementDetails).toBeInTheDocument();
        });
    });
});
