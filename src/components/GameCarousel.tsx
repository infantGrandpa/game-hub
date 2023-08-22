import { Container, Image, Spinner, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import useScreenshots from "../hooks/useScreenshots";
import AlertNotification from "./AlertNotification";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    game: Game;
}

const GameCarousel = ({ game }: Props) => {
    const { data, error, isLoading } = useScreenshots(game.id);

    if (error) return <AlertNotification errorMessage={error} />;

    if (isLoading) return <Spinner />;

    return (
        <div>
            {/* Mapping through results and rendering an image for each item */}
            {Array.isArray(data) && data.length > 0 ? (
                data.map((screenshot) => (
                    <Image
                        key={screenshot.id}
                        src={getCroppedImageUrl(screenshot.image)}
                    />
                ))
            ) : (
                <Container
                    padding={3}
                    margin={2}
                    border="1px"
                    borderColor="gray.200"
                >
                    <Text>Invalid data</Text>
                </Container>
            )}
        </div>
    );
};

export default GameCarousel;
