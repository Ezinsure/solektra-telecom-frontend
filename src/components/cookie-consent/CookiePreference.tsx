"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
    const [settings, setSettings] = useState(preferences);

    // Close with the Escape key
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    const toggle = (key: keyof Omit<CookiePreference, "necessary">) => {
        setSettings((current) => ({
            ...current,
            [key]: !current[key],
        }));
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="cookie-prefs-title"
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-xl rounded-2xl border border-[#0072CE]/15 bg-white p-6 shadow-[0_8px_30px_rgba(0,114,206,0.18)]"
            >
                <div className="mb-6">
                    <h2 id="cookie-prefs-title" className="text-base font-medium text-[#030229]!">
                        Customize Preferences
                    </h2>

                    <p className="mt-2 text-sm text-gray-600">
                        Choose which types of cookies you allow. You can change this anytime from
                        &quot;Cookie settings&quot; at the bottom of the page. Learn more in our{" "}
                        <Link href="/cookie-policy" className="font-medium text-[#0072CE] underline">
                            Cookie Policy
                        </Link>
                        .
                    </p>
                </div>

                <div className="space-y-5">
                    <CookieOption
                        title="Necessary"
                        description="Keep the website secure and working, including login, recharge and your cookie choice. Always on."
                        enabled={true}
                        disabled={true}
                    />

                    <CookieOption
                        title="Analytics"
                        description="Show us which pages are visited and how the site performs, so we can improve it."
                        enabled={settings.analytics}
                        onChange={() => toggle("analytics")}
                    />

                    <CookieOption
                        title="Marketing"
                        description="Help us measure our advertising and show you more relevant Solektra offers."
                        enabled={settings.marketing}
                        onChange={() => toggle("marketing")}
                    />

                    <CookieOption
                        title="Personalization"
                        description="Remember your preferences, such as language, for a smoother visit."
                        enabled={settings.personalization}
                        onChange={() => toggle("personalization")}
                    />
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <Button
                        onClick={onClose}
                        className="rounded-lg border border-[#0072CE] bg-white px-4 py-2 text-[#030229] hover:bg-white hover:text-[#0072CE]"
                    >
                        Cancel
                    </Button>

                    <Button
                        onClick={() => onSave(settings)}
                        className="rounded-lg border border-[#0072CE] bg-[#0072CE] px-4 py-2 text-white hover:bg-white hover:text-[#0072CE]"
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
                role="switch"
                aria-checked={enabled}
                aria-label={`${title} cookies`}
                disabled={disabled}
                onClick={onChange}
                className={`relative h-5 w-10 shrink-0 rounded-full transition-colors ${enabled
                    ? "bg-[#0072CE]"
                    : "bg-gray-300"
                    } ${disabled ? "cursor-not-allowed opacity-70" : ""}`}
            >
                <span
                    className={`absolute top-1 h-3 w-3 rounded-full bg-white transition-all ${enabled
                        ? "left-6"
                        : "left-1"
                        }`}
                />
            </button>
        </div>
    );
}