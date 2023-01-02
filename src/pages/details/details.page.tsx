import { RobotDetails } from "../../components/robot.details/details";
import { RobotType } from "../../model/robot.model";

export function DetailsPage({ robots }: { robots: Array<RobotType> }) {
    return (
        <>
            <h2>Details Robot</h2>
            {robots.filter((element) => {
                if (element.id === location.search.slice(4)) {
                    <RobotDetails item={element}></RobotDetails>;
                }
            })}
        </>
    );
}
