import { useParams } from "react-router-dom";
import { RobotDetails } from "../../components/robot.details/details";
import { RobotType } from "../../types/robot.type";

export function DetailsPage({ robots }: { robots: Array<RobotType> }) {
    const pathId = useParams();

    return (
        <>
            <h2>Details Robot</h2>
            {robots.map((item) => {
                if (item.id === pathId.robotId) {
                    return (
                        <RobotDetails key={item.id} robot={item}></RobotDetails>
                    );
                }
            })}
        </>
    );
}
