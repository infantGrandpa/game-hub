import {
    HStack,
    List,
    ListItem,
    Skeleton,
    SkeletonText,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreItem from "./GenreItem";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres();
    const skeletons = Array.from({ length: 19 }, (_, index) => index + 1);

    if (error) return null;

    return (
        <List spacing={3}>
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
                        <GenreItem onSelectGenre={onSelectGenre} genre={genre} />
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
