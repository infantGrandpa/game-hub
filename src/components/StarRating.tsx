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

    const starColor = "blackAlpha.600";

    return (
        <>
            <VisuallyHidden>Rating of {roundedRating}</VisuallyHidden>
            <HStack marginTop={1}>
                {Array.from({ length: roundedRating }, (_, index) => (
                    <Icon key={index} as={BsStarFill} color={starColor} />
                ))}
                {isHalfNumber && <Icon as={BsStarHalf} color={starColor} />}
                {Array.from({ length: emptyStars }, (_, index) => (
                    <Icon key={index} as={BsStar} color={starColor} />
                ))}
            </HStack>
        </>
    );
};

export default StarRating;
