import { SyntheticEvent, useState } from "react";
import { RobotType } from "../../types/robot.type";

export function RobotEdit({
    robot,
    handleUpdate,
}: {
    robot: RobotType;
    handleUpdate: (robot: Partial<RobotType>) => void;
}) {
    const initialFormData: Partial<RobotType> = {
        robotName: robot.robotName,
        image: robot.image,
        speed: robot.speed,
        strength: robot.strength,
        creator: robot.creator,
        id: robot.id,
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleUpdate(formData);
    };

    return (
        <>
            <h3>Edit robot</h3>
            <section>
                <form
                    className="add-robot"
                    onSubmit={handleSubmit}
                    data-id={robot.id}
                >
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
                            Update Robot
                        </button>
                    </div>
                </form>
            </section>
            <section>
                <h3>{robot.robotName}</h3>
                <img src={robot.image} alt={robot.robotName}></img>
                <div className="robot-features">
                    <p>
                        Speed: <span>{robot.speed}</span>
                    </p>
                    <p>
                        Strength: <span>{robot.strength}</span>
                    </p>
                    <p>
                        Creation: <span>{robot.creation}</span>
                    </p>
                    <p>
                        Creator: <span>{robot.creator}</span>
                    </p>
                </div>
            </section>
        </>
    );
}
