import { RobotType } from "../../model/robot.model";

export function RobotDetails({ item }: { item: RobotType }) {
    return (
        <>
            <h2>Details</h2>
            <img src={item.image} alt={item.robotName}></img>
            <p>{item.robotName}</p>
            <div className="robot-features">
                <p>
                    Velocity: <span>{item.velocity}</span>
                </p>
                <p>
                    Strength: <span>{item.strength}</span>
                </p>
                <p>
                    Creation date: <span>{item.creation}</span>
                </p>
                <p>
                    Creator: <span>{item.creator}</span>
                </p>
            </div>
        </>
    );
}
