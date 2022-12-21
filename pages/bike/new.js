import BikeForm from "../../components/BikeForm";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "../../utils/baseUrl";
import { useBikeStore } from "../../stores/useBikeStore";
import { useUserStore } from "../../stores/useUserStore";

function NewBike() {
    const router = useRouter();
    const addBike = useBikeStore((state) => state.addBike);
    const userId = useUserStore((state) => state.loggedInUserId);

    function newBike(data) {
        axios
            .post(`${BASE_URL}/bikes`, {
                ...data,
                itemState: "published",
                userId: userId,
            })
            .then((response) => {
                addBike(response.data);
                router.push(`/details/${response.data.id}`);
            })
            .catch((error) => console.log(error));
    }
    return (
        <div className="flex justify-center">
            <BikeForm
                formData={{
                    model: "",
                    type: "",
                    description: "",
                    imageUrl: "",
                    city: "",
                    price: "",
                }}
                handleSubmit={newBike}
            />
        </div>
    );
}

export default NewBike;
