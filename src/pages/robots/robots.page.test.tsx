import { render, screen } from "@testing-library/react";
import { RobotsPage } from "./robots.page";
import { Robots } from "../../components/robots/robots";
import { RobotObj } from "../../model/robot.model";
jest.mock("../../components/robots/robots");

describe("Given RobotsPage component", () => {
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
    const handleAdd = jest.fn();
    const handleUpdate = jest.fn();
    const handleDelete = jest.fn();
    const handleFavourite = jest.fn();
    const mockRobots = [mockRobot];
    describe("When it has been render", () => {
        beforeEach(() => {
            (Robots as jest.Mock).mockImplementation(() => {
                return <p>Mock List</p>;
            });
        });
        test("Then the title should be in the screen", () => {
            const title = /Robots/i;
            render(
                <RobotsPage
                    robots={mockRobots}
                    handleAdd={handleAdd}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                    handleFavourite={handleFavourite}
                />
            );
            const elementHeader = screen.getByRole("heading", {
                name: title,
            });
            expect(elementHeader).toBeInTheDocument();
        });
    });
});
