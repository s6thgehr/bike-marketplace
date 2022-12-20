import axios from "axios";
import useSWR from "swr";
import { BASE_URL } from "../utils/baseUrl";

const bikesFetcher = (url) => axios.get(url).then((res) => res.data);

export function useBikes() {
    const { data, error, isLoading } = useSWR(
        `${BASE_URL}/bikes`,
        bikesFetcher
    );

    return {
        bikes: data,
        isLoading,
        isError: error,
    };
}
