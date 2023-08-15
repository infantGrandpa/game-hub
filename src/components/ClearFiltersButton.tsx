import { Button } from "@chakra-ui/react";

interface Props {
    onClearFilters: () => void;
}

const ClearFiltersButton = ({ onClearFilters }: Props) => {
    return (
        <Button marginBottom={3} w="100%" onClick={() => onClearFilters()}>
            Clear Filters
        </Button>
    );
};

export default ClearFiltersButton;
