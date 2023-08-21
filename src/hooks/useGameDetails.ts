import useData from "./useData";

export interface GameDetails {
    id: number;
    slug: string;
    name: string;
    description: string;
    description_raw: string;
}

const useGameDetails = (id: number) => {
    const response = useData<GameDetails>(
        "/games/" + id,
        undefined,
        undefined,
        (response) => response
    );

    console.log(response);

    return response;
};

export default useGameDetails;
