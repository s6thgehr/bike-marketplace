import { bikes } from "../data/bikes";

export default function Home() {
    const bikesData = bikes;
    return (
        <>
            {bikesData.map((bike) => {
                return <div>{bike.type}</div>;
            })}
        </>
    );
}
