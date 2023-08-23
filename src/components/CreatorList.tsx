import { Heading, ListItem, Spinner, UnorderedList } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import AlertNotification from "./AlertNotification";
import useCreators from "../hooks/useCreators";

interface Props {
    game: Game;
}

const CreatorList = ({ game }: Props) => {
    const { data, error, isLoading } = useCreators(game.id);

    const heading = (
        <Heading as="h3" size="md">
            Creators
        </Heading>
    );

    if (error) {
        return (
            <>
                {heading}
                <AlertNotification errorMessage={error} />
            </>
        );
    }

    if (isLoading) {
        return (
            <>
                {heading}
                <Spinner />
            </>
        );
    }

    return (
        <>
            {heading}
            <UnorderedList>
                {data.map((creator) => (
                    <ListItem key={creator.id}>{creator.name}</ListItem>
                ))}
            </UnorderedList>
        </>
    );
};

export default CreatorList;
