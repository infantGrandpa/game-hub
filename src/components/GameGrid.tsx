import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
    selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
    const { data, error, isLoading } = useGames(selectedGenre);
    const skeletons = Array.from({ length: 10 }, (_, index) => index + 1);

    const heading = (selectedGenre ? selectedGenre.name : "All") + " Games";

    return (
        <Box paddingX="10">
            <Heading as="h1" size="xl" marginBottom={3}>
                {heading}
            </Heading>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3}>
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                {data.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default GameGrid;
