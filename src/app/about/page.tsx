"use client";

import Image from "next/image";
import { MdOutlineSignalCellularAlt, MdOutlineGroups, MdOutlineLightbulb, MdOutlineHandshake } from "react-icons/md";
import { BsShieldCheck, BsGlobe } from "react-icons/bs";
import RouterImage from '../../../public/assets/images/router.png'
import WorkSpageImage from '../../../public/assets/images/workspace.png'
import DeviceImg from '../../../public/assets/images/phone.png'

const stats = [
    { value: "10K+", label: "Active Subscribers" },
    { value: "95%", label: "Network Uptime" },
    { value: "25+", label: "Districts Covered" },
    { value: "4G+", label: "Network Standard" },
];

const values = [
    { icon: <MdOutlineGroups size={22} />, label: "Community First" },
    { icon: <BsShieldCheck size={22} />, label: "Reliable Network" },
    { icon: <MdOutlineLightbulb size={22} />, label: "Innovation" },
    { icon: <MdOutlineHandshake size={22} />, label: "Partnership" },
    { icon: <BsGlobe size={22} />, label: "Digital Inclusion" },
    { icon: <MdOutlineSignalCellularAlt size={22} />, label: "Signal Quality" },
];

const coveredDistricts = [
    { name: "Kigali City", districts: ["Gasabo", "Kicukiro", "Nyarugenge"] },
    { name: "Northern Province", districts: ["Burera", "Gakenke", "Gicumbi", "Musanze", "Rulindo"] },
    { name: "Southern Province", districts: ["Gisagara", "Huye", "Kamonyi", "Muhanga", "Nyamagabe", "Nyanza", "Nyaruguru", "Ruhango"] },
    { name: "Eastern Province", districts: ["Bugesera", "Gatsibo", "Kayonza", "Kirehe", "Ngoma", "Nyagatare", "Rwamagana"] },
    { name: "Western Province", districts: ["Karongi", "Ngororero", "Nyabihu", "Nyamasheke", "Rubavu", "Rusizi", "Rutsiro"] },
];

const AboutPage = () => {
    return (
        <main className="bg-white text-[#0a0a0a]">

            {/* ── HERO SECTION ── */}
            <section className="bg-white py-10 ">
                <div className="container mx-auto max-w-7xl px-6">
                    <p className="text-xs uppercase tracking-widest text-[#1d75b3] font-semibold mb-4">About Solektra</p>
                    <h1 className="text-4xl md:text-5xl font-semibold !text-[#0a0a0a] leading-tight mb-4">
                        Where connectivity meets{" "}
                        <span className="text-[#1d75b3]">opportunity</span>
                    </h1>
                    <p className="text-[#0a0a0a]/50 text-base leading-relaxed max-w-4xl">
                        Our mission is to bridge the digital divide across Rwanda — ensuring every
                        home, business, and community can thrive in a connected world.
                    </p>
                </div>
            </section>

            {/* ── PHOTO GRID + STATS ── */}
            <section className="py-4 px-6 bg-white">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[420px]">

                        {/* Large left image */}
                        <div className="row-span-2 rounded-2xl overflow-hidden bg-gray-200">
                            <div className="w-full h-full bg-gradient-to-br from-[#1d75b3]/20 to-[#1d75b3]/5 flex items-center justify-center">
                                <Image
                                    src={WorkSpageImage}
                                    alt="wspaceImage"
                                />
                            </div>
                        </div>

                        {/* Top center — orange stat card */}
                        <div className="rounded-2xl bg-[#e88824] p-6 flex flex-col justify-end">
                            <p className="text-white text-4xl font-bold">95%</p>
                            <p className="text-white/80 text-sm mt-1 font-medium">Network Uptime Guaranteed</p>
                        </div>

                        {/* Top right image */}
                        <div className="rounded-2xl overflow-hidden bg-gray-200 border border-gray-200">
                            <div className="w-full h-full bg-gradient-to-br from-[#1d75b3]/10 to-gray-100 flex items-center justify-center">
                                <Image src={RouterImage} alt="routerImage" />
                            </div>
                        </div>

                        {/* Bottom center image */}
                        <div className="relative rounded-2xl overflow-hidden bg-gray-200 border border-gray-200 aspect-video">
                            <Image
                                src={DeviceImg}
                                alt="wspaceImage"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 30vw"
                            />
                        </div>
                        {/* Bottom right — dark stat card */}
                        <div className="rounded-2xl bg-[#0a0a0a] p-6 flex flex-col justify-end">
                            <p className="text-white text-4xl font-bold">25+</p>
                            <p className="text-white/60 text-sm mt-1 font-medium">Districts Connected</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MISSION + STATS ── */}
            <section className="py-20 mt-10 px-6 bg-[#f5f5f0] border-t border-gray-100">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16">

                        {/* Left */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] leading-tight">
                                Building Rwanda&apos;s digital future, one connection at a time
                            </h2>
                        </div>

                        {/* Right */}
                        <div className="flex flex-col gap-5 text-sm text-[#0a0a0a]/60 leading-relaxed">
                            <p>
                                What began as a vision to connect underserved communities has grown into a
                                trusted telecom provider across Rwanda. From our humble beginnings,
                                our journey has been fueled by passion, collaboration, and a relentless
                                drive to close the digital gap.
                            </p>
                            <p>
                                Our goal is to deliver reliable 4G internet, fiber broadband, and VoLTE
                                services to homes, businesses, and communities — enabling people to focus
                                on what matters most: growth, education, and opportunity.
                            </p>
                        </div>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-gray-200 pt-12">
                        {stats.map((stat, i) => (
                            <div
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
                <div className="container mx-auto max-w-5xl text-center">
                    <p className="text-xs uppercase tracking-widest text-[#1d75b3] font-semibold mb-3">What drives us</p>
                    <h2 className="text-3xl font-semibold text-[#0a0a0a]! mb-4">Our core values</h2>
                    <p className="text-[#0a0a0a]/50 text-sm max-w-md mx-auto leading-relaxed mb-12">
                        We believe in forging strong relationships with our customers, partners,
                        and communities — built on trust, transparency, and mutual respect.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
                        {values.map((val) => (
                            <div
                                key={val.label}
                                className="bg-white flex flex-col items-center gap-3 py-8 px-4 hover:bg-[#1d75b3]/5 transition-colors duration-200 group"
                            >
                                <div className="text-[#1d75b3] group-hover:scale-110 transition-transform duration-200">
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
