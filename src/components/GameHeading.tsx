import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const heading = `${gameQuery.platform?.name || ""} ${
        gameQuery.genre?.name || "All"
    }  Games${gameQuery.searchText ? `: "${gameQuery.searchText}"` : ""}`;
    return (
        <Heading as="h1" size="xl">
            {heading}
        </Heading>
    );
};

export default GameHeading;
