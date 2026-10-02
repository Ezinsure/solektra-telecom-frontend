"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { CookiePreference } from "@/lib/cookies";
import { Button } from "../ui/button";
import CookiePreferences from "./CookiePreference";

const COOKIE_NAME = "cookie_preferences";

// Any button on the site can reopen the preferences with:
// window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))
export const OPEN_COOKIE_SETTINGS = "open-cookie-preferences";

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
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setShowBanner(true);
        } else {
            try {
                const value = existingCookie.split("=")[1];
                const saved = JSON.parse(decodeURIComponent(value));
                setPreferences(saved);
            } catch {
                setShowBanner(true);
            }
        }

        // Lets visitors change their choice later (e.g. "Cookie settings" in the footer)
        const open = () => setShowPreferences(true);
        window.addEventListener(OPEN_COOKIE_SETTINGS, open);
        return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, open);
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
            {showBanner && !showPreferences && (
                <div
                    role="region"
                    aria-label="Cookie notice"
                    className="fixed bottom-15 left-4 sm:left-auto z-50 mx-auto max-w-lg rounded-sm border border-[#0072CE]/15 bg-white p-4 shadow-[0_8px_30px_rgba(0,114,206,0.18)]"
                >
                    <div className="space-y-2">
                        <div>
                            <h2 className="text-sm font-semibold text-[#030229]! ">
                                Cookie Notice
                            </h2>

                            <p className="my-4 text-xs text-[#03022990]">
                                We use cookies and similar technologies to provide necessary site functionality and improve your experience. You can accept all cookies, reject the optional
                                ones, or choose for yourself. Read our{" "}
                                <Link href="/cookie-policy" className="font-medium text-[#0072CE] underline">
                                    Cookie Policy
                                </Link>
                                .
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-3">
                            <Button
                                onClick={acceptAll}
                                className="rounded-lg border border-[#0072CE] bg-[#0072CE] text-white text-xs hover:bg-white hover:text-[#0072CE] hover:border-[#0072CE]"
                            >
                                Accept All Cookies
                            </Button>
                            <Button
                                onClick={rejectAll}
                                className="rounded-lg text-[#030229] bg-white border border-[#0072CE] text-xs hover:bg-white hover:text-[#0072CE] hover:border-[#0072CE]"
                            >
                                Reject Optional
                            </Button>
                            <Button
                                onClick={() => setShowPreferences(true)}
                                className="rounded-lg text-[#030229] bg-white border border-[#0072CE] text-xs hover:bg-white hover:text-[#0072CE] hover:border-[#0072CE]"
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