import {
    Button,
    HStack,
    Icon,
    Switch,
    Text,
    VisuallyHidden,
    useColorMode,
} from "@chakra-ui/react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    const toggleIcon = colorMode === "dark" ? MdOutlineDarkMode : MdDarkMode;
    return (
        <HStack>
            <Button onClick={toggleColorMode}>
                <VisuallyHidden>Toggle Dark Mode</VisuallyHidden>
                <Icon as={toggleIcon} />
            </Button>
        </HStack>
    );
};

export default ColorModeSwitch;
