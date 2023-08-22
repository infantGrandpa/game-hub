import { Container, Image, Spinner, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import useScreenshots, { Screenshot } from "../hooks/useScreenshots";
import AlertNotification from "./AlertNotification";
import Carousel from "./Carousel";

interface Props {
    game: Game;
}

const GameCarousel = ({ game }: Props) => {
    const { data, error, isLoading } = useScreenshots(game.id);

    if (error) return <AlertNotification errorMessage={error} />;

    if (isLoading) return <Spinner />;

    const results = data.results;
    console.log(results);

    return (
        <div>
            {/* Mapping through results and rendering an image for each item */}
            {Array.isArray(results) && results.length > 0 ? (
                results.map((screenshot) => (
                    <Image key={screenshot.id} src={screenshot.image} />
                ))
            ) : (
                <Container
                    padding={3}
                    margin={2}
                    border="1px"
                    borderColor="gray.200"
                >
                    <Text>Invalid data</Text>
                    <Text>Array: {Array.isArray(data)}</Text>
                    <Text>Length: {data.length}</Text>
                </Container>
            )}
        </div>
    );
};

export default GameCarousel;
