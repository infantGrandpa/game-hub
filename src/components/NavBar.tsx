import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/my-logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack spacing={3} margin={3}>
            <Image src={logo} boxSize={"48px"} borderRadius={4}></Image>
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
