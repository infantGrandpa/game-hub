import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Spinner,
    Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import useGameDetails from "../hooks/useGameDetails";
import AlertNotification from "./AlertNotification";
import GameCarousel from "./GameCarousel";
import ImageContainer from "./ImageContainer";

interface Props {
    game: Game;
    isOpen: boolean;
    onClose: () => void;
}

const QuickLookWindow = ({ game, isOpen, onClose }: Props) => {
    const { data, error, isLoading } = useGameDetails(game.id);

    if (error) return <AlertNotification errorMessage={error} />;

    if (isLoading) return <Spinner />;

    if (!data) {
        return <AlertNotification errorMessage={error} />;
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            closeOnOverlayClick={false}
            size="xl"
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{game.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <ImageContainer>
                        <GameCarousel game={game} />
                    </ImageContainer>
                    <Text>{data.description_raw}</Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default QuickLookWindow;
