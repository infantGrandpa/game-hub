import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    Button,
    Center,
    CloseButton,
    Heading,
    Icon,
    SimpleGrid,
    Spacer,
    useBreakpointValue,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import { useState } from "react";
import { FaArrowsRotate } from "react-icons/fa6";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading } = useGames(gameQuery);
    const skeletonCount = useBreakpointValue({ base: 3, md: 10, lg: 15 }) || 3;
    const skeletons = Array.from(
        { length: skeletonCount },
        (_, index) => index + 1
    );

    const [showAlert, setShowAlert] = useState(true);

    if (error && showAlert)
        return (
            <>
                <Alert status="error" borderRadius={4}>
                    <AlertIcon />
                    <Box>
                        <AlertTitle>
                            Oh no! There was an error processing your request.
                        </AlertTitle>
                        <AlertDescription fontStyle="italic">
                            {error}
                        </AlertDescription>
                    </Box>
                    <Spacer />
                    <CloseButton onClick={() => setShowAlert(false)} />
                </Alert>
                <Center marginTop={5}>
                    <Button
                        onClick={() => window.location.reload()}
                        leftIcon={<FaArrowsRotate />}
                        size="lg"
                        colorScheme="yellow"
                        marginX="auto"
                    >
                        Refresh
                    </Button>
                </Center>
            </>
        );

    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
            {isLoading &&
                skeletons.map((skeleton) => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                ))}
            {Array.isArray(data) && data.length > 0
                ? data.map((game) => (
                      <GameCardContainer key={game.id}>
                          <GameCard game={game} />
                      </GameCardContainer>
                  ))
                : !isLoading &&
                  !error && (
                      <Heading as="h2" size="lg">
                          No Games Found!
                      </Heading>
                  )}
        </SimpleGrid>
    );
};

export default GameGrid;
