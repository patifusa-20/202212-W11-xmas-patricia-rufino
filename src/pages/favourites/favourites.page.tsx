import { Robots } from "../../components/robots/robots";
import { RobotType } from "../../types/robot.type";

export function FavouritesPage({
    robots,
    handleDelete,
    handleFavourite,
}: {
    robots: Array<RobotType>;
    handleDelete: (id: RobotType["id"]) => void;
    handleFavourite: (robot: Partial<RobotType>) => void;
}) {
    return (
        <>
            <h2>My Favourite Robots</h2>
            <Robots
                robots={robots.filter((item) => item.isFavourite)}
                handleDelete={handleDelete}
                handleFavourite={handleFavourite}
            ></Robots>
        </>
    );
}
