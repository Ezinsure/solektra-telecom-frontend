"use client";

import { useMemo } from "react";
import Image from "next/image";
import InternetImg from "../../../../public/assets/images/img4g.png";
import VideoImg from "../../../../public/assets/images/videogame.png";
import SolektraImg from "../../../../public/assets/images/solektra4g.png";
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
import Link from "next/link";
import { motion } from "framer-motion";

const contacts = [
    {
        label: "Call us",
        value: "1150",
        icon: <PhoneCall color="white" size={18} />,
    },
    {
        label: "Email",
        value: "info@solektra.co",
        icon: <Mail color="white" size={16} />,
    },
    {
        label: "WhatsApp",
        value: "+250 784 647 3",
        icon: <BsWhatsapp color="white" size={15} />,
    },
];

const benefits = [
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                />
            </svg>
        ),
        title: "Fast Speeds",
        desc: "Download at up to 300 Mbps — stream HD content, video call, and browse simultaneously without slowdown.",
        stat: "300 Mbps",
    },
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
        title: "Nationwide Coverage",
        desc: "4G LTE that reaches urban centres and rural communities alike — stay connected wherever life takes you.",
        stat: "Nationwide",
    },
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
        title: "Affordable Plans",
        desc: "Flexible pricing designed for every pocket — from daily bundles to monthly unlimited data packages.",
        stat: "All budgets",
    },
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
        title: "No Contracts",
        desc: "Pay as you go with zero long-term commitments. Upgrade, downgrade, or pause — you're always in control.",
        stat: "Zero lock-in",
    },
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
            </svg>
        ),
        title: "Device Compatibility",
        desc: "Works seamlessly with any 4G-enabled smartphone, tablet, router, or hotspot — plug in and go.",
        stat: "All devices",
    },
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>
        ),
        title: "24/7 Support",
        desc: "Our network operations and customer support teams are available around the clock to keep you online.",
        stat: "Always on",
    },
];

const useCases = [
    { emoji: "🎬", label: "4K Streaming" },
    { emoji: "🎮", label: "Online Gaming" },
    { emoji: "💼", label: "Remote Work" },
    { emoji: "📹", label: "Video Calls" },
    { emoji: "☁️", label: "Cloud Storage" },
    { emoji: "📱", label: "Social Media" },
];

// Reusable fade variant
const fadeLeft = {
    hidden: { opacity: 0, x: -24 },
    show: { opacity: 1, x: 0 },
};

const fadeRight = {
    hidden: { opacity: 0, x: 24 },
    show: { opacity: 1, x: 0 },
};

