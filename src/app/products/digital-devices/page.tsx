"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import OnCall from "../../../../public/assets/images/oncall.png";
import OnPhone from "../../../../public/assets/images/phone.png";
import OnPhones from "../../../../public/assets/images/phones.png";
import NextGen from "../../../../public/assets/images/nextgen.png";
import BoyGen from "../../../../public/assets/images/boy.png";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Mail, PhoneCall, ChevronRight } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const contacts = [
    { label: "Call us", value: "1150", icon: <PhoneCall color="white" size={18} /> },
    { label: "Email", value: "info@solektra.co", icon: <Mail color="white" size={16} /> },
    { label: "WhatsApp", value: "+250 784 647 3", icon: <BsWhatsapp color="white" size={15} /> },
];

const paygoFeatures = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Low Initial Cost",
        desc: "Get started with just a small deposit — no large upfront payment required.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
        title: "Flexible Repayment",
        desc: "Choose daily, weekly, or monthly payment schedules that fit your life.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        title: "Full Ownership",
        desc: "Pay over time and the device is entirely yours — no strings attached.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        title: "Wide Device Range",
        desc: "Choose from reliable, high-performance smartphones suited to every need and budget.",
    },
];

const steps = [
    { num: "01", title: "Choose your device", desc: "Browse our catalogue and pick the phone that fits your needs." },
    { num: "02", title: "Pay a small deposit", desc: "Get started with an affordable initial payment — no credit check." },
    { num: "03", title: "Pick your plan", desc: "Select daily, weekly, or monthly repayments that work for you." },
    { num: "04", title: "Own it completely", desc: "Finish your payments and the device is 100% yours to keep." },
];

