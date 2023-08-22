import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating: number;
    stores: Store[];
}

export interface Store {
    id: 7;
    name: string;
    slug: string;
    domain: string;
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
