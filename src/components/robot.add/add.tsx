import { SyntheticEvent, useState } from "react";
import { RobotObj } from "../../model/robot.model";
import { RobotType } from "../../types/robot.type";
import "./add.scss";

export function Add({ handleAdd }: { handleAdd: (item: RobotType) => void }) {
    const initialFormData: Partial<RobotType> = {
        robotName: "",
        image: "",
        speed: "",
        strength: "",
        creator: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        formData.image = "https://robohash.org/" + formData.robotName + ".png";
        handleAdd(
            new RobotObj(
                formData.robotName as string,
                formData.image ? formData.image : "",
                formData.speed as string,
                formData.strength as string,
                formData.creator as string
            )
        );
        setFormData(initialFormData);
    };

    return (
        <section>
            <h3>Add robot</h3>
            <form className="add-robot" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="robotName">Robot Name</label>
                    <input
                        type="text"
                        name="robotName"
                        id="robotName"
                        placeholder="Write a name"
                        value={formData.robotName}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="speed">Speed</label>
                    <input
                        type="text"
                        name="speed"
                        id="speed"
                        pattern="[0-9]+"
                        placeholder="Number between 0-10"
                        value={formData.speed}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="strength">Strength</label>
                    <input
                        type="text"
                        name="strength"
                        id="strength"
                        pattern="[0-9]+"
                        placeholder="Number between 0-10"
                        value={formData.strength}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="creator">Creator</label>
                    <input
                        type="text"
                        name="creator"
                        id="creator"
                        placeholder="Write your name"
                        value={formData.creator}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <button type="submit">
                        <span className="material-symbols-outlined">
                            add_circle
                        </span>
                        Add
                    </button>
                </div>
            </form>
        </section>
    );
}
