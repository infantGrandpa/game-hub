import { Alert, AlertIcon, Heading, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = Array.from({ length: 10 }, (_, index) => index + 1);

    return (
        <>
            {error && (
                <Alert status="error" borderRadius={4}>
                    <AlertIcon />
                    There was an error processing your request: {error}
                </Alert>
            )}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3
             }} spacing={5}>
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
        </>
    );
};

export default GameGrid;
