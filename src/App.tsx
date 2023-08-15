import {
    Button,
    Grid,
    GridItem,
    HStack,
    Heading,
    Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import ClearFiltersButton from "./components/ClearFiltersButton";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
        null
    );

    const clearAllFilters = () => {
        setSelectedGenre(null);
        setSelectedPlatform(null);
    };

    const heading =
        (selectedGenre?.name || "All") +
        " Games" +
        (selectedPlatform ? ` on ${selectedPlatform.name}` : "");

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
                    <ClearFiltersButton onClearFilters={clearAllFilters} />
                    <GenreList
                        onSelectGenre={(genre) => setSelectedGenre(genre)}
                        selectedGenre={selectedGenre}
                    />
                </GridItem>
            </Show>
            <GridItem area="main" paddingX="15px">
                <HStack justifyContent="space-between">
                    <Heading
                        as="h1"
                        size="xl"
                        marginBottom={3}
                        transition="height 1000ms ease"
                    >
                        {heading}
                    </Heading>
                    <PlatformSelector
                        onSelectPlatform={(platform) =>
                            setSelectedPlatform(platform)
                        }
                        selectedPlatform={selectedPlatform}
                    />
                </HStack>
                <GameGrid
                    selectedGenre={selectedGenre}
                    selectedPlatform={selectedPlatform}
                />
            </GridItem>
        </Grid>
    );
}

export default App;
