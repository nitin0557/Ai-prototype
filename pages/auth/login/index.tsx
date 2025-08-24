"use client";

import React, { useState, useCallback } from "react";
import { useAuth } from "@/data/contexts/AuthContext";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
    const { onlogin } = useAuth();

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [agree, setAgree] = useState(false);

    const handleSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (!agree) {
                setError("You must agree to the terms.");
                return;
            }
            onlogin(username, password);
        },
        [agree, username, password, onlogin]
    );

    return (
        <div className="relative flex min-h-screen text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-24 py-12 bg-customLight dark:bg-customDark">
                <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
                    Welcome Back
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Sign Up For Free
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md
                                   focus:outline-none focus:ring-2 focus:ring-blue-500
                                   bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md
                                   focus:outline-none focus:ring-2 focus:ring-blue-500
                                   bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />

                    <label className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <input
                            type="checkbox"
                            checked={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                            className="mr-2"
                        />
                        I agree to all Terms, Privacy Policy and fees
                    </label>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition duration-200"
                    >
                        Get Started
                    </button>
                </form>

                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-300 dark:border-gray-600" />
                    <span className="mx-4 text-gray-400 dark:text-gray-500 text-sm">OR</span>
                    <hr className="flex-grow border-gray-300 dark:border-gray-600" />
                </div>

                <div className="flex flex-col space-y-3">
                    <button className="w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 flex items-center justify-center space-x-2
                                       text-gray-700 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                        <FcGoogle />
                        <span>Sign in with Google</span>
                    </button>

                    <button className="w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 flex items-center justify-center space-x-2
                                       text-gray-700 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                        <FaFacebookF className="text-blue-600" />
                        <span>Sign in with Facebook</span>
                    </button>
                </div>

                <p className="mt-6 text-sm text-gray-600 dark:text-gray-400 text-center">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                        Login
                    </a>
                </p>
            </div>

            {/* Right Section (Image) */}
            <div className="hidden md:block md:w-1/2">
                <img
                    src="https://images.unsplash.com/photo-1506765515384-028b60a970df"
                    alt="login-banner"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
}
