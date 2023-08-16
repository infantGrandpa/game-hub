import { Box, Flex, Image } from "@chakra-ui/react";
import logo from "../assets/my-logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
    return (
        <Box justifyContent="space-between" flexWrap="wrap" p="10px">
            <Image src={logo} boxSize={"48px"} borderRadius={4}></Image>
            <Box marginX={5} order={{ base: 3, md: "initial" }}>
                <SearchInput />
            </Box>
            <ColorModeSwitch />
        </Box>
    );
};

export default NavBar;
