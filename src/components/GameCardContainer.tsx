import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
    return (
        <Box w="100%" h="100%" borderRadius={"4"} overflow={"hidden"}>
            {children}
        </Box>
    );
};

export default GameCardContainer;
