import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/my-logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
    return (
        <HStack justifyContent="space-between" p="10px">
            <Image src={logo} boxSize={"60px"}></Image>
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
