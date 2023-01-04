import { RobotObj, RobotType } from "../model/robot.model";
import { RobotsRepo } from "./robots.repo";

describe("Given a Robot Repo", () => {
    const mockRobotName = "Test 1 name";
    const mockImage = "Test image";
    const mockSpeed = "Test speed";
    const mockStrength = "Test strength";
    const mockCreator = "Test creator name";
    const mockRobotName2 = "Test 2 name";
    const mockImage2 = "Test image";
    const mockSpeed2 = "Test speed";
    const mockStrength2 = "Test strength";
    const mockCreator2 = "Test creator name";
    const mockData = [
        new RobotObj(
            mockRobotName,
            mockImage,
            mockSpeed,
            mockStrength,
            mockCreator
        ),
        new RobotObj(
            mockRobotName2,
            mockImage2,
            mockSpeed2,
            mockStrength2,
            mockCreator2
        ),
    ];
    const repo = new RobotsRepo();

    beforeEach(() => {
        // mocks de fetch
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockData),
        });
    });

    test("Then we can instantiate it", () => {
        expect(repo).toBeInstanceOf(RobotsRepo);
    });

    describe("When we use load method", () => {
        test("Then we received the robots contents in the repo", async () => {
            const data = await repo.load();
            expect(global.fetch).toHaveBeenCalled();
            expect(data).toEqual(mockData);
        });
        test("Then if there are NO DATA, we received a rejected promise", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });
            await expect(async () => {
                await repo.load();
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });

    describe("When we use create method", () => {
        test(`Then if the data are VALID, we received the robot 
            created in the repo with its own new id`, async () => {
            const mockNewRobotPayload: Partial<RobotType> = {
                robotName: "Test robot name",
                speed: "Test robot speed",
                strength: "Test robot strength",
                creator: "Test robot creator",
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockNewRobotPayload),
            });

            const data = await repo.create(mockNewRobotPayload);
            expect(data).toHaveProperty(
                "robotName",
                mockNewRobotPayload.robotName
            );
            expect(data).toHaveProperty("speed", mockNewRobotPayload.speed);
            expect(data).toHaveProperty(
                "strength",
                mockNewRobotPayload.strength
            );
            expect(data).toHaveProperty("creator", mockNewRobotPayload.creator);
        });
        test(`Then if the data are NOT VALID, we received a rejected promise`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });

            await expect(async () => {
                await repo.create({});
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });

    describe("When we use update method", () => {
        test(`Then if the ID are VALID, we received the robot 
            update in the repo`, async () => {
            const updatePayload: Partial<RobotType> = {
                id: mockData[0].id,
                creator: "Ursula",
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(updatePayload),
            });
            const data = await repo.update(updatePayload);
            expect(data).toHaveProperty("creator", updatePayload.creator);
        });
        test(`Then if there are NOT ID, we received a null`, async () => {
            await expect(async () => {
                await repo.update({});
            }).rejects.toThrowError();
            expect(global.fetch).not.toHaveBeenCalled();
        });
        test(`Then if the ID are NOT VALID, we received a null`, async () => {
            const updatePayload: Partial<RobotType> = {
                id: "bad",
                creator: "Ursula",
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });
            await expect(async () => {
                await repo.update(updatePayload);
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });

    describe("When we use delete method", () => {
        test(`Then if the ID are VALID, we received the ID 
            of the robot delete in the repo`, async () => {
            const id = mockData[0].id;
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(id),
            });
            const data = await repo.delete(id);
            expect(global.fetch).toHaveBeenCalled();
            expect(data).toBe(id);
        });
        test(`Then if there are NOT ID, we received a null`, async () => {
            await expect(async () => {
                await repo.delete("");
            }).rejects.toThrowError();
            expect(global.fetch).not.toHaveBeenCalled();
        });
        test(`Then if the ID are NOT VALID, we received a null`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });
            await expect(async () => {
                await repo.delete("bad");
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });
});
