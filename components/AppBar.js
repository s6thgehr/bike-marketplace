import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "../hooks/useUser";
import { useListedBikeStore } from "../stores/useListedBikesStore";
import { useUserStore } from "../stores/useUserStore";
import Loading from "./Loading";
import OwnBikeList from "./OwnBikeList";

function AppBar() {
    const router = useRouter();
    const loginId = useUserStore((state) => state.loggedInUserId);
    const isLoggedIn = useUserStore((state) => state.isLoggedIn);
    const doShow = useListedBikeStore((state) => state.doShow);

    const { user, isLoading } = useUser(loginId);

    if (isLoading) return <Loading />;

    return (
        <>
            <div className="bg-gray-50">
                <div className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-12 lg:px-8">
                    <Link
                        href={"/"}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#8E2F5C] px-5 py-3 text-base font-medium text-white hover:bg-[#6A123C]"
                    >
                        <div className="inline-flex rounded-md shadow">
                            BikeMP
                        </div>
                    </Link>
                    <div className="text-[#8E2F5C] text-3xl">
                        The best marketplace for second hand bikes
                    </div>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        {router.pathname !== "/login" &&
                            router.pathname !== "/registration" && (
                                <button
                                    className="bg-[#D58EB0] hover:bg-[#B15983] py-2 px-4 rounded"
                                    onClick={() => {
                                        loginId > 0
                                            ? doShow()
                                            : router.push(`/login`);
                                    }}
                                >
                                    {isLoggedIn && user
                                        ? user.loginName
                                        : "Sign In"}
                                </button>
                            )}
                    </div>
                </div>
            </div>
            <OwnBikeList />
        </>
    );
}

export default AppBar;
