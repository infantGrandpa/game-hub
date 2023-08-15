import {
    Button,
    HStack,
    List,
    ListItem,
    Skeleton,
    SkeletonText,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreItem from "./GenreItem";

interface Props {
    onSelectGenre: (genre: Genre | null) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoading, error } = useGenres();
    const skeletons = Array.from({ length: 19 }, (_, index) => index + 1);

    if (error) return null;

    return (
        <List spacing={3}>
            <Button w="100%" onClick={() => onSelectGenre(null)}>
                Clear Filters
            </Button>
            {isLoading &&
                skeletons.map((skeleton) => (
                    <HStack key={skeleton}>
                        <Skeleton boxSize="32px"></Skeleton>
                        <SkeletonText noOfLines={1} w="175px" />
                    </HStack>
                ))}
            {data.map((genre) => (
                <ListItem key={genre.id}>
                    <HStack>
                        <GenreItem
                            onSelectGenre={onSelectGenre}
                            genre={genre}
                            isSelected={genre?.id === selectedGenre?.id}
                        />
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
