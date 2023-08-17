import { Game } from "../hooks/useGames";
import {
    AspectRatio,
    Card,
    CardBody,
    HStack,
    Heading,
    Image,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    game: Game;
}
const GameCard = ({ game }: Props) => {
    return (
        <Card h="100%">
            <AspectRatio ratio={16 / 9}>
                <Image
                    src={getCroppedImageUrl(game.background_image, game.name)}
                />
            </AspectRatio>
            <CardBody alignContent={"end"} paddingTop={2}>
                <HStack justifyContent={"space-between"} marginBottom={2}>
                    <PlatformIconList
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading as="h3" size="md">
                    {game.name}
                </Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;
