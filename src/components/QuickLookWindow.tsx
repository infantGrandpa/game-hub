import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Spinner,
    Text,
    Image,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import useGameDetails from "../hooks/useGameDetails";
import AlertNotification from "./AlertNotification";

interface Props {
    game: Game;
    isOpen: boolean;
    onClose: () => void;
}

const QuickLookWindow = ({ game, isOpen, onClose }: Props) => {
    const { data, error, isLoading } = useGameDetails(game.id);

    if (error) return <Text>{error};</Text>;

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
                    <Image src={data.background_image} />
                    <Text>{data.description_raw}</Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default QuickLookWindow;
