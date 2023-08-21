import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<DataType> {
    count: number;
    results: DataType[];
}

const useData = <DataType>(
    endpoint: string,
    requestConfig?: AxiosRequestConfig,
    dependencies?: any[],
    transformResponse?: (response: any) => DataType[]
) => {
    const [data, setData] = useState<DataType[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(
        () => {
            const controller = new AbortController();

            setLoading(true);
            apiClient
                .get<FetchResponse<DataType>>(endpoint, {
                    signal: controller.signal,
                    ...requestConfig,
                })
                .then((res) => {
                    const transformedData = transformResponse
                        ? transformResponse(res.data)
                        : res.data.results;
                    setData(transformedData);
                    setLoading(false);
                })
                .catch((err) => {
                    if (err instanceof CanceledError) return;
                    setError(err.message);
                    setLoading(false);
                });

            return () => {
                controller.abort();
            };
        },
        dependencies ? [...dependencies] : []
    );

    return { data, error, isLoading };
};

export default useData;
