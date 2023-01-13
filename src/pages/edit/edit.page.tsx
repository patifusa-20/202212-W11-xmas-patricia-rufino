import { useParams } from "react-router-dom";
import { RobotEdit } from "../../components/robot.edit/edit";
import { RobotType } from "../../types/robot.type";

export function EditPage({
    robots,
    handleUpdate,
}: {
    robots: Array<RobotType>;
    handleUpdate: (robot: Partial<RobotType>) => void;
}) {
    const pathName = useParams();

    return (
        <>
            <h2>Edit Robot</h2>
            {robots.map((item) => {
                if (item.robotName === pathName.robotName) {
                    return (
                        <RobotEdit
                            key={item.id}
                            robot={item}
                            handleUpdate={handleUpdate}
                        ></RobotEdit>
                    );
                }
            })}
        </>
    );
}
