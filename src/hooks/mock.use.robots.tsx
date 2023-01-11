import { RobotObj } from "../model/robot.model";
import { RobotsRepo } from "../repository/robots.repo";
import { getRobots } from "../service/store.robots";
export const mockRobot1 = new RobotObj(
    "Test Robot 1",
    "image",
    "4",
    "5",
    "Prueba"
);
mockRobot1.id = "000001";
export const mockRobot2 = new RobotObj(
    "Test Robot 2",
    "image",
    "4",
    "5",
    "Prueba"
);
mockRobot2.id = "000002";
export const mockRobots = [mockRobot1, mockRobot2];
export const mockAddRobot = new RobotObj(
    "Added Robot",
    "image",
    "4",
    "5",
    "Prueba"
);
mockAddRobot.id = "000003";
export const mockUpdateRobot = { ...mockRobot2, title: "Update Robot" };

export const mockValidRepoResponse = () => {
    (RobotsRepo.prototype.load as jest.Mock).mockResolvedValue(mockRobots);
    (RobotsRepo.prototype.create as jest.Mock).mockResolvedValue(mockAddRobot);
    (RobotsRepo.prototype.update as jest.Mock).mockResolvedValue(
        mockUpdateRobot
    );
    (RobotsRepo.prototype.delete as jest.Mock).mockResolvedValue(mockRobot1.id);
};

export const mockGetRobots = (getRobots as jest.Mock).mockResolvedValue(
    mockRobots
);
