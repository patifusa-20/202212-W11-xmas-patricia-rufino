import { RobotDetails } from "../../components/robot.details/details";
import { RobotType } from "../../model/robot.model";

export function DetailsPage({ robots }: { robots: Array<RobotType> }) {
    return (
        <>
            <h2>Details Robot</h2>
            {robots.map((item) => {
                if (item.id === location.pathname.slice(19)) {
                    return (
                        <RobotDetails key={item.id} robot={item}></RobotDetails>
                    );
                }
            })}
        </>
    );
}