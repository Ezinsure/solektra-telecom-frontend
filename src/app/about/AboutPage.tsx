"use client";

import Image from "next/image";
import { MdOutlineSignalCellularAlt, MdOutlineGroups, MdOutlineLightbulb, MdOutlineHandshake } from "react-icons/md";
import { BsShieldCheck, BsGlobe } from "react-icons/bs";
import RouterImage from '../../../public/assets/images/router.png'
import WorkSpageImage from '../../../public/assets/images/workspace.png'
import DeviceImg from '../../../public/assets/images/phone.png'

const stats = [
    { value: "10K+", label: "Active subscribers" },
    { value: "99.9%", label: "Network Uptime" },
    { value: "30", label: "Districts covered" },
    { value: "12 months", label: "Smartphone installment plans" },
];

const values = [
    { icon: <MdOutlineGroups size={22} />, label: "Community First" },
    { icon: <BsShieldCheck size={22} />, label: "Reliable Network" },
    { icon: <MdOutlineHandshake size={22} />, label: "Fair, Clear Pricing" },
    { icon: <MdOutlineLightbulb size={22} />, label: "Innovation" },
    { icon: <BsGlobe size={22} />, label: "Digital Inclusion" },
    { icon: <MdOutlineSignalCellularAlt size={22} />, label: "Fast Support" },
];

const AboutPage = () => {
    return (
        <main className="bg-white text-[#0a0a0a]">

            {/* ── HERO SECTION ── */}
            <section className="bg-white py-10 ">
                <div className="container mx-auto max-w-7xl px-6">
                    <p data-aos="fade-right" data-aos-delay="300" className="text-xs uppercase tracking-widest text-[#0072CE] font-semibold mb-4">About Solektra Telecom</p>
                    <h1 data-aos="fade-left" data-aos-delay="300" className="text-4xl md:text-5xl font-semibold !text-[#0a0a0a] leading-tight mb-4">
                        Where connectivity meets{" "}
                        <span className="text-[#0072CE]">opportunity</span>
                    </h1>
                    <p data-aos="fade-left" data-aos-delay="300" className="text-[#0a0a0a]/50 text-base leading-relaxed max-w-4xl">
                        Solektra Telecom is a Kigali-based telecom provider delivering 4G internet, dedicated
                        fiber, VoLTE calling and smartphones on installment to homes, businesses, schools and
                        institutions across Rwanda. Our mission is to bridge the digital divide, so every
                        Rwandan can learn, work and grow online.
                    </p>
                </div>
            </section>


            <section className="py-4 px-6 bg-white">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 grid-rows-2 gap-3 h-full sm:h-[375px]">

                        <div data-aos="fade-right" data-aos-delay="300" className="row-span-2 rounded-2xl overflow-hidden bg-gray-200">
                            <div className="w-full h-full bg-gradient-to-br from-[#0072CE]/20 to-[#0072CE]/5 flex items-center justify-center">
                                <Image
                                    src={WorkSpageImage}
                                    alt="Team working online with Solektra Telecom business internet in Kigali"
                                    className="h-full w-full"
                                />
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-delay="300" className="rounded-2xl bg-[#e88824] p-6 flex flex-col justify-end">
                            <p className="text-white text-4xl font-bold">99.9%</p>
                            <p className="text-white/80 text-sm mt-1 font-medium">Uptime SLA on dedicated fiber</p>
                        </div>

                        <div data-aos="fade-down" data-aos-delay="300" className="rounded-2xl overflow-hidden bg-gray-200 border border-gray-200">
                            <div className="w-full h-full bg-gradient-to-br from-[#0072CE]/10 to-gray-100 flex items-center justify-center">
                                <Image src={RouterImage} alt="Solektra 4G home router for unlimited Wi-Fi in Rwanda" />
                            </div>
                        </div>


                        <div data-aos="fade-up-right" data-aos-delay="300" className="relative rounded-2xl overflow-hidden bg-gray-200 border border-gray-200 aspect-video">
                            <Image
                                src={DeviceImg}
                                alt="Smartphone available on installment from Solektra Telecom"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 30vw"
                            />
                        </div>
                        <div data-aos="fade-left" data-aos-delay="300" className="rounded-2xl bg-[#0a0a0a] p-6 flex flex-col justify-end">
                            <p className="text-white text-4xl font-bold">30</p>
                            <p className="text-white/60 text-sm mt-1 font-medium">Districts covered by 4G and fiber</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-20 mt-10 px-6 bg-[#f5f5f0] border-t border-gray-100">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16">
                        {/* Left */}
                        <div data-aos="fade-up-right" className="self-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] leading-tight">
                                Building Rwanda&apos;s digital future, one connection at a time
                            </h2>
                        </div>

                        {/* Right */}
                        <div data-aos="fade-up-left" className="flex flex-col gap-5 text-sm text-[#0a0a0a]/60 leading-relaxed">

                            <p>
                                Solektra Telecom started with a simple belief: reliable internet should not
                                depend on where you live. Today our 4G and fiber network reaches all 30
                                districts of Rwanda, from the centre of Kigali to rural communities, serving
                                families, small businesses, schools and large institutions.
                            </p>
                            <p>
                                We keep internet simple and fair. Unlimited home internet starts at 20,000 RWF
                                per month with the router included, we install on the same day you ask.
                            </p>
                            <p>
                                For organisations, we provide dedicated fiber up to 1 Gbps with a 99.9% uptime
                                SLA. We also offer VoLTE HD calling and Samsung, Tecno, Infinix and itel
                                smartphones that customers can pay over up to 24 months. Visit us at KABC
                                Building, 6th Floor, KN 5 Rd, Kigali, or call 1150.
                            </p>
                        </div>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-gray-200 pt-12">
                        {stats.map((stat, i) => (
                            <div data-aos="flip-up" data-aos-delay="300"
                                key={stat.label}
                                className={`flex flex-col gap-1 px-6 ${i !== 0 ? "border-l border-gray-200" : ""}`}
                            >
                                <p className="text-4xl font-bold text-[#0a0a0a]">{stat.value}</p>
                                <p className="text-xs text-[#0a0a0a]/45 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CORE VALUES ── */}
            <section className="py-20 px-6 bg-white border-t border-gray-100">
                <div data-aos="fade-up-right" data-aos-delay="300" className="container mx-auto max-w-5xl text-center">
                    <p className="text-xs uppercase tracking-widest text-[#0072CE] font-semibold mb-3">What drives us</p>
                    <h2 className="text-3xl font-semibold text-[#0a0a0a]! mb-4">Our core values</h2>
                    <p className="text-[#0a0a0a]/50 text-sm max-w-md mx-auto leading-relaxed mb-12">
                        We build long-term relationships with our customers, partners and communities
                        through clear prices, honest service, and support that answers when you call.
                    </p>

                    <div data-aos="fade-left" data-aos-delay="300" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
                        {values.map((val) => (
                            <div
                                key={val.label}
                                className="bg-white flex flex-col items-center gap-3 py-8 px-4 hover:bg-[#0072CE]/5 transition-colors duration-200 group"
                            >
                                <div className="text-[#0072CE] group-hover:scale-110 transition-transform duration-200">
                                    {val.icon}
                                </div>
                                <p className="text-xs font-medium text-[#0a0a0a]/70 text-center leading-snug">
                                    {val.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};
export default AboutPage;