import { RobotType } from "../../model/robot.model";

export function RobotDetails({ robot }: { robot: RobotType }) {
    return (
        <>
            <h2>{robot.robotName}</h2>
            <img src={robot.image} alt={robot.robotName}></img>
            <div className="robot-features">
                <p>
                    Speed: <span>{robot.speed}</span>
                </p>
                <p>
                    Strength: <span>{robot.strength}</span>
                </p>
                <p>
                    Creation date: <span>{robot.creation}</span>
                </p>
                <p>
                    Creator: <span>{robot.creator}</span>
                </p>
            </div>
        </>
    );
}
