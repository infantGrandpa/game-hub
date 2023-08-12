import { Container, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
                    <Container
                        border="1px"
                        borderColor="gray.200"
                        borderRadius="3px"
                        m="5px"
                        p="5px"
                    >
                        Aside
                    </Container>
                </GridItem>
            </Show>
            <GridItem area="main">
                <Container
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="3px"
                    m="5px"
                    p="5px"
                >
                    Main
                </Container>
            </GridItem>
        </Grid>
    );
}

export default App;
