"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import FiberInter from "../../../../public/assets/images/fiber.png";
import ReliableImg from "../../../../public/assets/images/reliablefi.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Mail, PhoneCall } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";


const contacts = [
  {
    label: "Call us",
    value: "1150",
    icon: <PhoneCall color="white" size={20} />,
  },
  {
    label: "Email",
    value: "info@solektra.co",
    icon: <Mail color="white" size={18} />,
  },
  {
    label: "WhatsApp",
    value: "+250 784 647 3",
    icon: <BsWhatsapp color="white" size={16} />,
  },
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

const FiberInternetPage = () => {
  const images = [FiberInter, ReliableImg];


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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-[#e88824]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] rounded-full bg-[#0072CE]/15 blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            {/* Carousel */}
            <div className="w-full lg:w-1/2 shrink-0">
              <motion.span
                className="block text-[#0072CE]"
                variants={fadeLeft}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
              >
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_80px_rgba(232,136,36,0.12)]">
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
                            alt={`Fiber Internet slide ${index + 1}`}
                            className="w-full h-[500px] object-cover"
                            priority={index === 0}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-3 bg-white/10 border-white/20 text-white hover:bg-white/20" />
                    <CarouselNext className="right-3 bg-white/10 border-white/20 text-white hover:bg-white/20" />
                  </Carousel>
                </div></motion.span>
            </div>

            <div className="w-full lg:w-1/2">
              <motion.p
                variants={fadeRight}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#0a0a0a]/75 font-semibold mb-4"
              >
                <span className="w-4 h-px bg-[#0a0a0a]" />
                Next-Generation Broadband
              </motion.p>
              <div className="text-3xl md:text-[2.5rem] font-semibold text-white leading-[1.15] mb-6">
                <motion.span
                  className="block text-[#0072CE]"
                  variants={fadeRight}
                  initial="hidden"
                  animate="show"
                  transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
                >
                  Internet that moves at the{" "}
                </motion.span>
                <motion.span
                  className="block text-[#e88824]"
                  variants={fadeRight}
                  initial="hidden"
                  animate="show"
                  transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
                >
                  speed of light
                </motion.span>
              </div>

              <motion.p
                className="block"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
              >
                <p className=" text-[15px] leading-relaxed mb-6">
                  At SOLEKTRA Telecom, we deliver the power of{" "}
                  <strong className="text-[#0072CE] font-medium">
                    fiber-optic internet
                  </strong>{" "}
                  — the fastest, most reliable, and future-ready broadband
                  available today. Stream 4K, video conference, game online, and
                  run your business without compromise.
                </p>
                <div className="border-l-2 border-[#e88824]/50 pl-4 text-[#0a0a0a]/75 text-[14px] leading-relaxed mb-8">
                  Unlike copper or cable, fiber transmits data as pulses of light
                  — immune to interference, immune to distance degradation, and
                  ready for whatever tomorrow demands.
                </div>
              </motion.p>

              {/* Speed stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["1 Gbps", "Peak speed"],
                  ["< 5ms", "Latency"],
                  ["99.9%", "Uptime SLA"],
                ].map(([val, label]) => (
                  <div data-aos="zoom-in-left"
                    key={val}
                    className="border border-[#03080f]/20 rounded-xl px-4 py-3 text-center"
                  >
                    <p className="text-[#e88824] font-bold text-lg leading-none mb-1">
                      {val}
                    </p>
                    <p className="text-[#8faec8] text-[11px] uppercase tracking-wide">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0072CE] to-[#0072CE]/50 py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div data-aos="fade-right" data-aos-delay="300">
              <h3 className="text-white! text-2xl font-semibold mb-2">
                Get fiber at your doorstep
              </h3>
              <p className="text-blue-200 text-sm max-w-md">
                Reach out and our team will check availability at your location,
                walk you through packages, and schedule installation at your
                convenience.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4">
              {contacts.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 min-w-[170px]"
                >
                  <span className="text-xl">{c.icon}</span>
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
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works strip ── */}
      <section className="border-t border-white/5 py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <div className="text-center mb-10">
              <h2 className="text-xl font-semibold text-white mb-2">
                How fiber reaches you
              </h2>
              <p className="text-[#8faec8] text-sm">
                Three steps from our network to your device
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-0">
            {[
              {
                step: "01",
                title: "Fiber backbone",
                desc: "Light-speed data travels through underground fiber-optic cables from our core network.",
              },
              {
                step: "02",
                title: "Local distribution",
                desc: "Fiber runs directly to your building — no copper last mile, no bottleneck.",
              },
              {
                step: "03",
                title: "Your devices",
                desc: "A compact ONT router delivers gigabit Wi-Fi to every room, instantly.",
              },
            ].map((s, i, arr) => (
              <React.Fragment key={s.step}>
                <div className="flex flex-col items-center text-center max-w-[220px] px-4" data-aos="fade-right" data-aos-delay="600"
                  data-aos-anchor-placement="top-bottom">
                  <div className="w-12 h-12 rounded-full border border-[#e88824]/40 flex items-center justify-center text-[#e88824] font-bold text-sm mb-4 bg-[#e88824]/10">
                    {s.step}
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[#7a9ab5] text-xs leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden md:flex items-center text-[#e88824]/30 text-2xl mx-2 mb-8">
                    →
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
export default FiberInternetPage;
