import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
    mockRobot1,
    mockRobot2,
    mockAddRobot,
    mockUpdateRobot,
    mockValidRepoResponse,
    mockRobots,
    mockGetRobots,
} from "./mock.use.robots";

import { RobotsRepo } from "../repository/robots.repo";
import { useRobots } from "./use.robots";

jest.mock("../repository/robots.repo");
RobotsRepo.prototype.load = jest.fn();
RobotsRepo.prototype.create = jest.fn();
RobotsRepo.prototype.update = jest.fn();
RobotsRepo.prototype.delete = jest.fn();

jest.mock("../service/store.robots");

describe(`Given useRobots (custom hook)
            render with a virtual component`, () => {
    let TestComponent: () => JSX.Element;
    beforeEach(() => {
        TestComponent = () => {
            const {
                handleLoad,
                handleAdd,
                handleUpdate,
                handleDelete,
                handleFavourite,
            } = useRobots();
            return (
                <>
                    <button onClick={handleLoad}>Load</button>
                    <button onClick={() => handleAdd(mockAddRobot)}>Add</button>
                    <button onClick={() => handleUpdate(mockUpdateRobot)}>
                        Update
                    </button>
                    <button onClick={() => handleDelete(mockRobot2.id)}>
                        Delete
                    </button>
                    <button onClick={() => handleFavourite(mockUpdateRobot)}>
                        Favourite
                    </button>
                    <div>
                        <p>Loaded</p>
                        <ul>
                            {mockRobots.map((robot) => (
                                <li key={robot.id}>{robot.robotName}</li>
                            ))}
                        </ul>
                    </div>
                </>
            );
        };
        act(() => {
            render(<TestComponent />);
        });
    });
    describe(`When the repo is working OK`, () => {
        beforeEach(mockValidRepoResponse);

        test("Then its function handleLoad should be add Robots to the state", async () => {
            const buttons = screen.getAllByRole("button");
            expect(await screen.findByText(/loaded/i)).toBeInTheDocument();
            act(() => {
                userEvent.click(buttons[0]);
            });
            expect(mockGetRobots).toHaveBeenCalled();
            expect(
                await screen.findByText(mockRobot1.robotName)
            ).toBeInTheDocument();
            expect(
                await screen.findByText(mockRobot2.robotName)
            ).toBeInTheDocument();
        });
        test("Then its function handleAdd should be add Robots to the state", async () => {
            const buttons = screen.getAllByRole("button");
            expect(await screen.findByText(/add/i)).toBeInTheDocument();
            act(() => {
                userEvent.click(buttons[1]);
            });
            expect(RobotsRepo.prototype.create).toHaveBeenCalled();
        });
        test("Then its function handleUpdate should be add Robots to the state", async () => {
            const buttons = screen.getAllByRole("button");
            expect(await screen.findByText(/update/i)).toBeInTheDocument();
            act(() => {
                userEvent.click(buttons[2]);
            });
            expect(RobotsRepo.prototype.update).toHaveBeenCalled();
        });
        test("Then its function handleDelete should be update Robots to the state", async () => {
            const buttons = screen.getAllByRole("button");
            expect(await screen.findByText(/delete/i)).toBeInTheDocument();
            act(() => {
                userEvent.click(buttons[3]);
            });
            expect(RobotsRepo.prototype.delete).toHaveBeenCalled();
        });
        test("Then its function handleFavourite should be add Robots to the state", async () => {
            const buttons = screen.getAllByRole("button");
            expect(await screen.findByText(/favourite/i)).toBeInTheDocument();
            act(() => {
                userEvent.click(buttons[4]);
            });
            expect(RobotsRepo.prototype.update).toHaveBeenCalled();
        });
    });
});
