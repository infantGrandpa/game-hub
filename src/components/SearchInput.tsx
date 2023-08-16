import { Input, InputGroup, InputLeftElement, Show } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
    return (
        <InputGroup>
            <InputLeftElement children={<BsSearch />} />
            <Show above="md">
                <Input
                    borderRadius={25}
                    placeholder="Search games..."
                    variant="filled"
                />
            </Show>
        </InputGroup>
    );
};

export default SearchInput;
