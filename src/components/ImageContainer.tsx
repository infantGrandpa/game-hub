import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const ImageContainer = ({ children }: Props) => {
    return (
        <Box maxH="300px" aspectRatio={16 / 9}>
            {children}
        </Box>
    );
};

export default ImageContainer;
