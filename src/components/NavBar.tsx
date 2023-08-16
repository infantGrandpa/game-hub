import { ButtonGroup, Flex, Image, Spacer } from "@chakra-ui/react";
import logo from "../assets/my-logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
    return (
        <Flex flexWrap="nowrap" p="10px">
            <Image src={logo} boxSize={"48px"} borderRadius={4}></Image>

            <SearchInput />
            <ColorModeSwitch />
        </Flex>
    );
};

export default NavBar;
