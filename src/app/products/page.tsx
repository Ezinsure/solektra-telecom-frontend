"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Routerman from "../../../public/assets/images/routerman.png";
import Smartphone1 from "../../../public/assets/images/smartphone1.png";
import Smartphone2 from "../../../public/assets/images/samrtphone2.png";
import Routerr from "../../../public/assets/images/router.png";
import Router1 from "../../../public/assets/images/router1.png";
import Phone1 from "../../../public/assets/images/phone.png";
import Fiber from "../../../public/assets/images/fiber.jpg";
import PocketRouter from "../../../public/assets/images/pocketRoute.png";
import VoLTE from "../../../public/assets/images/gaaming.jpeg";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { TfiWorld } from "react-icons/tfi";
import { BsPhone } from "react-icons/bs";
import { FaWifi } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

const floatingTags = [
    { text: "Unlimited Internet", top: "8%", left: "4%", icon: <FaWifi />, delay: 0.6 },
    { text: "Stay Connected", top: "22%", right: "5%", icon: <TfiWorld />, delay: 0.8 },
    { text: "Latest Smartphones", bottom: "30%", left: "2%", icon: <BsPhone />, delay: 1.0 },
    { text: "Upgrade Your Life", bottom: "30%", right: "4%", icon: "⚡", delay: 1.2 },
    { text: "Call & SMS", bottom: "10%", left: "8%", icon: <IoCallOutline />, delay: 1.4 },
];

// Reusable fade variant
const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -24 },
    show: { opacity: 1, x: 0 },
};

const fadeRight = {
    hidden: { opacity: 0, x: 24 },
    show: { opacity: 1, x: 0 },
};

// Float animation for tags (continuous up-down)
const floatAnim = (delay: number) => ({
    y: [0, -7, 0],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
    },
});

