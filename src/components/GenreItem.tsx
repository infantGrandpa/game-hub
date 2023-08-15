import { Button } from "@chakra-ui/react";
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
    onSelectGenre: (genre: Genre) => void;
    isSelected: boolean;
}

const GenreItem = ({ genre, onSelectGenre, isSelected }: Props) => {
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

    const IconComponent = iconMap[genre.slug];

    return (
        <>
            <Button
                onClick={() => onSelectGenre(genre)}
                size="md"
                variant="ghost"
                w="100%"
                leftIcon={<IconComponent size="2em" />}
                justifyContent={"flex-start"}
                paddingLeft={isSelected ? 6 : 2}
                transition={"padding-left 200ms ease-out"}
            >
                {genre.name}
            </Button>
        </>
    );
};

export default GenreItem;
