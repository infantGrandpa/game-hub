import { AbsoluteCenter, Spinner } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import useScreenshots from "../hooks/useScreenshots";
import AlertNotification from "./AlertNotification";
import Carousel from "./Carousel";

interface Props {
    game: Game;
}

const GameCarousel = ({ game }: Props) => {
    const { data, error, isLoading } = useScreenshots(game.id);

    if (error) return <AlertNotification errorMessage={error} />;

    if (isLoading)
        return (
            <AbsoluteCenter>
                <Spinner />;
            </AbsoluteCenter>
        );

    const imageArray = data.map((screenshot) => screenshot.image);

    return (
        <div>
            <Carousel images={imageArray} />
        </div>
    );
};

export default GameCarousel;
