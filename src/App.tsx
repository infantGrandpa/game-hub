import { Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

    const heading = (selectedGenre ? selectedGenre.name : "All") + " Games";

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                md: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                md: "1fr 5fr",
            }}
        >
            <GridItem area="nav">
                <NavBar></NavBar>
            </GridItem>
            <Show above="md">
                <GridItem area="aside" paddingX={3}>
                    <GenreList
                        onSelectGenre={(genre) => setSelectedGenre(genre)}
                        selectedGenre={selectedGenre}
                    />
                </GridItem>
            </Show>
            <GridItem area="main" paddingX="15px">
                <HStack justifyContent="space-between">
                    <Heading as="h1" size="xl" marginBottom={3}>
                        {heading}
                    </Heading>
                    <PlatformSelector />
                </HStack>
                <GameGrid selectedGenre={selectedGenre} />
            </GridItem>
        </Grid>
    );
}

export default App;
