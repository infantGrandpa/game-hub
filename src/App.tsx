import { Container, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                md: `"nav nav" "aside main"`,
            }}
        >
            <GridItem area="nav">
                <NavBar></NavBar>
            </GridItem>
            <Show above="md">
                <GridItem area="aside">
                    <Container>Aside</Container>
                </GridItem>
            </Show>
            <GridItem area="main">
                <Container>
                    <GameGrid />
                </Container>
            </GridItem>
        </Grid>
    );
}

export default App;
