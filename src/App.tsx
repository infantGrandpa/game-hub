import { Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import ClearFiltersButton from "./components/ClearFiltersButton";
import FiltersMenu from "./components/FiltersMenu";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    const clearAllFilters = () => {
        setGameQuery({ ...gameQuery, genre: null, platform: null });
    };

    const heading =
        (gameQuery.genre?.name || "All") +
        " Games" +
        (gameQuery.platform ? ` on ${gameQuery.platform.name}` : "");

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
                        onSelectGenre={(genre) =>
                            setGameQuery({ ...gameQuery, genre })
                        }
                        selectedGenre={gameQuery.genre}
                    />
                </GridItem>
            </Show>
            <GridItem area="main" paddingX="15px">
                <Heading as="h1" size="xl">
                    {heading}
                </Heading>

                <FiltersMenu
                    gameQuery={gameQuery}
                    onSelectPlatform={(platform) =>
                        setGameQuery({ ...gameQuery, platform })
                    }
                    onSelectSortOrder={(sortOrder) =>
                        setGameQuery({ ...gameQuery, sortOrder })
                    }
                />

                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}

export default App;
