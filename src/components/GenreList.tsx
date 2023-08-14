import {
    HStack,
    List,
    ListItem,
    Skeleton,
    SkeletonText,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreItem from "./GenreItem";

const GenreList = () => {
    const { data, isLoading } = useGenres();
    const skeletons = Array.from({ length: 19 }, (_, index) => index + 1);
    return (
        <List spacing={4}>
            {isLoading &&
                skeletons.map((skeleton) => (
                    <HStack key={skeleton}>
                        <Skeleton boxSize="32px"></Skeleton>
                        <SkeletonText noOfLines={1} w="60%" />
                    </HStack>
                ))}
            {data.map((genre) => (
                <ListItem key={genre.id}>
                    <HStack>
                        <GenreItem genre={genre} />
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
