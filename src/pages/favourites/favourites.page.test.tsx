import { render, screen } from "@testing-library/react";
import { FavouritesPage } from "./favourites.page";
import { Robots } from "../../components/robots/robots";
import { RobotObj } from "../../model/robot.model";
jest.mock("../../components/robots/robots");

describe("Given FavouritesPage component", () => {
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
                <FavouritesPage
                    robots={mockRobots}
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
