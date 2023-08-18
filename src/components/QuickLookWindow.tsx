import { Game } from "../hooks/useGames";

interface Props {
    game: Game;
}

const QuickLookWindow = ({ game }: Props) => {
    return <div>{game.name}</div>;
};

export default QuickLookWindow;
