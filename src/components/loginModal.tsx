"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
    IoClose,
    IoEyeOutline,
    IoEyeOffOutline,
    IoLogInOutline,
    IoCheckmarkCircle,
} from "react-icons/io5";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
        setError,
    } = useForm({
        mode: "onChange",
    });

    const watchServiceNumber = watch("serviceNumber", "");
    const watchPassword = watch("password", "");

    const onSubmit = async (data: any) => {
        setIsLoading(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setLoginSuccess(true);
            setTimeout(() => {
                resetModal();
                onClose();
                console.log("Login successful!", data);
            }, 1500);
        } catch (error) {
            setError("general", {
                type: "manual",
                message: "Login failed. Please try again.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const resetModal = () => {
        reset();
        setShowPassword(false);
        setIsLoading(false);
        setLoginSuccess(false);
    };

    const handleClose = () => {
        resetModal();
        onClose();
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={handleClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/50" />
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
                                    as="div"
                                    className="flex justify-between items-center border-b border-gray-100 pb-4"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                        <IoLogInOutline className="w-5 h-5 text-[#0072CE]" />
                                        Login
                                    </h3>
                                    <button
                                        onClick={handleClose}
                                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <IoClose className="w-6 h-6 text-gray-500" />
                                    </button>
                                </Dialog.Title>

                                {!loginSuccess ? (
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="mt-4 space-y-4"
                                    >
                                        {/* General Error */}
                                        {errors.general && (
                                            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                                                {errors.general.message as string}
                                            </div>
                                        )}

                                        {/* Service Number */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Service Number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-[#0072CE] focus:border-transparent outline-none transition-colors ${errors.serviceNumber
                                                    ? "border-red-500 bg-red-50"
                                                    : watchServiceNumber &&
                                                        watchServiceNumber.replace(/\D/g, "").length >=
                                                        6
                                                        ? "border-green-500 bg-green-50"
                                                        : "border-gray-300"
                                                    }`}
                                                placeholder="Enter your service number"
                                                {...register("serviceNumber", {
                                                    required: "Service number is required",
                                                    pattern: {
                                                        value: /^[0-9+\s()\-]+$/,
                                                        message: "Service number cannot contain letters",
                                                    },
                                                    validate: {
                                                        minLength: (value) => {
                                                            const digits = value.replace(/\D/g, "");
                                                            return (
                                                                digits.length >= 6 ||
                                                                "Service number must be at least 6 digits"
                                                            );
                                                        },
                                                        maxLength: (value) => {
                                                            const digits = value.replace(/\D/g, "");
                                                            return (
                                                                digits.length <= 15 ||
                                                                "Service number is too long"
                                                            );
                                                        },
                                                    },
                                                })}
                                                onChange={(e) => {
                                                    const filtered = e.target.value.replace(
                                                        /[^0-9+\s()\-]/g,
                                                        "",
                                                    );
                                                    e.target.value = filtered;
                                                    register("serviceNumber").onChange(e);
                                                }}
                                            />
                                            {errors.serviceNumber && (
                                                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                    {errors.serviceNumber.message as string}
                                                </p>
                                            )}
                                            {watchServiceNumber &&
                                                !errors.serviceNumber &&
                                                watchServiceNumber.replace(/\D/g, "").length >= 6 && (
                                                    <p className="mt-1 text-xs text-green-500 flex items-center gap-1">
                                                        Valid service number
                                                    </p>
                                                )}
                                        </div>

                                        {/* Password */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Password <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-[#0072CE] focus:border-transparent outline-none transition-colors ${errors.password
                                                        ? "border-red-500 bg-red-50"
                                                        : watchPassword && watchPassword.length >= 6
                                                            ? "border-green-500 bg-green-50"
                                                            : "border-gray-300"
                                                        }`}
                                                    placeholder="Enter your password"
                                                    {...register("password", {
                                                        required: "Password is required",
                                                        minLength: {
                                                            value: 6,
                                                            message: "Password must be at least 6 characters",
                                                        },
                                                        maxLength: {
                                                            value: 20,
                                                            message:
                                                                "Password must be less than 20 characters",
                                                        },
                                                    })}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                                >
                                                    {showPassword ? (
                                                        <IoEyeOffOutline className="w-5 h-5" />
                                                    ) : (
                                                        <IoEyeOutline className="w-5 h-5" />
                                                    )}
                                                </button>
                                            </div>
                                            {errors.password && (
                                                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                    {errors.password.message as string}
                                                </p>
                                            )}
                                            {watchPassword &&
                                                !errors.password &&
                                                watchPassword.length >= 6 && (
                                                    <p className="mt-1 text-xs text-green-500 flex items-center gap-1">
                                                        Valid password
                                                    </p>
                                                )}
                                        </div>

                                        {/* Forgot Password */}
                                        <div className="text-right">
                                            <button
                                                type="button"
                                                className="text-sm text-[#0072CE] hover:text-[#0062b0] hover:underline"
                                                onClick={() => {
                                                    // alert(
                                                    //     "Password reset functionality will be implemented here.",
                                                    // );
                                                }}
                                            >
                                                Forgot Password?
                                            </button>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isLoading || Object.keys(errors).length > 0}
                                            className="w-full bg-[#0072CE] text-white py-2 rounded-lg font-semibold hover:bg-[#0062b0] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <svg
                                                        className="animate-spin h-5 w-5 text-white"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        ></circle>
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        ></path>
                                                    </svg>
                                                    Logging in...
                                                </>
                                            ) : (
                                                "Login"
                                            )}
                                        </button>
                                    </form>
                                ) : (
                                    // Success State
                                    <div className="mt-4 text-center py-8">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <IoCheckmarkCircle className="w-10 h-10 text-green-500" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Login Successful!
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Welcome back! Redirecting to dashboard...
                                        </p>
                                    </div>
                                )}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
export default LoginModal;
