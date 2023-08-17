import { HStack, Icon, VisuallyHidden } from "@chakra-ui/react";
import roundToHalf from "../services/round-to-half";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

interface Props {
    rating: number;
}

const StarRating = ({ rating }: Props) => {
    const roundedRating = roundToHalf(rating);
    const isHalfNumber = roundedRating % 1 === 0.5;
    const emptyStars = 5 - roundedRating;

    return (
        <>
            <VisuallyHidden>Rating of {roundedRating}</VisuallyHidden>
            <HStack marginTop={1}>
                {Array.from({ length: roundedRating }, (_, index) => (
                    <Icon key={index} as={BsStarFill} color="gray.500" />
                ))}
                {isHalfNumber && <Icon as={BsStarHalf} color="gray.500" />}
                {Array.from({ length: emptyStars }, (_, index) => (
                    <Icon key={index} as={BsStar} color="gray.500" />
                ))}
            </HStack>
        </>
    );
};

export default StarRating;
