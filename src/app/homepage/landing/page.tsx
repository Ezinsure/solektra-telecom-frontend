'use client';

import { useMemo, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Homeimg1 from '../../../../public/assets/images/img5g.jpg'
import Homeimg2 from '../../../../public/assets/images/solektra4g.png'
import Homeimg3 from '../../../../public/assets/images/phones.avif'
import Router from '../../../../public/assets/images/router1.png'
import Routerdevice from '../../../../public/assets/images/routerdevice.webp'
import Smartphone1 from '../../../../public/assets/images/smartpnobg.png'
import VoLTE from '../../../../public/assets/images/voicecall.png'
import FiberInternet from '../../../../public/assets/images/fiber.jpg'
import HomeImage from '../../../../public/assets/images/curselhome/homeimg1.jpeg'
import CarouselImg1 from '../../../../public/assets/images/curselhome/homeimg4.jpeg'
import CarouselImg2 from '../../../../public/assets/images/curselhome/homeimg2.jpeg'
import CarouselImg5 from '../../../../public/assets/images/curselhome/homeimg5.jpeg'
import CarouselImg3 from '../../../../public/assets/images/curselhome/homeimg3.jpeg'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';


const heroSlides = [
    {
        image: Homeimg1,
        eyebrow: "4G Network",
        title: "Internet that keeps pace",
        titleAccent: "with your day",
        desc: "Fast, reliable 4G coverage across the country — built for streaming, work, and everything between.",
        href: "/products/4G-internet",
    },
    {
        image: Routerdevice,
        eyebrow: "Routers",
        title: "Stay connected,",
        titleAccent: "anywhere you are",
        desc: "Reliable routers built for homes and businesses — powered by our nationwide 4G network with zero setup hassle.",
        href: "/products/digital-devices",
    },
    {
        image: Homeimg2,
        eyebrow: "SOLEKTRA Telecom",
        title: "One network,",
        titleAccent: "every connection",
        desc: "Internet, voice, and devices — all from a single trusted provider built around you.",
        href: "/products",
    },
    {
        image: Homeimg3,
        eyebrow: "Devices",
        title: "Smartphones made",
        titleAccent: "accessible for all",
        desc: "Own a quality smartphone through flexible PAYGO plans — no big upfront cost.",
        href: "/products/digital-devices",
    },

];


const services = [
    {
        key: "4g",
        title: "4G Internet",
        desc: "Affordable high-speed data packages with reliable 4G connectivity for every need.",
        image: Router,
        theme: "light",
        href: "/products/4G-internet",
        buyHref: "/packages?cat=4g&sub=volume",
    },
    {
        key: "fiber",
        title: "Fiber Internet",
        desc: "Gigabit speeds delivered straight to your home or office, light-fast and rock solid.",
        image: FiberInternet,
        theme: "dark",
        href: "/products/fiber-internet",
        buyHref: "/packages?cat=fiber&sub=home",
    },
    {
        key: "devices",
        title: "Digital Devices",
        desc: "Own a smartphones with affordable Pay-As-You-Go instalment plans.",
        image: Smartphone1,
        theme: "dark",
        href: "/products/digital-devices",
        buyHref: "/packages?cat=devices&sub=smartphones",
    },
    {
        key: "volte",
        title: "VoLTE",
        desc: "Crystal-clear HD voice calls over our advanced 4G LTE network.",
        image: VoLTE,
        theme: "light",
        href: "/products/Vo-LTE",
        buyHref: "/packages?cat=volte&sub=packages",
    },
];

const products = [
    { image: CarouselImg1, title: "4G Home Router" },
    { image: CarouselImg2, title: "Gaming" },
    { image: HomeImage, title: "Smartphone — Entry" },
    { image: CarouselImg5, title: "VoLTE" },
    { image: CarouselImg3, title: "Smartphone — Mid" },
    { image: CarouselImg1, title: "Business Router" },
    { image: HomeImage, title: "Fiber ONT Router" },
    { image: CarouselImg3, title: "Pocket Router" },
    { image: HomeImage, title: "Business Router" },
];

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };
const stagger = (delayChildren = 0.1, staggerChildren = 0.1) => ({
    hidden: {},
    show: { transition: { staggerChildren, delayChildren } },
});

