import { RobotDetails } from "../../components/robot.details/details";
import { RobotType } from "../../types/robot.type";

export function DetailsPage({ robots }: { robots: Array<RobotType> }) {
    return (
        <>
            <h2>Details Robot</h2>
            {robots.map((item) => {
                if (item.id === location.pathname.split("=")[1]) {
                    return (
                        <RobotDetails key={item.id} robot={item}></RobotDetails>
                    );
                }
            })}
        </>
    );
}
