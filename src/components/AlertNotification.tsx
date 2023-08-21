import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Spacer,
    CloseButton,
    Box,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    errorMessage: string;
}

const AlertNotification = ({ errorMessage }: Props) => {
    const [showAlert, setShowAlert] = useState(true);

    if (showAlert) {
        return (
            <Alert status="error" borderRadius={4}>
                <AlertIcon />
                <Box>
                    <AlertTitle>
                        Oh no! There was an error processing your request.
                    </AlertTitle>
                    <AlertDescription fontStyle="italic">
                        {errorMessage}
                    </AlertDescription>
                </Box>
                <Spacer />
                <CloseButton onClick={() => setShowAlert(false)} />
            </Alert>
        );
    }
};

export default AlertNotification;