const DigitalDevice = () => {
    const images = [BoyGen, OnCall, OnPhone, OnPhones, NextGen];
    const autoplayPlugin = useMemo(
        () =>
            Autoplay({
                delay: 2500,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
            }),
        []
    );


    return (
        <main className="bg-white text-[#0a0a0a]">

            <section className="bg-white py-20 relative overflow-hidden">
                <div className="container mx-auto max-w-7xl px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-14">

                        <div className="w-full lg:w-1/2 shrink-0">
                            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(29,117,179,0.15)] ring-1 ring-[#1d75b3]/10">
                                <Carousel
                                    opts={{ loop: true, align: "start" }}
                                    plugins={[autoplayPlugin]}
                                    className="w-full"
                                    onMouseEnter={() => autoplayPlugin.stop()}
                                    onMouseLeave={() => autoplayPlugin.play()}
                                >
                                    <CarouselContent>
                                        {images.map((image, index) => (
                                            <CarouselItem key={index} className="basis-full">
                                                <Image
                                                    src={image}
                                                    alt={`Digital device slide ${index + 1}`}
                                                    className="w-full h-[500px] object-cover"
                                                    priority={index === 0}
                                                />
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="left-3 bg-white/10 border-white/20 text-white hover:bg-white/20" />
                                    <CarouselNext className="right-3 bg-white/10 border-white/20 text-white hover:bg-white/20" />
                                </Carousel>
                            </div>
                        </div>

                        {/* Copy */}
                        <div className="w-full lg:w-1/2">
                            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0a0a0a]/75 mb-5">
                                <span className="w-5 h-px bg-[#0a0a0a]" />
                                Smartphones · PAYGO Plans
                            </span>
                            <h1 className="text-3xl md:text-[2.5rem] font-semibold leading-[1.15] mb-6">
                                Digital devices that keep everyone{" "}
                                <span className="text-[#e88824]"> connected</span>
                            </h1>
                            <p className="text-[15px] leading-relaxed mb-6">
                                In today&apos;s world, access to digital technology isn&apos;t a luxury — it&apos;s a necessity.
                                At <strong className="text-[#1d75b3]">SOLEKTRA Telecom</strong>, we provide affordable
                                smartphones through flexible{" "}
                                <strong className="text-[#0a0a0a]">Pay-As-You-Go (PAYGO)</strong> plans, making
                                smart connectivity possible for everyone, regardless of income or location.
                            </p>

                            {/* PAYGO feature */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {["Low deposit", "Daily · Weekly · Monthly", "Full ownership", "No credit check"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-medium px-3 py-1.5 rounded-full border border-[#1d75b3]/20 text-[#1d75b3] bg-[#1d75b3]/5"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-3 mt-16">
                                <button className="inline-flex items-center gap-2 bg-[#e88824] hover:bg-[#d07720] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-[0_4px_20px_rgba(232,136,36,0.35)]">
                                    View available devices & prices
                                    <ChevronRight size={16} />
                                </button>
                                <button className="inline-flex items-center gap-2 border border-[#1d75b3]/30 text-[#1d75b3] hover:bg-[#1d75b3]/5 font-medium text-sm px-6 py-3 rounded-full transition-colors">
                                    Learn about PAYGO
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-br from-[#0072CE] to-[#0072CE]/50 py-16">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div>
                            <h3 className="text-white! text-2xl font-semibold mb-2">Ready to get your device?</h3>
                            <p className="text-blue-200 text-sm max-w-md">
                                Contact us today to explore available models, check pricing, and set up your PAYGO plan. Our team is ready to help you get connected.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            {contacts.map((c) => (
                                <div key={c.label} className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 min-w-[160px]">
                                    <span>{c.icon}</span>
                                    <div>
                                        <p className="text-blue-200 text-[10px] uppercase tracking-wide font-medium">{c.label}</p>
                                        <p className="text-white text-sm font-semibold">{c.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PAYGO Features ── */}
            <section className="bg-[#f8fafc] py-20 border-t border-[#e2e8f0]">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="text-center mb-14">
                        <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0a0a0a]/75 mb-4">
                            <span className="w-5 h-px bg-[#0a0a0a]" />
                            The PAYGO advantage
                            <span className="w-5 h-px bg-[#0a0a0a]" />
                        </span>
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#0a0a0a] mb-3">
                            Own your phone. Own your future.
                        </h2>
                        <p className="text-[#64748b] text-sm max-w-lg mx-auto">
                            Our Pay-As-You-Go model removes the biggest barrier to smartphone ownership — cost up front. Here&apos;s how we make it work for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {paygoFeatures.map((f) => (
                            <div
                                key={f.title}
                                className="group bg-white border border-[#e2e8f0] rounded-2xl p-6 hover:border-[#1d75b3]/30 hover:shadow-[0_8px_30px_rgba(29,117,179,0.1)] transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#1d75b3]/10 text-[#1d75b3] flex items-center justify-center mb-4 group-hover:bg-[#1d75b3]/20 transition-colors">
                                    {f.icon}
                                </div>
                                <h3 className="text-[#0a0a0a] font-semibold text-[15px] mb-2">{f.title}</h3>
                                <p className="text-[#64748b] text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── How it works ── */}
            <section className="bg-white py-20 border-t border-[#e2e8f0]">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="text-center mb-14">
                        <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0a0a0a]/75 mb-4">
                            <span className="w-5 h-px bg-[#0a0a0a] " />
                            Simple process
                            <span className="w-5 h-px bg-[#1d75b3]" />
                        </span>
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#0a0a0a] mb-3">
                            Four steps to your new device
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((s, i) => (
                            <div key={s.num} className="relative">
                                {/* Connector line */}
                                {i < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-5 left-[calc(50%+24px)] right-[-calc(50%-24px)] h-px bg-gradient-to-r from-[#e88824]/40 to-transparent w-full" />
                                )}
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-10 h-10 rounded-full border-2 border-[#e88824] text-[#e88824] font-bold text-sm flex items-center justify-center mb-4 bg-[#e88824]/5 z-10 relative">
                                        {s.num}
                                    </div>
                                    <h3 className="text-[#0a0a0a] font-semibold text-sm mb-2">{s.title}</h3>
                                    <p className="text-[#64748b] text-xs leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};
export default DigitalDevice;