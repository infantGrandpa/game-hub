import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
    return (
        <InputGroup marginX={5}>
            <InputLeftElement children={<BsSearch />} />
            <Input
                borderRadius={25}
                placeholder="Search games..."
                variant="filled"
            />
        </InputGroup>
    );
};

export default SearchInput;
