import axios from "axios";
import useSWR from "swr";
import { BASE_URL } from "../utils/baseUrl";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export function useBike(id) {
    const { data, error, isLoading } = useSWR(
        `${BASE_URL}/bikes/${id}`,
        fetcher
    );

    return {
        bike: data,
        isLoading,
        isError: error,
    };
}
