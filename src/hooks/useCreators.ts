import useData from "./useData";

export interface Creator {
    id: number;
    name: string;
    slug: boolean;
    image: string;
    image_background: string;
    games_count: string;
}

const useCreators = (id: number) => {
    const response = useData<Creator>(`games/${id}/development-team`);

    return response;
};

export default useCreators;
