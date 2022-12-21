import axios from "axios";
import { useRouter } from "next/router";
import BikeForm from "../../../components/BikeForm";
import Loading from "../../../components/Loading";
import { useBike } from "../../../hooks/useBike";
import { useBikeStore } from "../../../stores/useBikeStore";
import { BASE_URL } from "../../../utils/baseUrl";

function EditBike() {
    const router = useRouter();
    const { id } = router.query;
    const editBike = useBikeStore((state) => state.editBike);

    const { bike, isLoading } = useBike(id);

    function edit(data) {
        axios
            .put(`${BASE_URL}/bikes/${id}`, { ...bike, ...data })
            .then((response) => {
                editBike(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        router.push(`/details/${id}`);
    }

    if (isLoading) return <Loading />;

    return (
        <div className="flex justify-center">
            <BikeForm
                formData={{
                    model: bike?.model,
                    type: bike?.type,
                    description: bike?.description,
                    imageUrl: bike?.imageUrl,
                    location: bike?.city,
                    price: bike?.price,
                }}
                handleSubmit={edit}
            />
        </div>
    );
}

export default EditBike;
