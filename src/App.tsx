import {
    AbsoluteCenter,
    Box,
    Container,
    Divider,
    Grid,
    GridItem,
    Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
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
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem area="main">
                <Box>
                    <GameGrid />
                </Box>
            </GridItem>
        </Grid>
    );
}

export default App;
