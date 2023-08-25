import { HStack, Button, Spinner, Flex } from "@chakra-ui/react";
import useStores, { getDirectStoreLinkFromStore } from "../hooks/useStores";
import { Game } from "../hooks/useGames";
import AlertNotification from "./AlertNotification";

interface Props {
    game: Game;
}

const StoreLinks = ({ game }: Props) => {
    const { data, error, isLoading } = useStores(game.id);

    if (error || !data) {
        return <AlertNotification errorMessage={error} />;
    }

    if (isLoading) {
        return (
            <Flex justifyContent="center">
                <Spinner />;
            </Flex>
        );
    }

    return (
        <HStack>
            {game.stores.map((store) => (
                <a
                    href={getDirectStoreLinkFromStore(store.store, data)?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={store.store.id}
                >
                    <Button>{store.store.name}</Button>
                </a>
            ))}
        </HStack>
    );
};

export default StoreLinks;
