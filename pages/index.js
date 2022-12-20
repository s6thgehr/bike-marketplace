import useSWR from "swr";
import Link from "next/link";
import axios from "axios";
import { BASE_URL } from "../utils/baseUrl";
import Loading from "../components/Loading";
import Filter from "../components/Filter";
import { useState } from "react";
import BikeType from "../utils/bike_type";
import { useBikes } from "../hooks/useBikes";

export default function Home() {
    const { bikes, error, isLoading } = useBikes();

    const [filter, setFilter] = useState({});

    return isLoading ? (
        <Loading />
    ) : (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
                    Bikes for Sale
                </h2>
                <Filter filter={filter} setFilter={setFilter} />

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {bikes
                        .filter((bike) => bike.itemState === "published")
                        .filter((bike) => {
                            const selected = Object.keys(filter).filter(
                                (key) => filter[key]
                            );
                            if (selected.length) {
                                return selected.includes(bike.type);
                            } else {
                                return true;
                            }
                        })
                        .map((bike) => (
                            <div key={bike.id} className="group relative">
                                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <img
                                        src={bike.imageUrl}
                                        alt="bike image"
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <Link href={`/details/${bike.id}`}>
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute inset-0"
                                                />
                                                {bike.model}
                                            </Link>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {bike.type}
                                        </p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">
                                        {bike.price} EUR
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
