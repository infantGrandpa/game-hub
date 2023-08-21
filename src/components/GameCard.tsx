import { Game } from "../hooks/useGames";
import {
    AspectRatio,
    Box,
    Button,
    Card,
    CardBody,
    HStack,
    Heading,
    useDisclosure,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import StarRating from "./StarRating";
import QuickLookWindow from "./QuickLookWindow";

interface Props {
    game: Game;
}
const GameCard = ({ game }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Card h="100%" bg="blackAlpha.300" role="group">
            <AspectRatio ratio={16 / 9}>
                <Box
                    bgImage={getCroppedImageUrl(
                        game.background_image,
                        game.name
                    )}
                    bgSize="cover"
                    bgPosition="center"
                    bgRepeat="no-repeat"
                >
                    <Button
                        variant="solid"
                        colorScheme="gray"
                        backgroundColor="blackAlpha.700"
                        opacity="0"
                        _groupHover={{ opacity: "1" }}
                        onClick={onOpen}
                    >
                        Quick look
                    </Button>
                </Box>
            </AspectRatio>
            <CardBody alignContent={"end"} paddingTop={2} paddingBottom={4}>
                <HStack justifyContent={"space-between"}>
                    <StarRating rating={game.rating} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading as="h3" size="md" marginTop={1}>
                    {game.name}
                </Heading>
                <PlatformIconList
                    platforms={game.parent_platforms.map((p) => p.platform)}
                />
            </CardBody>
            <QuickLookWindow game={game} isOpen={isOpen} onClose={onClose} />
        </Card>
    );
};

export default GameCard;
