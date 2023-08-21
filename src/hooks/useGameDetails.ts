import useData from "./useData";

export interface GameDetails {
    id: number;
    slug: string;
    name: string;
    description: string;
    description_raw: string;
    background_image: string;
}

const useGameDetails = (id: number) => {
    const response = useData<GameDetails>(
        "/games/" + id,
        undefined,
        undefined,
        (response) => response
    );

    console.log(response.data);

    return {
        data: response.data as unknown as GameDetails,
        error: response.error,
        isLoading: response.isLoading,
    };
};

export default useGameDetails;
