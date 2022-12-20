import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/baseURL";
import { Dialog, Transition } from "@headlessui/react";
import { useUserStore } from "../stores/useUserStore";
import { useRouter } from "next/router";

function Register() {
    const router = useRouter();
    const addUser = useUserStore((state) => state.addUser);
    const login = useUserStore((state) => state.login);

    const [isOpen, setIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState({
        title: "",
        description: "",
    });
    const [formular, setFormular] = useState({
        loginName: "",
        password: "",
        email: "",
        mobile: "",
    });
    const [repeatedPassword, setPassword] = useState("");

    const [usedLoginNames, setUsedLoginNames] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/users`)
            .then((response) => {
                setUsedLoginNames(
                    response.data.map((obj) => {
                        return obj.loginName;
                    })
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function inputHandler(e) {
        setFormular((prevFormular) => {
            return {
                ...prevFormular,
                [e.target.name]: e.target.value,
            };
        });
    }

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    function submitHandler(e) {
        if (
            formular.loginName === "" ||
            formular.email === "" ||
            formular.mobile === "" ||
            formular.password === ""
        ) {
            setErrorMessage({
                title: "Empty fields",
                description: "Please fill out all fields",
            });
            openModal();
            return;
        }
        if (formular.password !== repeatedPassword) {
            setErrorMessage({
                title: "Passwords don't match.",
                description: "Please check that both passwords are the same.",
            });
            openModal();
            return;
        }
        if (usedLoginNames.includes(formular.loginName)) {
            setErrorMessage({
                title: "Login name is already taken.",
                description: "Please select another login name.",
            });
            openModal();
            return;
        }

        axios
            .post(`${BASE_URL}/users`, { ...formular })
            .then((response) => {
                login(response.data.id);
                addUser(response.data);
                setUsedLoginNames((prevState) => {
                    return [...prevState, formular.loginName];
                });
                router.push("/");
            })
            .catch((error) => console.log(error));
    }

    return (
        <div className="mt-10 sm:mt-0">
            <h1 className="text-5xl mt-16 text-center">
                Registration Formular
            </h1>
            <form>
                <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="mx-4 sm:mx-16 col-span-6 sm:col-span-6 grid grid-cols-2 gap-6">
                                <div className="col-span-2 sm:col-span-1">
                                    <label
                                        htmlFor="loginName"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Login name
                                    </label>
                                    <input
                                        type="text"
                                        value={formular.loginName}
                                        onChange={inputHandler}
                                        required
                                        name="loginName"
                                        id="loginName"
                                        autoComplete="given-name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="mx-4 sm:mx-16 col-span-6 sm:col-span-6 grid grid-cols-2 gap-6">
                                <div className="col-span-2 sm:col-span-1">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        name="email"
                                        value={formular.firstName}
                                        onChange={inputHandler}
                                        id="email"
                                        autoComplete="email"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label
                                        htmlFor="mobile"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Mobile number
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        name="mobile"
                                        value={formular.lastName}
                                        onChange={inputHandler}
                                        id="mobile"
                                        autoComplete="given-name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="mx-4 sm:mx-16 col-span-6 sm:col-span-6 grid grid-cols-2 gap-6">
                                <div className="col-span-2 sm:col-span-1">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        required
                                        name="password"
                                        value={formular.password}
                                        onChange={inputHandler}
                                        id="password"
                                        autoComplete="password"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label
                                        htmlFor="password2"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Repeat Password
                                    </label>
                                    <input
                                        type="password"
                                        required
                                        name="password2"
                                        value={repeatedPassword}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        id="password2"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                            type="button"
                            onClick={submitHandler}
                            className="inline-flex justify-center rounded-md border border-transparent bg-[#B15983] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#8E2F5C] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Register
                        </button>
                    </div>
                </div>
            </form>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {errorMessage.title}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            {errorMessage.description}
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}

export default Register;
