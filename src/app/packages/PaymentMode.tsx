"use client";

import { useState } from "react";
import { Plan, PaymentMethod } from "../types";

interface PaymentModalProps {
    plan: Plan;
    onClose: () => void;
}

const paymentMethods: { key: PaymentMethod; label: string; icon: React.ReactElement }[] = [
    {
        key: "MoMo",
        label: "MoMo",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 mx-auto mb-1" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
        ),
    },
    {
        key: "Airtel Money",
        label: "Airtel",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 mx-auto mb-1" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        key: "Bank card",
        label: "Bank",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 mx-auto mb-1" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
        ),
    },
];

export function PaymentModal({ plan, onClose }: PaymentModalProps) {
    const [phone, setPhone] = useState("");
    const [method, setMethod] = useState<PaymentMethod>("MoMo");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handlePay = () => {
        if (!phone.trim()) {
            setError("Please enter your phone number.");
            return;
        }
        setError("");
        // TODO: wire to real payment gateway here
        setSuccess(true);
    };

    return (
        <div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div className="bg-white rounded-xl border border-gray-200 p-6 w-full max-w-sm shadow-xl">
                {!success ? (
                    <>
                        <div className="flex items-start justify-between mb-4">
                            <h3 id="modal-title" className="text-base font-medium uppercase text-gray-900">
                                Confirm and pay
                            </h3>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-600 cursor-pointer"
                                aria-label="Close"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Plan summary */}
                        <div className="bg-gray-50 rounded-lg p-3.5 mb-4 space-y-2">
                            <Row label="Plan" value={`${plan.vol}${plan.unit ? ` · ${plan.unit}` : ""}`} />
                            <Row label="Validity" value={plan.validity} />
                            {plan?.speed && (<Row label="Speed" value={plan?.speed} />)}
                            <div className="border-t border-gray-200 pt-2 mt-2">
                                <Row
                                    label="Total"
                                    value={plan.price}
                                    valueClass="text-[#1d75b3] text-[15px] font-semibold"
                                    labelClass="font-medium text-gray-800"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-500 mb-1.5" htmlFor="phone">
                                Phone number
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="07X XXX XXXX"
                                className="w-full h-9 px-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#1d75b3] focus:ring-2 focus:ring-[#1d75b3]/10 transition"
                            />
                            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
                        </div>

                        {/* Payment method */}
                        <div className="mb-5">
                            <p className="text-xs font-medium text-gray-500 mb-2">Payment method</p>
                            <div className="grid grid-cols-3 gap-2">
                                {paymentMethods.map((pm) => (
                                    <button
                                        key={pm.key}
                                        onClick={() => setMethod(pm.key)}
                                        className={`text-xs py-2 px-1 rounded-lg border text-center cursor-pointer transition-all ${method === pm.key
                                            ? "border-[#1d75b3] bg-[#E6F1FB] text-[#185FA5] font-medium"
                                            : "border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50"
                                            }`}
                                    >
                                        {pm.icon}
                                        {pm.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={handlePay}
                            className="w-full h-10 rounded-lg bg-[#e88824] hover:bg-[#d07720] active:scale-[0.98] text-white text-sm font-medium transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                            Pay now
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </>
                ) : (
                    <div className="text-center py-6">
                        <div className="w-14 h-14 rounded-full bg-[#EAF3DE] flex items-center justify-center mx-auto mb-4">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7 text-[#3B6D11]" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-base font-medium text-gray-900 mb-2">Payment successful</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {plan.price} charged via <span className="font-medium text-gray-700">{method}</span> to{" "}
                            <span className="font-medium text-gray-700">{phone}</span>. Your plan is now active.
                        </p>
                        <button
                            onClick={onClose}
                            className="mt-5 w-full h-9 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition cursor-pointer"
                        >
                            Done
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

function Row({
    label,
    value,
    labelClass = "text-gray-500",
    valueClass = "text-gray-800 font-medium",
}: {
    label: string;
    value: string;
    labelClass?: string;
    valueClass?: string;
}) {
    return (
        <div className="flex items-center justify-between">
            <span className={`text-sm ${labelClass}`}>{label}</span>
            <span className={`text-sm ${valueClass}`}>{value}</span>
        </div>
    );
}