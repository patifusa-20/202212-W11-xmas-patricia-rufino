import { act, render, screen } from "@testing-library/react";
import { getRobots } from "../../data/store.robots";
import { RobotObj } from "../../model/robot.model";
import { Robots } from "./robots";

jest.mock("../../data/store.robots");

describe("When it load the data from getRobot", () => {
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
    const mockRobots = [mockRobot];

    beforeEach(() => {
        (getRobots as jest.Mock).mockResolvedValue(mockRobots);
    });
    beforeEach(async () => {
        await act(async () => {
            render(
                <Robots
                    robots={mockRobots}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                    handleFavourite={handleFavourite}
                ></Robots>
            );
        });
    });
    test(`Then it should be render the data`, async () => {
        const elementList = await screen.findByRole("list"); // <ul />
        expect(elementList).toBeInTheDocument();
        const elementItem = await screen.findByText(/Test velocity/i);
        expect(elementItem).toBeInTheDocument();
    });
});
