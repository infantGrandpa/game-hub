import {
    Stack,
    Menu,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    Box,
    AccordionPanel,
    Icon,
} from "@chakra-ui/react";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import { GameQuery } from "../App";
import { Platform } from "../hooks/usePlatforms";
import { BsFilter } from "react-icons/bs";

interface Props {
    gameQuery: GameQuery;
    onSelectPlatform: (platform: Platform) => void;
    onSelectSortOrder: (sortOrder: string) => void;
}

const FiltersMenu = ({
    gameQuery,
    onSelectPlatform,
    onSelectSortOrder,
}: Props) => {
    return (
        <Accordion allowMultiple marginY={3}>
            <AccordionItem>
                <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                        Filters
                    </Box>
                    <Icon as={BsFilter} />
                </AccordionButton>
                <AccordionPanel>
                    <Menu>
                        <Stack spacing={3}>
                            <PlatformSelector
                                onSelectPlatform={onSelectPlatform}
                                selectedPlatform={gameQuery.platform}
                            />
                            <SortSelector
                                onSelectSortOrder={onSelectSortOrder}
                                sortOrder={gameQuery.sortOrder}
                            />
                        </Stack>
                    </Menu>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default FiltersMenu;
