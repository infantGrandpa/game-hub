import { Badge, VisuallyHidden } from "@chakra-ui/react";

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
    let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

    return (
        <Badge colorScheme={color} fontSize={"14px"} paddingX={2} marginTop={2}>
            <VisuallyHidden>Critic Score: </VisuallyHidden>
            {score}
        </Badge>
    );
};

export default CriticScore;
