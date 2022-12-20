import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useUserStore } from "../stores/useUserStore";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
    const router = useRouter();
    const isLoggedIn = useUserStore((state) => state.isLoggedIn);
    const login = useUserStore((state) => state.login);
    const users = useUserStore((state) => state.users);

    const [formular, setFormular] = useState({
        loginName: "",
        password: "",
    });

    function inputHandler(e) {
        setFormular((prevFormular) => {
            return {
                ...prevFormular,
                [e.target.name]: e.target.value,
            };
        });
    }

    function submitHandler() {
        const user = users.filter((u) => {
            return (
                u.loginName === formular.loginName &&
                u.password === formular.password
            );
        });

        if (user.length === 1) {
            login(user[0].id);
            router.push("/");
        } else {
            alert("Login name or password are wrong");
        }
    }

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        {/* <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        /> */}
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                        {/* <p className="mt-2 text-center text-sm text-gray-600">
                            Or{" "}
                            <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                start your 14-day free trial
                            </a>
                        </p> */}
                    </div>
                    <form className="mt-8 space-y-6">
                        <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                        />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="loginName" className="sr-only">
                                    Login name
                                </label>
                                <input
                                    id="loginName"
                                    name="loginName"
                                    value={formular.loginName}
                                    onChange={inputHandler}
                                    type="text"
                                    autoComplete="loginName"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Login name"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    value={formular.password}
                                    onChange={inputHandler}
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            {/* <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Remember me
                                </label>
                            </div> */}
                            <Link href="/registration">
                                <div className="text-sm">
                                    <div className="font-medium text-[#8E2F5C] hover:text-[#B15983]">
                                        No account yet? Register now!
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div>
                            <button
                                onClick={submitHandler}
                                type="button"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#8E2F5C] py-2 px-4 text-sm font-medium text-white hover:bg-[#B15983] focus:outline-none focus:ring-2 focus:ring-[#B15983] focus:ring-offset-2"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockClosedIcon
                                        className="h-5 w-5 text-[#B15983] group-hover:text-[#8E2F5C]"
                                        aria-hidden="true"
                                    />
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
