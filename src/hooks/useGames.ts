import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";
import { Store } from "./useStores";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating: number;
    stores: { store: Store }[];
}

const useGames = (gameQuery: GameQuery) => {
    const response = useData<Game>(
        "/games",
        {
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
            },
        },
        [gameQuery]
    );

    return response;
};

export default useGames;