const LandingPage = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [activeSlide, setActiveSlide] = useState(0);

    const autoplayPlugin = useMemo(
        () => Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
        [],
    );

    const productsAutoplay = useMemo(
        () => Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true }),
        [],
    );

    // Track active slide so we can sync the text overlay
    useEffect(() => {
        if (!api) return;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActiveSlide(api.selectedScrollSnap());
        api.on("select", () => setActiveSlide(api.selectedScrollSnap()));
    }, [api]);

    return (
        <main className="bg-white text-[#0a0a0a] overflow-x-hidden">
            <div className="relative w-full h-[93vh] overflow-hidden">
                <Carousel
                    opts={{ loop: true, align: "start" }}
                    plugins={[autoplayPlugin]}
                    setApi={setApi}
                    className="w-full h-full"
                    onMouseEnter={() => autoplayPlugin.stop()}
                    onMouseLeave={() => autoplayPlugin.play()}
                >
                    <CarouselContent className="h-full">
                        {heroSlides.map((slide, index) => (
                            <CarouselItem key={index} className="h-[93vh]">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        priority={index === 0}
                                        quality={90}
                                        sizes="100vw"
                                        className="object-cover object-center"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* ── Synced text overlay — re-animates on slide change ── */}
                    <div className="absolute inset-0 flex items-end z-10 pointer-events-none">
                        <div className="container mx-auto max-w-7xl px-6 pb-16 sm:pb-20">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeSlide}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    variants={stagger(0, 0.08)}
                                    className="max-w-xl pointer-events-auto"
                                >
                                    <motion.span
                                        variants={fadeUp}
                                        transition={{ duration: 0.45, ease: "easeOut" }}
                                        className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] uppercase text-[#0072CE]  mb-4"
                                    >
                                        <span />
                                        {heroSlides[activeSlide].eyebrow}
                                    </motion.span>

                                    <motion.h1
                                        variants={fadeUp}
                                        transition={{ duration: 0.55, ease: "easeOut" }}
                                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white! leading-[1.12] mb-4"
                                    >
                                        {heroSlides[activeSlide].title}{" "}
                                        <span className="text-[#0072CE]">{heroSlides[activeSlide].titleAccent}</span>
                                    </motion.h1>

                                    <motion.p
                                        variants={fadeUp}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="text-white text-sm sm:text-base leading-relaxed mb-7 max-w-md"
                                    >
                                        {heroSlides[activeSlide].desc}
                                    </motion.p>

                                    <motion.div variants={fadeUp} transition={{ duration: 0.45, ease: "easeOut" }}>
                                        <Link
                                            href={heroSlides[activeSlide].href}
                                            className="inline-flex items-center gap-2 bg-[#0072CE] hover:bg-[#033f70] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-[0_4px_20px_rgba(232,136,36,0.35)]"
                                        >
                                            Explore
                                            <ChevronRight size={16} />
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Slide indicator dots */}
                    <div className="absolute bottom-6 right-6 z-20 flex gap-2">
                        {heroSlides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => api?.scrollTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeSlide === i ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
                                    }`}
                            />
                        ))}
                    </div>

                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/25 hover:border-white/40 transition-all duration-300 disabled:opacity-30" />
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/25 hover:border-white/40 transition-all duration-300 disabled:opacity-30" />
                </Carousel>
            </div>

            {/* ── SERVICE GRID ── */}
            <section className="py-16 sm:py-20">
                <div className="container mx-auto max-w-7xl px-6">
                    <motion.div
                        className="text-center mb-10"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#1d75b3] mb-3">
                            <span className="w-5 h-px bg-[#1d75b3]" />
                            Our products
                            <span className="w-5 h-px bg-[#1d75b3]" />
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0a0a]">
                            Quality Products for Every Connectivity Need

                        </h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
                        variants={stagger(0.1, 0.12)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.15 }}
                    >
                        {services.map((s) => {
                            const isDark = s.theme === "dark";
                            return (
                                <motion.div
                                    key={s.key}
                                    variants={fadeUp}
                                    transition={{ duration: 0.55, ease: "easeOut" }}
                                    className={`relative rounded-3xl overflow-hidden p-8 sm:p-10 flex flex-col items-center text-center group transition-transform duration-300 hover:-translate-y-1 ${isDark
                                        ? "bg-[#0072CE] text-white"
                                        : "bg-[#E6F1FB] text-[#0072CE]"
                                        }`}
                                >
                                    <h3 className={`italic text-xl sm:text-2xl font-bold mb-2 ${isDark ? "text-white!" : "text-[#0a0a0a]"}`}>
                                        {s.title}
                                    </h3>
                                    <p className={`text-sm leading-relaxed mb-5 max-w-xs ${isDark ? "text-white/70" : "text-[#0a0a0a]/70"}`}>
                                        {s.desc}
                                    </p>

                                    <div className="flex items-center justify-center gap-3 mb-7">
                                        <Link
                                            href={s.href}
                                            className={`text-xs font-medium px-4 py-2 rounded-full border transition-colors ${isDark
                                                ? "border-white/30 text-white hover:bg-white/10"
                                                : "border-[#1d75b3]/30 text-[#1d75b3] hover:bg-[#1d75b3]/10"
                                                }`}
                                        >
                                            Learn more
                                        </Link>
                                        <Link
                                            href={s.buyHref}
                                            className="text-xs font-semibold px-4 py-2 rounded-full bg-[#e88824] hover:bg-[#d07720] text-white transition-colors"
                                        >
                                            Buy now
                                        </Link>
                                    </div>

                                    <div className="relative w-full h-[160px] sm:h-[180px]">
                                        <Image
                                            src={s.image}
                                            alt={s.title}
                                            fill
                                            className="object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* ── Trust statement ── */}
            <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="my-4 text-2xl sm:text-3xl text-[#0a0a0a] text-center font-bold px-6"
            >
                Your trusted <span className="text-[#e88824]">partner for internet {' '}</span> &amp; digital solutions
            </motion.h2>

            {/*  Featured products */}
            <div className="relative px-5 sm:px-8 py-8">
                <Carousel
                    opts={{ loop: true, align: "start" }}
                    plugins={[productsAutoplay]}
                    className="w-full"
                    onMouseEnter={() => productsAutoplay.stop()}
                    onMouseLeave={() => productsAutoplay.play()}
                >
                    <CarouselContent className="-ml-3 sm:-ml-4">
                        {products.map((product, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-3 sm:pl-4 basis-full min-[400px]:basis-1/2 md:basis-1/3"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                                    className="relative rounded-2xl overflow-hidden shadow-sm group hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="overflow-hidden bg-gradient-to-b from-[#f0f8ff] to-white relative">
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-[200px] sm:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
                                            priority={index === 0}
                                        />
                                        {/* Title overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            <p className="text-white text-sm font-semibold">{product.title}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0 bg-white border-gray-200 text-[#0072CE] shadow-md hover:bg-gray-50" />
                    <CarouselNext className="right-0 bg-white border-gray-200 text-[#0072CE] shadow-md hover:bg-gray-50" />
                </Carousel>
            </div>
        </main>
    )
}
export default LandingPage