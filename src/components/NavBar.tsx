import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/my-logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
    return (
        <HStack justifyContent="space-between" p="10px">
            <Image src={logo} boxSize={"48px"} borderRadius={4}></Image>
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
