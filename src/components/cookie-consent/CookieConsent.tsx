"use client";

import { useEffect, useState } from "react";
import type { CookiePreference } from "@/lib/cookies";
import { Button } from "../ui/button";
import CookiePreferences from "./CookiePreference";

const COOKIE_NAME = "cookie_preferences";

const defaultPreferences: CookiePreference = {
    necessary: true,
    analytics: false,
    marketing: false,
    personalization: false,
};

export default function CookieConsent() {
    const [preferences, setPreferences] = useState<CookiePreference | null>(null);
    const [showBanner, setShowBanner] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);

    useEffect(() => {
        const existingCookie = document.cookie
            .split("; ")
            .find((row) => row.startsWith(`${COOKIE_NAME}=`));

        if (!existingCookie) {
            setShowBanner(true);
            return;
        }

        try {
            const value = existingCookie.split("=")[1];
            const saved = JSON.parse(decodeURIComponent(value));
            setPreferences(saved);
        } catch {
            setShowBanner(true);
        }
    }, []);

    const savePreferences = (newPreferences: CookiePreference) => {
        document.cookie = `${COOKIE_NAME}=${encodeURIComponent(
            JSON.stringify(newPreferences),
        )}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;

        setPreferences(newPreferences);
        setShowBanner(false);
        setShowPreferences(false);
    };

    const acceptAll = () => {
        savePreferences({
            necessary: true,
            analytics: true,
            marketing: true,
            personalization: true,
        });
    };

    const rejectAll = () => {
        savePreferences({
            necessary: true,
            analytics: false,
            marketing: false,
            personalization: false,
        });
    };

    if (!showBanner && !showPreferences) {
        return null;
    }

    return (
        <>
            {showBanner && (
                <div className="fixed top-30 leftt-4 right-4 z-50 mx-auto max-w-xl rounded-md bg-white p-4 shadow-[0_0_15px_rgba(247,148,29,0.5)]">
                    <div className="space-y-2">
                        <div>
                            <h2 className="text-sm font-semibold text-[#030229]! ">
                                Cookie Notice
                            </h2>

                            <p className="my-4 text-xs text-[#03022990]">
                                Solektra Telecom uses cookies and similar technologies to
                                operate this website, enhance functionality, analyze
                                performance, and deliver relevant content. Essential cookies are
                                required for the site to function. You may accept all cookies or
                                manage your preferences.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-3">
                            <Button
                                onClick={acceptAll}
                                className="rounded-lg bg-[#F7941D] text-white text-xs hover:bg-white hover:text-[#F7941D] hover:border-[#F7941D]"
                            >
                                Accept All Cookies
                            </Button>
                            <Button
                                onClick={rejectAll}
                                className="rounded-lg bg-[#F7941D] text-xs hover:bg-white hover:text-[#F7941D] hover:border-[#F7941D]"
                            >
                                Reject All Non-Essential
                            </Button>
                            <Button
                                onClick={() => setShowPreferences(true)}
                                className="rounded-lg bg-[#F7941D] text-xs hover:bg-white hover:text-[#F7941D] hover:border-[#F7941D]"
                            >
                                Manage Preferences
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {showPreferences && (
                <CookiePreferences
                    preferences={preferences ?? defaultPreferences}
                    onSave={savePreferences}
                    onClose={() => setShowPreferences(false)}
                />
            )}
        </>
    );
}
