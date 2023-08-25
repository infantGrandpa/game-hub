import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Spinner,
    Divider,
    Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import useGameDetails from "../hooks/useGameDetails";
import AlertNotification from "./AlertNotification";
import GameCarousel from "./GameCarousel";
import ImageContainer from "./ImageContainer";
import StoreLinks from "./StoreLinks";
import truncateText from "../services/truncate-text";

interface Props {
    game: Game;
    isOpen: boolean;
    onClose: () => void;
}

const QuickLookWindow = ({ game, isOpen, onClose }: Props) => {
    const { data, error, isLoading } = useGameDetails(game.id);

    if (error) return <AlertNotification errorMessage={error} />;

    if (isLoading) return <Spinner />;

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

                    <Divider marginY={2} />
                    <StoreLinks game={game} />
                    <Divider marginY={2} />
                    <Text>
                        {data.description_raw
                            ? truncateText(data.description_raw, 500)
                            : "..."}
                    </Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default QuickLookWindow;
