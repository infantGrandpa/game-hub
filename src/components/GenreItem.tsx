import { Icon, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../hooks/useGenres";
import { IconType } from "react-icons";
import {
    FaFlagCheckered,
    FaMap,
    FaChalkboardTeacher,
    FaChessKnight,
    FaPuzzlePiece,
    FaDice,
    FaMobile,
} from "react-icons/fa";
import {
    GiBoxingGlove,
    GiCardRandom,
    GiJumpAcross,
    GiBattleGear,
    GiSoccerKick,
    GiAk47,
    GiBarracks,
} from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { HiOutlineStatusOnline, HiUserGroup } from "react-icons/hi";
import { SiApplearcade } from "react-icons/si";
import { LuBinary } from "react-icons/lu";

interface Props {
    genre: Genre;
}

const GenreItem = ({ genre }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        action: GiBattleGear,
        indie: HiUserGroup,
        adventure: FaMap,
        "role-playing-games-rpg": FaDice,
        strategy: GiBarracks,
        shooter: GiAk47,
        casual: FaMobile,
        simulation: LuBinary,
        puzzle: FaPuzzlePiece,
        arcade: SiApplearcade,
        platformer: GiJumpAcross,
        "massively-multiplayer": HiOutlineStatusOnline,
        racing: FaFlagCheckered,
        sports: GiSoccerKick,
        fighting: GiBoxingGlove,
        family: MdFamilyRestroom,
        "board-games": FaChessKnight,
        educational: FaChalkboardTeacher,
        card: GiCardRandom,
    };

    return (
        <>
            <Icon boxSize="32px" as={iconMap[genre.slug]} color="gray.500" />
            <Text fontSize="md">{genre.name}</Text>
        </>
    );
};

export default GenreItem;
