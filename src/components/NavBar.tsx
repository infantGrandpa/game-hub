import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/my-logo.png";

const NavBar = () => {
    return (
        <HStack>
            <Image src={logo} boxSize={"60px"}></Image>
            <Text>Navbar</Text>
        </HStack>
    );
};

export default NavBar;
