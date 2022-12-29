import { SyntheticEvent, useState } from "react";
import { Robot, RobotType } from "../../model/robot.model";
import "./add.scss";

export function Add({ handleAdd }: { handleAdd: (item: RobotType) => void }) {
    const initialFormData: Partial<RobotType> = {
        robotName: "",
        image: "",
        velocity: "",
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
            new Robot(
                formData.robotName as string,
                formData.image ? formData.image : "",
                formData.velocity as string,
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
                    <label htmlFor="robotName">Name</label>
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
                    <label htmlFor="velocity">Velocity</label>
                    <input
                        type="text"
                        name="velocity"
                        id="velocity"
                        placeholder="Write a velocity"
                        value={formData.velocity}
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
                        placeholder="Write a strength"
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