const Internet4GPage = () => {
    const images = [InternetImg, VideoImg, SolektraImg];

    const autoplayPlugin = useMemo(
        () =>
            Autoplay({
                delay: 2500,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
            }),
        [],
    );

    return (
        <main className="bg-white text-[#0a0a0a]">
            <section className="bg-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1d75b3]/7 blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#e88824]/6 blur-[120px] pointer-events-none" />

                <div className="container mx-auto max-w-7xl px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-14">
                        {/* Carousel */}
                        <div
                            data-aos="fade-right"
                            data-aos-delay="300"
                            className="w-full lg:w-1/2 shrink-0"
                        >
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
                                                    alt={`4G Internet slide ${index + 1}`}
                                                    className="w-full h-[] object-cover"
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

                        <div
                            data-aos="fade-right"
                            data-aos-delay="300"
                            className="w-full lg:w-1/2"
                        >
                            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0a0a0a]/75 mb-5">
                                <span className="w-5 h-px bg-[#0a0a0a]" />
                                4G LTE Network
                            </span>
                            <h1
                                data-aos="fade-left"
                                data-aos-delay="300"
                                className="text-3xl md:text-[2.6rem] font-semibold leading-[1.15] mb-6"
                            >
                                Lightning-{" "}
                                <span className="text-[#e88824]"> fast internet, </span>{" "}
                                everywhere you go
                            </h1>
                            <p
                                data-aos="fade-left"
                                data-aos-delay="300"
                                className="text-[#4a5568] text-[15px] leading-relaxed mb-6"
                            >
                                Whether you&apos;re streaming, gaming, working, or browsing —
                                our{" "}
                                <strong className="text-[#0a0a0a]">SOLEKTRA 4G network</strong>{" "}
                                gives you the speed and stability you need, at home, at work, or
                                on the move.
                            </p>
                            <div
                                data-aos="fade-left"
                                data-aos-delay="500" className="border-l-2 border-[#1d75b3]/30 pl-4 text-[#4a5568] text-sm leading-relaxed mb-8">
                                Powered by advanced LTE infrastructure, our 4G service delivers
                                consistent performance everywhere — from the city to the
                                countryside.
                            </div>

                            <div className="grid grid-cols-3 gap-3 mb-8">
                                {[
                                    ["300 Mbps", "Peak speed"],
                                    ["Nationwide", "Coverage"],
                                    ["No contract", "Commitment"],
                                ].map(([val, label]) => (
                                    <div
                                        data-aos="fade-left"
                                        data-aos-delay="300"
                                        key={val}
                                        className="border border-[#1d75b3]/20 bg-[#1d75b3]/5 rounded-xl px-4 py-3 text-center"
                                    >
                                        <p className="text-[#1d75b3] font-bold text-sm leading-none mb-1">
                                            {val}
                                        </p>
                                        <p className="text-[#64748b] text-[11px] uppercase tracking-wide">
                                            {label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* buttons*/}
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    data-aos="zoom-in-up"
                                    data-aos-delay="300"
                                    href="/pricing?cat=4g&sub=volume"
                                    className="inline-flex items-center gap-2 bg-[#e88824] hover:bg-[#d07720] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-[0_4px_20px_rgba(232,136,36,0.35)]"
                                >
                                    View data plans
                                    <ChevronRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-br from-[#0072CE] to-[#0072CE]/50 py-16">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                        <motion.div variants={fadeRight} initial="hidden"
                            animate="show"
                            transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}>
                            <h3 className="text-white! text-2xl font-semibold mb-2">
                                Get connected today
                            </h3>
                            <p className="text-blue-200 text-sm max-w-md">
                                Our team will help you pick the right data plan, check your
                                area&apos;s 4G coverage, and get you online fast.
                            </p>
                        </motion.div>
                        <motion.div initial="hidden"
                            animate="show"
                            transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }} variants={fadeLeft} className="flex flex-col sm:flex-row gap-4">
                            {contacts.map((c) => (
                                <div
                                    key={c.label}
                                    className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 min-w-[160px]"
                                >
                                    <span>{c.icon}</span>
                                    <div>
                                        <p className="text-blue-200 text-[10px] uppercase tracking-wide font-medium">
                                            {c.label}
                                        </p>
                                        <p className="text-white text-sm font-semibold">
                                            {c.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits  */}
            <section className="bg-white py-20 border-t border-[#e2e8f0]">
                <div className="container mx-auto max-w-7xl px-6">
                    <div
                        data-aos="fade-up"
                        data-aos-delay="300" className="text-center mb-14">
                        <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0a0a0a]/75 mb-4">
                            <span className="w-5 h-px bg-[#0a0a0a]" />
                            What you get
                            <span className="w-5 h-px bg-[#0a0a0a]" />
                        </span>
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#0a0a0a] mb-3">
                            Built for the way you live
                        </h2>
                        <p className="text-[#64748b] text-sm max-w-lg mx-auto">
                            SOLEKTRA 4G is engineered to keep up with modern life — fast,
                            flexible, and available where you need it most.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {benefits.map((b) => (
                            <div data-aos="fade-up-left" data-aos-delay="300"
                                key={b.title}
                                className="group bg-white border border-[#e2e8f0] rounded-2xl p-6 hover:border-[#1d75b3]/30 hover:shadow-[0_8px_30px_rgba(29,117,179,0.09)] transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-11 h-11 rounded-xl bg-[#1d75b3]/10 text-[#1d75b3] flex items-center justify-center group-hover:bg-[#1d75b3]/20 transition-colors duration-300">
                                        {b.icon}
                                    </div>
                                    <span className="text-[10px] font-semibold tracking-wide uppercase text-[#e88824] bg-[#e88824]/10 px-2.5 py-1 rounded-full">
                                        {b.stat}
                                    </span>
                                </div>
                                <h3 className="text-[#0a0a0a] font-semibold text-[15px] mb-2">
                                    {b.title}
                                </h3>
                                <p className="text-[#64748b] text-sm leading-relaxed">
                                    {b.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Use cases strip ── */}
            <section className="bg-[#f8fafc] border-t border-[#e2e8f0] py-8">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mr-2">
                            Perfect for
                        </p>
                        {useCases.map((u) => (
                            <div
                                key={u.label}
                                className="flex items-center gap-2 text-sm text-[#4a5568] font-medium"
                            >
                                <span>{u.emoji}</span>
                                {u.label}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};
export default Internet4GPage;
