import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { Platform } from "../hooks/usePlatforms";
import { Box, HStack, Icon, VisuallyHidden } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: BsNintendoSwitch,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
    };

    return (
        <>
            <VisuallyHidden>Available on:</VisuallyHidden>
            <HStack marginTop={2}>
                {platforms.map((platform) => (
                    <Box key={platform.id}>
                        <Icon
                            as={iconMap[platform.slug]}
                            color="blackAlpha.600"
                        />
                        <VisuallyHidden>{platform.name}</VisuallyHidden>
                    </Box>
                ))}
            </HStack>
        </>
    );
};

export default PlatformIconList;
