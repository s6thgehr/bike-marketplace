import Loading from "../components/Loading";
import { useUser } from "../hooks/useUser";

function DetailsView({ bike }) {
    const { user: owner, isLoading } = useUser(bike.userId);

    if (isLoading) return <Loading />;

    return (
        <div className="flex">
            <div className="w-1/2">
                <img src={bike.imageUrl} alt={bike.model} className="w-full" />
            </div>
            <div className="w-1/2 grid grid-rows-5 grid-flow-col gap-4">
                <h2 className="px-4 pt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {bike.model}
                </h2>
                <p className="px-4">{bike.description}</p>
                <div className="flex flex-row">
                    <div className="basis-1/2 flex flex-col justify-between">
                        <div className="px-4">
                            <div className="font-bold inline">Location:</div>{" "}
                            {bike.city}
                        </div>
                        <div className="px-4 mt-8">
                            <div className="font-bold inline">Price:</div>{" "}
                            {bike.price} Euro
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="font-bold">Kontakt:</div>{" "}
                        <div className="mt-2">{owner.loginName}</div>
                        <div>{owner.email}</div>
                        <div>{owner.mobile}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsView;
