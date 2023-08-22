import useData from "./useData";

export interface Screenshot {
    id: number;
    image: string;
    hidden: boolean;
}

const useScreenshots = (id: number) => {
    const response = useData<Screenshot>(`games/${id}/screenshots`);

    return response;
};

export default useScreenshots;
