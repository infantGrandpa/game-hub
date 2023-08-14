import {
    HStack,
    Image,
    List,
    ListItem,
    Skeleton,
    SkeletonText,
    Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
    const { data, isLoading } = useGenres();
    const skeletons = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ];
    return (
        <List spacing={3}>
            {isLoading &&
                skeletons.map((skeleton) => (
                    <HStack>
                        <Skeleton boxSize="32px" key={skeleton}></Skeleton>
                        <SkeletonText noOfLines={1} w="60%" />
                    </HStack>
                ))}
            {data.map((genre) => (
                <ListItem key={genre.id}>
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Text fontSize="md">{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
