import { Robot, RobotType } from "../model/robot.model.js";
import { Repository } from "./repo.js";

export class RobotsRepo implements Repository<Robot> {
    constructor(private url = "http://localhost:3000/robots/") {
        //
    }
    load() {
        return fetch(this.url).then((respuesta) => {
            if (!respuesta.ok)
                throw new Error(
                    `Error: ${respuesta.status} : ${respuesta.statusText}`
                );
            return respuesta.json();
        });
    }

    create(payload: Partial<RobotType>, url: string) {
        return fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-type": "application/json",
            },
        }).then((respuesta) => {
            if (!respuesta.ok)
                throw new Error(
                    `Error ${respuesta.status}: ${respuesta.statusText}`
                );
            return respuesta.json();
        });
    }
}