const ProductsPage = () => {
    // eslint-disable-next-line react-hooks/preserve-manual-memoization
    const autoplayPlugin = useMemo(
        () => Autoplay({ delay: 2500, stopOnInteraction: true, stopOnMouseEnter: true }),
        [],
    );

    const products = [
        {
            image: Routerr,
            title: "4G Home Router",
            desc: "300 Mbps · 32 devices",
            buyHref: "/packages?cat=router&sub=home",
            learnHref: "/products/4G-internet",
        },
        {
            image: Phone1,
            title: "Smartphone — Entry",
            desc: "4G ready · 4000 mAh",
            buyHref: "/packages?cat=devices&sub=smartphones",
            learnHref: "/products/Vo-LTE",
        },
        {
            image: VoLTE,
            title: "VoLTE",
            desc: "4G ready · 4000 mAh",
            buyHref: "/packages?cat=volte&sub=packages",
            learnHref: "/products/Vo-LTE",
        },
        {
            image: Router1,
            title: "Business Router",
            desc: "600 Mbps · dual-band",
            buyHref: "/packages?cat=router&sub=business",
            learnHref: "/products/4G-internet",
        },
        {
            image: Fiber,
            title: "Fiber ONT Router",
            desc: "1 Gbps · symmetric",
            buyHref: "/packages?cat=fiber&sub=home",
            learnHref: "/products/fiber-internet",
        },
        {
            image: PocketRouter,
            title: "Pocket Router",
            desc: "1 Gbps · symmetric",
            buyHref: "/packages?cat=fiber&sub=home",
            learnHref: "/products/fiber-internet",
        },
        {
            image: Smartphone2,
            title: "Smartphone — Mid",
            desc: "4G+ · 6 GB RAM",
            buyHref: "/packages?cat=devices&sub=smartphones",
            learnHref: "/products/digital-devices",
        },
        {
            image: Smartphone1,
            title: "Smartphone — Flagship",
            desc: "5G ready · 12 GB RAM",
            buyHref: "/packages?cat=devices&sub=smartphones",
            learnHref: "/products/digital-devices",
        },
        {
            image: Routerman,
            title: "Business Router",
            desc: "600 Mbps · dual-band",
            buyHref: "/packages?cat=router&sub=pocket",
            learnHref: "/products/4G-internet",
        },
    ];

    return (
        <main className="bg-white text-[#0a0a0a] overflow-x-hidden">
            <section className="bg-white pt-12 pb-0">
                <div className="container mx-auto max-w-7xl px-5 sm:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
                        {/* ── Left copy ── */}
                        <div className="w-full lg:w-1/2 lg:pr-12 order-2 lg:order-1">

                            {/* Eyebrow */}
                            <motion.p
                                variants={fadeLeft}
                                initial="hidden"
                                animate="show"
                                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                                className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#0072CE] font-semibold mb-4"
                            >
                                <span className="w-4 h-px bg-[#0072CE]" />
                                Products available
                            </motion.p>
                            <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0a0a0a] leading-tight mb-5">
                                <motion.span
                                    className="block"
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate="show"
                                    transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
                                >
                                    Stay connected with
                                </motion.span>
                                <motion.span
                                    className="block text-[#0072CE]"
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate="show"
                                    transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
                                >
                                    SOLEKTRA Telecom
                                </motion.span>
                                <motion.span
                                    className="block"
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate="show"
                                    transition={{ duration: 0.55, delay: 0.5, ease: "easeOut" }}
                                >
                                    products &amp; plans
                                </motion.span>
                            </div>

                            <motion.p
                                variants={fadeUp}
                                initial="hidden"
                                animate="show"
                                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                                className="text-[#4a5568] text-sm sm:text-base leading-relaxed mb-6 max-w-md"
                            >
                                From blazing-fast 4G internet to smart devices and fiber broadband —
                                SOLEKTRA Telecom brings you everything you need to live, work, and
                                stay ahead in a connected world.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                className="flex flex-wrap gap-3"
                                variants={fadeUp}
                                initial="hidden"
                                animate="show"
                                transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
                            >
                                <Link
                                    href="/packages"
                                    className="inline-flex items-center gap-2 bg-[#0072CE] hover:bg-[#0c3d6b] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors shadow-[0_4px_20px_rgba(29,117,179,0.3)]"
                                >
                                    View plans &amp; pricing
                                    <ChevronRight size={15} />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 border border-[#0072CE]/30 text-[#0072CE] hover:bg-[#0072CE]/5 text-sm font-medium px-6 py-3 rounded-full transition-colors"
                                >
                                    Contact us
                                    <ChevronRight size={15} />
                                </Link>
                            </motion.div>
                        </div>

                        {/* ── Right image ── */}
                        <motion.div
                            className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end"
                            variants={fadeRight}
                            initial="hidden"
                            animate="show"
                            transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
                        >
                            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-full">
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#E6F1FB] via-[#dceefb] to-[#f0f8ff]" />

                                {/* Main image — subtle scale-in */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.93 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
                                >
                                    <Image
                                        src={Routerman}
                                        alt="SOLEKTRA products"
                                        className="relative z-10 w-full h-[300px] sm:h-[400px] lg:h-[500px] object-contain drop-shadow-xl"
                                        priority
                                    />
                                </motion.div>

                                {/* Floating tags — entrance then continuous float */}
                                {floatingTags.map((tag, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.7 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: tag.delay, ease: "backOut" }}
                                        className="absolute z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-white shadow-md rounded-xl px-2.5 py-1.5 text-xs font-medium text-[#0072CE] whitespace-nowrap"
                                        style={{
                                            top: tag.top,
                                            bottom: (tag as any).bottom,
                                            left: (tag as any).left,
                                            right: (tag as any).right,
                                        }}
                                    >
                                        {/* Inner element handles the looping float independently */}
                                        <motion.span
                                            animate={{ y: [0, -7, 0] }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: tag.delay + i * 0.3,
                                            }}
                                            className="flex items-center gap-1.5"
                                        >
                                            <span>{tag.icon}</span>
                                            {tag.text}
                                        </motion.span>
                                    </motion.div>
                                ))}

                                {/* Coverage badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, delay: 1.0, ease: "easeOut" }}
                                    className="absolute z-20 bottom-3 right-3 bg-[#0072CE] text-white rounded-2xl px-3 py-2 text-center shadow-lg"
                                >
                                    <p className="text-sm font-semibold leading-none">100%</p>
                                    <p className="text-[9px] mt-0.5 opacity-80">4G Coverage</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── PRODUCTS CAROUSEL ── */}
            <section className="py-14">
                <div className="container mx-auto max-w-7xl px-5 sm:px-8 mb-6">
                    <motion.div
                        className="flex items-end justify-between"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Featured</p>
                            <h2 className="text-xl sm:text-2xl font-semibold text-[#0a0a0a]">Our latest products</h2>
                        </div>
                        <Link
                            href="/packages"
                            className="text-sm text-[#0072CE] font-medium flex items-center gap-1 hover:underline"
                        >
                            See all <ChevronRight size={14} />
                        </Link>
                    </motion.div>
                </div>

                <div className="relative px-5 sm:px-8 py-5">
                    <Carousel
                        opts={{ loop: true, align: "start" }}
                        plugins={[autoplayPlugin]}
                        className="w-full"
                        onMouseEnter={() => autoplayPlugin.stop()}
                        onMouseLeave={() => autoplayPlugin.play()}
                    >
                        <CarouselContent className="-ml-3 sm:-ml-4">
                            {products.map((product, index) => (
                                <CarouselItem
                                    key={index}
                                    className="pl-3 sm:pl-4 basis-full min-[400px]:basis-1/2 md:basis-1/3 lg:basis-1/4"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
                                        className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm group hover:shadow-md hover:border-[#0072CE]/20 transition-all duration-200"
                                    >
                                        <div className="overflow-hidden bg-gradient-to-b from-[#f0f8ff] to-white">
                                            <Image
                                                src={product.image}
                                                alt={product.title}
                                                className="w-full h-[160px] sm:h-[280px] object-cover transition-transform duration-300 group-hover:scale-105 p-3"
                                                priority={index === 0}
                                            />
                                        </div>
                                        <div className="px-3 pt-2 pb-1">
                                            <p className="text-xs font-semibold text-[#0a0a0a] truncate">{product.title}</p>
                                            <p className="text-[11px] text-gray-400 mt-0.5">{product.desc}</p>
                                        </div>
                                        <div className="flex items-center gap-2 p-3 border-t border-gray-100 mt-1 px-12">
                                            <Link
                                                href={product.buyHref}
                                                className="flex-1 text-xs font-semibold text-white bg-[#0072CE] hover:bg-[#0c3d6b] rounded-lg py-2 transition-colors text-center"
                                            >
                                                Buy now
                                            </Link>
                                            <Link
                                                href={product.learnHref}
                                                className="flex-1 text-xs font-medium text-[#0072CE] border border-[#0072CE]/30 hover:bg-[#0072CE]/5 rounded-lg py-2 transition-colors text-center"
                                            >
                                                Learn more
                                            </Link>
                                        </div>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-0 bg-white border-gray-200 text-[#0072CE] shadow-md hover:bg-gray-50" />
                        <CarouselNext className="right-0 bg-white border-gray-200 text-[#0072CE] shadow-md hover:bg-gray-50" />
                    </Carousel>
                </div>
            </section>

        </main>
    );
};
export default ProductsPage;