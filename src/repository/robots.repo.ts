import { RobotType } from "../types/robot.type.js";
import { Repository } from "./repo.js";

const invalidIdError = new Error("Invalid ID");
export class RobotsRepo implements Repository<RobotType> {
    constructor(private url = "http://localhost:3010/robotsData/") {
        //
    }
    async load(): Promise<RobotType[]> {
        const resp = await fetch(this.url);
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return await resp.json();
    }

    async create(payload: Partial<RobotType>): Promise<RobotType> {
        const resp = await fetch(this.url, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-type": "application/json",
            },
        });
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return await resp.json();
    }
    async update(payload: Partial<RobotType>): Promise<RobotType> {
        if (!payload.id) return Promise.reject(invalidIdError);
        const resp = await fetch(this.url + payload.id, {
            method: "PATCH",
            body: JSON.stringify(payload),
            headers: {
                "Content-type": "application/json",
            },
        });
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return await resp.json();
    }
    async delete(id: RobotType["id"]): Promise<RobotType["id"]> {
        if (!id) return Promise.reject(invalidIdError);
        const resp = await fetch(this.url + id, {
            method: "DELETE",
        });
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return id;
    }
}
