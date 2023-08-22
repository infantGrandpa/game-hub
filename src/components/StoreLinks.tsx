import { HStack, Button } from "@chakra-ui/react";
import { Store } from "../hooks/useGames";

interface Props {
    stores: Store[];
}

const StoreLinks = ({ stores }: Props) => {
    console.log(stores);
    return (
        <HStack>
            {stores.map((store) => (
                <Button key={store.id}>{store.name}</Button>
            ))}
        </HStack>
    );
};

export default StoreLinks;
