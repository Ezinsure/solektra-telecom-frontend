"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Volteimage from "../../../../public/assets/images/volte.png";
import Voltescreen from "../../../../public/assets/images/screenvolte.png";
import VolteVoice from "../../../../public/assets/images/voicecall.png";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRight, Mail, PhoneCall } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const benefits = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
        ),
        title: "HD Voice Quality",
        desc: "Crystal-clear conversations with natural sound reproduction — no muffling, no dropped words, just voice as it was meant to be heard.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Instant Call Setup",
        desc: "Connect in under a second. VoLTE call setup is up to 3× faster than legacy 2G or 3G networks — no waiting, just talking.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
        ),
        title: "Voice & Data Together",
        desc: "Browse, stream, and use apps while on a call — simultaneously, without dropping either connection or switching networks.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: "Wider Coverage",
        desc: "Make and receive calls wherever 4G LTE reaches — even in areas where traditional voice signals have always struggled.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Better Battery Life",
        desc: "Efficient spectrum use means less power drain on your device — longer talk time, longer day, fewer interruptions.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Enterprise-Grade Security",
        desc: "Calls are transmitted over encrypted 4G LTE infrastructure, giving you privacy and security on every connection.",
    },
];

const contacts = [
    { label: "Call us", value: "1150", icon: <PhoneCall color="white" size={18} /> },
    { label: "Email", value: "info@solektra.co", icon: <Mail color="white" size={16} /> },
    { label: "WhatsApp", value: "+250 784 647 3", icon: <BsWhatsapp color="white" size={15} /> },
];

const VoLTEPage = () => {
    const images = [Volteimage, Voltescreen, VolteVoice];

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

            <section className=" py-20">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Carousel */}
                        <div className="w-full lg:w-1/2 shrink-0">
                            <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_60px_rgba(0,200,240,0.08)]">
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
                                                    alt={`VoLTE slide ${index + 1}`}
                                                    className="w-full h-auto object-cover"
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

                        <div className="w-full lg:w-1/2">
                            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0a0a0a]/75 mb-5">
                                <span className="w-5 h-px bg-[#0a0a0a] " />
                                Next-Gen Voice Technology
                            </span>
                            <h1 className="text-3xl md:text-[2.5rem] font-semibold text-white leading-[1.15] mb-6">
                                Crystal Clear Voice with VoLTE — Stay Connected{" "}
                                <span className="text-[#e88824]"> Like Never Before</span>
                            </h1>
                            <p className="text-[15px] leading-relaxed mb-5">
                                At SOLEKTRA Telecom, we&apos;re revolutionizing the way you communicate with{" "}
                                <strong className="text-[#1d75b3] font-medium">Voice over LTE (VoLTE)</strong> , a
                                next-gen voice service that lets you make HD voice calls over our advanced 4G LTE
                                network. Your calls are sharper, faster, and more reliable than ever before.
                            </p>
                            <div className="border-l-2 border-[#1d75b3] pl-4 text-[#0a0a0a]/75 text-[14px] leading-relaxed">
                                VoLTE routes voice calls over your 4G LTE data network instead of traditional
                                voice channels — delivering higher call quality, faster setup, and the ability to
                                use voice and data at the same time without switching networks.
                            </div>

                            <div className="flex flex-wrap gap-3 mt-4">
                                {[["3×", "Faster setup"], ["HD", "Voice quality"], ["4G", "LTE powered"]].map(([val, label]) => (
                                    <div key={val} className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                                        <span className="text-[#1d75b3] font-bold text-sm">{val}</span>
                                        <span className="text-[#8faec8] text-xs">{label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-3 mt-8">
                                <button className="inline-flex items-center gap-2 bg-[#e88824] hover:bg-[#d07720] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-[0_4px_20px_rgba(232,136,36,0.35)]">
                                    Check compatibility
                                    <ChevronRight size={16} />
                                </button>
                                <button className="inline-flex items-center gap-2 border border-[#1d75b3]/30 text-[#1d75b3] hover:bg-[#1d75b3]/5 font-medium text-sm px-6 py-3 rounded-full transition-colors">
                                    Learn more
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
                            <h3 className="text-white! text-2xl font-semibold mb-2">Ready to experience VoLTE?</h3>
                            <p className="text-blue-200 text-sm max-w-md">
                                Contact us today to explore available packs, check pricing. Our team is ready to help you get connected.
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

            <section className=" py-5 border-t border-white/5">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="text-center mb-14">
                        <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0a0a0a]/75 mb-4">
                            <span className="w-5 h-px bg-[#0a0a0a]" />
                            Why VoLTE
                            <span className="w-5 h-px bg-[#0a0a0a]" />
                        </span>
                        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                            Everything you gain when you upgrade
                        </h2>
                        <p className="text-[#8faec8] text-sm max-w-xl mx-auto">
                            VoLTE isn&apos;t just a better call — it&apos;s a fundamentally different network experience built for how people actually communicate today.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {benefits.map((b) => (
                            <div
                                key={b.title}
                                className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-[#00C8F0]/30 hover:bg-white/[0.055] transition-all duration-300"
                            >
                                {/* Glow on hover */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    style={{ boxShadow: "inset 0 0 30px rgba(0,200,240,0.05)" }} />

                                <div className="w-10 h-10 rounded-xl bg-[#00C8F0]/10 text-[#00C8F0] flex items-center justify-center mb-4 group-hover:bg-[#00C8F0]/20 transition-colors duration-300">
                                    {b.icon}
                                </div>
                                <h3 className="text-white font-semibold text-[15px] mb-2">{b.title}</h3>
                                <p className="text-[#7a9ab5] text-sm leading-relaxed">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};
export default VoLTEPage;
