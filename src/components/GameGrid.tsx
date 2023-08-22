import {
    Button,
    Center,
    Heading,
    SimpleGrid,
    useBreakpointValue,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import { FaArrowsRotate } from "react-icons/fa6";
import AlertNotification from "./AlertNotification";

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

    if (error)
        return (
            <>
                <AlertNotification errorMessage={error} />
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

    console.log(data);

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
