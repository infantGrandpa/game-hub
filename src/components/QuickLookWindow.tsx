import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Spinner,
    Text,
    HStack,
    Button,
    Divider,
    SimpleGrid,
    Box,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import useGameDetails from "../hooks/useGameDetails";
import AlertNotification from "./AlertNotification";
import GameCarousel from "./GameCarousel";
import ImageContainer from "./ImageContainer";
import StoreLinks from "./StoreLinks";

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

    const htmlString = data.description;
    const theObj = { __html: htmlString };

    console.log(game);

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
                    <StoreLinks stores={game.stores} />
                    <Divider marginY={2} />
                    <Button>View Full Details</Button>
                    <div dangerouslySetInnerHTML={theObj} />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default QuickLookWindow;
