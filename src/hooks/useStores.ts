import useData from "./useData";

export interface StoreLink {
    id: number;
    game_id: number;
    store_id: number;
    url: string;
}

export interface Store {
    id: number;
    name: string;
    slug: string;
    domain: string;
}

const useStores = (game_id: number) => {
    const response = useData<StoreLink>(`games/${game_id}/stores`);

    return response;
};

export const getDirectStoreLinkFromStore = (
    store: Store,
    storeLinks: StoreLink[]
) => {
    return storeLinks.find((link) => link.store_id === store.id);
};

export default useStores;
