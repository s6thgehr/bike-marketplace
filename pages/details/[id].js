import { useRouter } from "next/router";
import { useBike } from "../../hooks/useBike";
import Loading from "../../components/Loading";
import DetailsView from "../../views/DetailsView";

const Details = () => {
    const router = useRouter();
    const { id } = router.query;

    // id is undefined during prerendering, need to use server-side rendering, here is just a bad solution
    const { bike, isLoading, isError } = useBike(id ? id : 1);

    return isLoading ? <Loading /> : <DetailsView bike={bike} />;
};

export default Details;
