import { render, screen } from "@testing-library/react";
import { HomePage } from "./home.page";
import { Robots } from "../../components/robots/robots";
import { Menu } from "../../components/menu/menu";
import { RobotObj } from "../../model/robot.model";
import { MenuItems } from "../../types/menu.type";
import { BrowserRouter } from "react-router-dom";
jest.mock("../../components/robots/robots");
jest.mock("../../components/menu/menu");

describe("Given HomePage component", () => {
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

    const mockMenuItems: MenuItems = [
        { path: "/mocklink1", label: "MockLabel" },
        { path: "/mocklink2", label: "MockLabel" },
    ];
    describe("When it has been render", () => {
        beforeEach(() => {
            (Menu as jest.Mock).mockImplementation(() => {
                return <p>Mock Robots Menu</p>;
            });
            (Robots as jest.Mock).mockImplementation(() => {
                return <p>Mock Robots Home</p>;
            });
        });
        test("Then the title should be in the screen", () => {
            render(
                <BrowserRouter>
                    <HomePage
                        items={[mockMenuItems][0]}
                        robots={mockRobots}
                    ></HomePage>
                </BrowserRouter>
            );
            const elementHeader = screen.getByRole("heading", {
                name: "Home",
            });
            expect(elementHeader).toBeInTheDocument();
        });
    });
});
