import useData from "./useData";

export interface Screenshot {
    id: number;
    image: string;
    hidden: boolean;
    width: number;
    height: number;
}

const useScreenshots = (id: number) => {
    const response = useData<Screenshot>(
        `games/${id}/screenshots`,
        undefined,
        undefined,
        (response) => response
    );

    return response;
};

export default useScreenshots;
