import { RobotType } from "../../types/robot.type";

export function RobotDetails({ robot }: { robot: RobotType }) {
    return (
        <>
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
        </>
    );
}
