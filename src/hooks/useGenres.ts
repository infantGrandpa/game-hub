import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    slug: string;
}

const useGenres = () => ({
    data: genres.results,
    isLoading: false,
    error: null,
});

export default useGenres;
