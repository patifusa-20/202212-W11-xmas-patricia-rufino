import { render, screen } from "@testing-library/react";
import { DetailsPage } from "./details.page";
import { Robots } from "../../components/robots/robots";
import { RobotObj } from "../../model/robot.model";
jest.mock("../../components/robots/robots");

describe("Given DetailsPage component", () => {
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
    const mockRobots = [mockRobot];
    describe("When it has been render", () => {
        beforeEach(() => {
            (Robots as jest.Mock).mockImplementation(() => {
                return <p>Mock Details</p>;
            });
        });
        test("Then the title should be in the screen", () => {
            const title = /Details/i;
            render(<DetailsPage robots={mockRobots} />);
            const elementHeader = screen.getByRole("heading", {
                name: title,
            });
            expect(elementHeader).toBeInTheDocument();
        });
    });
});
