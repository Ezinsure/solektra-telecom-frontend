"use client";

import { useState } from "react";
import type { CookiePreference } from "@/lib/cookies";
import { Button } from "../ui/button";

type Props = {
    preferences: CookiePreference;
    onSave: (preferences: CookiePreference) => void;
    onClose: () => void;
};

export default function CookiePreferences({
    preferences,
    onSave,
    onClose,
}: Props) {
    const [settings, setSettings] =
        useState(preferences);

    const toggle = (
        key: keyof Omit<CookiePreference, "necessary">
    ) => {
        setSettings((current) => ({
            ...current,
            [key]: !current[key],
        }));
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl">
                <div className="mb-6">
                    <h2 className="text-base font-medium text-[#030229]!">
                        Customize Preferences
                    </h2>

                    <p className="mt-2 text-sm text-gray-600">
                        Choose which types of cookies you want
                        to allow.
                    </p>
                </div>

                <div className="space-y-5">
                    <CookieOption
                        title="Necessary"
                        description="Required for the website to function."
                        enabled={true}
                        disabled={true}
                    />

                    <CookieOption
                        title="Analytics"
                        description="Helps us understand how visitors use our website."
                        enabled={settings.analytics}
                        onChange={() => toggle("analytics")}
                    />

                    <CookieOption
                        title="Marketing"
                        description="Used to measure advertising and marketing campaigns."
                        enabled={settings.marketing}
                        onChange={() => toggle("marketing")}
                    />

                    <CookieOption
                        title="Personalization"
                        description="Allows us to remember preferences and personalize your experience."
                        enabled={settings.personalization}
                        onChange={() =>
                            toggle("personalization")
                        }
                    />
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <Button
                        onClick={onClose}
                        className="rounded-lg border px-4 py-2"
                    >
                        Cancel
                    </Button>

                    <Button
                        onClick={() => onSave(settings)}
                        className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                    >
                        Save Preferences
                    </Button>
                </div>
            </div>
        </div>
    );
}

function CookieOption({
    title,
    description,
    enabled,
    disabled = false,
    onChange,
}: {
    title: string;
    description: string;
    enabled: boolean;
    disabled?: boolean;
    onChange?: () => void;
}) {
    return (
        <div className="flex items-center justify-between gap-4">
            <div>
                <h3 className="font-medium text-sm text-[#030229]!">{title}</h3>

                <p className="text-sm font-normal mt-1 text-[#03022990]!">
                    {description}
                </p>
            </div>

            <button
                type="button"
                disabled={disabled}
                onClick={onChange}
                className={`relative h-5 w-10 rounded-full ${enabled
                    ? "bg-gray-500"
                    : "bg-gray-300"
                    } ${disabled ? "cursor-not-allowed opacity-70" : ""}`}
            >
                <span
                    className={`absolute top-1 h-3 w-3 rounded-full bg-white transition ${enabled
                        ? "left-6"
                        : "left-1"
                        }`}
                />
            </button>
        </div>
    );
}