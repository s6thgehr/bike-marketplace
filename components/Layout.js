import AppBar from "./AppBar";
import Footer from "./Footer";

function Layout({ children }) {
    // const { data, error } = useSWR('/api/navigation', fetcher)

    // if (error) return <div>Failed to load</div>
    // if (!data) return <div>Loading...</div>

    return (
        <>
            <AppBar />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
