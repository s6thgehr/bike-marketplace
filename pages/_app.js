import Layout from "../components/Layout";
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
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
