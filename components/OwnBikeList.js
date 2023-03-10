import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useListedBikeStore } from "../stores/useListedBikesStore";
import { useBikes } from "../hooks/useBikes";
import { useUserStore } from "../stores/useUserStore";
import { useUser } from "../hooks/useUser";
import Loading from "./Loading";
import { IoLogOutOutline } from "react-icons/io5";
import { useBikeStore } from "../stores/useBikeStore";
import axios from "axios";
import { BASE_URL } from "../utils/baseUrl";
import Link from "next/link";

export default function OwnBikeList() {
    const show = useListedBikeStore((state) => state.show);
    const dontShow = useListedBikeStore((state) => state.dontShow);
    const loginId = useUserStore((state) => state.loggedInUserId);
    const logout = useUserStore((state) => state.logout);
    const removeBike = useBikeStore((state) => state.removeBike);
    const { user } = useUser(loginId);
    // const { bikes, isLoading } = useBikes();
    const bikes = useBikeStore((state) => state.bikes);
    const ownBikes = bikes?.filter((bike) => {
        return bike.userId === user?.id;
    });

    function deleteBike(id) {
        axios
            .delete(`${BASE_URL}/bikes/${id}`)
            .then(() => {
                removeBike(id);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={dontShow}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">
                                                    Your bikes
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={() =>
                                                            dontShow()
                                                        }
                                                    >
                                                        <span className="sr-only">
                                                            Close panel
                                                        </span>
                                                        <XMarkIcon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    <ul
                                                        role="list"
                                                        className="-my-6 divide-y divide-gray-200"
                                                    >
                                                        {ownBikes.map(
                                                            (bike) => (
                                                                <li
                                                                    key={
                                                                        bike.id
                                                                    }
                                                                    className="flex py-6"
                                                                >
                                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                        <img
                                                                            src={
                                                                                bike.imageUrl
                                                                            }
                                                                            alt={
                                                                                bike.model
                                                                            }
                                                                            className="h-full w-full object-cover object-center"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-4 flex flex-1 flex-col">
                                                                        <div>
                                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                <h3 className="">
                                                                                    {
                                                                                        bike.model
                                                                                    }
                                                                                </h3>
                                                                                <p className="">
                                                                                    {
                                                                                        bike.price
                                                                                    }{" "}
                                                                                    Euro
                                                                                </p>
                                                                            </div>
                                                                            <p className="mt-1 text-sm text-gray-500">
                                                                                {
                                                                                    bike.type
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                                            <div className="flex">
                                                                                <Link
                                                                                    href={`/bike/edit/${bike.id}`}
                                                                                >
                                                                                    <button
                                                                                        onClick={
                                                                                            dontShow
                                                                                        }
                                                                                        type="button"
                                                                                        className="font-medium text-[#B15983] hover:text-[#6A123C]"
                                                                                    >
                                                                                        Edit
                                                                                    </button>
                                                                                </Link>
                                                                            </div>

                                                                            <div className="flex">
                                                                                <button
                                                                                    type="button"
                                                                                    className="font-medium text-[#B15983] hover:text-[#6A123C]"
                                                                                    onClick={() =>
                                                                                        deleteBike(
                                                                                            bike.id
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    Remove
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                            <div className="mt-6">
                                                <Link
                                                    onClick={dontShow}
                                                    href="/bike/new"
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-[#B15983] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#6A123C]"
                                                >
                                                    List another bike
                                                </Link>
                                            </div>
                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                <button
                                                    type="button"
                                                    className="font-medium text-[#6A123C] hover:text-[#B15983]"
                                                    onClick={() => {
                                                        logout();
                                                        dontShow();
                                                    }}
                                                >
                                                    Logout
                                                    <IoLogOutOutline className="ml-2 inline" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
