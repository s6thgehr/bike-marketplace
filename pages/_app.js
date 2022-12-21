import Layout from "../components/Layout";
import Head from "next/head";
import "../styles/globals.css";
import { useUserStore } from "../stores/useUserStore";
import { useBikeStore } from "../stores/useBikeStore";
import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/baseUrl";

export default function App({ Component, pageProps }) {
    const setUsers = useUserStore((state) => state.setUsers);
    const setBikes = useBikeStore((state) => state.setBikes);
    useEffect(() => {
        axios
            .get(`${BASE_URL}/users`)
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        axios
            .get(`${BASE_URL}/bikes`)
            .then((response) => {
                setBikes(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <Head>
                <title>Bike Shop</title>
                <meta
                    name="description"
                    content="Abschlussprojekt Alphatraining"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/logoipsum-283.svg" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
