import { BASE_URL } from "../utils/baseUrl";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export function useUser(id) {
    const { data, error, isLoading } = useSWR(
        id > 0 ? `${BASE_URL}/users/${id}` : null,
        fetcher
    );

    return {
        user: data,
        isLoading,
        isError: error,
    };
}
