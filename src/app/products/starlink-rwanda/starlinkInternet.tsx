"use client";

import { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { Clock, Headset, Mail, MapPin, PhoneCall, SatelliteDish, Wrench } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Slide1 from "../../../../public/assets/images/solektra-telecom-starlink-internet-rwanda.jpg";
import Slide2 from "../../../../public/assets/images/starlink2.jpg";

const PHONE = "1150";
const EMAIL = "info@solektra.co";
const WHATSAPP = "250794766463";

const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Solektra, I'd like to know about Starlink plans and availability.")}`;
const quoteUrl = `mailto:${EMAIL}?subject=${encodeURIComponent("Starlink quotation request")}&body=${encodeURIComponent(
  "Hello Solektra,\n\nI would like a quotation for Starlink.\n\nLocation (district / sector):\nFor (home, business, school, farm, lodge):\nPhone number:\n\nThank you.",
)}`;

const contacts = [
  { label: "Call us", value: PHONE, href: `tel:${PHONE}`, icon: <PhoneCall color="white" size={18} /> },
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, icon: <Mail color="white" size={16} /> },
  { label: "WhatsApp", value: "+250 794 766 463", href: whatsappUrl, icon: <BsWhatsapp color="white" size={15} /> },
];

const benefits = [
  {
    icon: <Clock className="h-6 w-6" strokeWidth={1.8} />,
    title: "Fast connection",
    desc: "Get connected anywhere in Rwanda in eight hours or less through our field team and distribution network.",
    stat: "8 hours or less",
  },
  {
    icon: <Wrench className="h-6 w-6" strokeWidth={1.8} />,
    title: "Help on the ground",
    desc: "Our team assists with your Starlink device, installation, and setup.",
    stat: "Installation",
  },
  {
    icon: <Headset className="h-6 w-6" strokeWidth={1.8} />,
    title: "Local call center support",
    desc: "Speak with a familiar team for questions, guidance, and assistance after you’re connected.",
    stat: "Local team",
  },
  {
    icon: <SatelliteDish className="h-6 w-6" strokeWidth={1.8} />,
    title: "Connectivity beyond 4G and fiber",
    desc: "Bring internet access to locations underserved by traditional networks.",
    stat: "Anywhere",
  },
];
const fadeLeft = { hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0 } };

const StarlinkPage = () => {
  const images = [Slide1, Slide2];

  const autoplayPlugin = useMemo(() => Autoplay({ delay: 2500, stopOnInteraction: true, stopOnMouseEnter: true }), []);

  return (
    <main className="bg-white text-[#0a0a0a]">
      <section className="relative overflow-hidden bg-white py-20">
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#1d75b3]/7 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#e88824]/6 blur-[120px]" />

        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-14 lg:flex-row">
            {/* Carousel */}
            <div data-aos="fade-right" data-aos-delay="300" className="w-full shrink-0 lg:w-1/2">
              <div className="relative overflow-hidden  shadow-[0_24px_80px_rgba(29,117,179,0.15)] ring-1 ring-[#1d75b3]/10">
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
                          alt={`Illustration of a technician helping a customer at a Rwandan home equipped with a satellite internet terminal., photo ${index + 1}`}
                          className="aspect-[4/3] w-full h-[500px] object-cover"
                          priority={index === 0}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-3 border-white/20 bg-white/10 text-white hover:bg-white/20" />
                  <CarouselNext className="right-3 border-white/20 bg-white/10 text-white hover:bg-white/20" />
                </Carousel>
              </div>
            </div>

            <div data-aos="fade-right" data-aos-delay="300" className="w-full lg:w-1/2">
              <span className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0a0a0a]/75">
                Starlink satellite internet
              </span>
              <h1 data-aos="fade-left" data-aos-delay="300" className="mb-3 text-3xl font-semibold leading-[1.15] md:text-[2.6rem]">
                Starlink Internet <span className="text-[#e88824]">in Rwanda</span>
              </h1>
              <p data-aos="fade-left" data-aos-delay="300" className="mb-4 text-[15px] leading-relaxed text-[#4a5568]">
                Where 4G coverage is limited and fiber hasn’t reached, <strong className="text-[#0a0a0a]">Solektra Telecom</strong> brings you
                Starlink satellite internet , with connection anywhere in Rwanda in eight hours or less.
              </p>
              <div data-aos="fade-left" data-aos-delay="500" className="mb-8 border-l-2 border-[#1d75b3]/30 pl-4 text-sm leading-relaxed text-[#4a5568]">
                Our extensive field network and experienced team make it possible to reach you quickly, help you get set up, and keep you
                supported. For your home, business, school, farm, or lodge, explore affordable Starlink options backed by people you can reach.
              </div>

              <div className="mb-8 grid grid-cols-3 gap-3">
                {[
                  ["≤ 8 hours", "To connect"],
                  ["Anywhere", "In Rwanda"],
                  ["Local", "Support team"],
                ].map(([val, label]) => (
                  <div
                    data-aos="fade-left"
                    data-aos-delay="300"
                    key={val}
                    className="rounded-xl border border-[#1d75b3]/20 bg-[#1d75b3]/5 px-4 py-3 text-center"
                  >
                    <p className="mb-1 text-sm font-bold leading-none text-[#1d75b3]">{val}</p>
                    <p className="text-[11px] uppercase tracking-wide text-[#64748b]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20">
        <div className="container mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="mb-4 text-2xl font-semibold text-[#0a0a0a] md:text-3xl">Anywhere in Rwanda. A Team Ready to Reach You.</h2>
            <p className="text-lg text-[#1d75b3]">Your location shouldn’t limit your access to opportunity.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="space-y-4 text-[15px] leading-relaxed text-[#4a5568]">
            <p>
              With field agents across Rwanda and a local call center, Solektra Telecom combines satellite connectivity with hands-on
              assistance. Our network helps us move quickly , from your first enquiry to getting your Starlink device installed and connected.
            </p>
            <p className="flex items-start gap-2 font-medium text-[#0a0a0a]">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#e88824]" />
              Tell us where you are. Our team will take it from there.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0072CE] to-[#0072CE]/50 py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <motion.div variants={fadeRight} initial="hidden" animate="show" transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}>
              <h3 className="mb-2 text-2xl font-semibold text-white!">Affordable Options, Chosen With You</h3>
              <p className="mb-3 max-w-xl text-sm text-blue-100">
                Every customer’s needs are different. Whether you’re connecting a family home, supporting online learning, or keeping your
                business running, we’ll help you explore a suitable option.
              </p>
              <p className="max-w-xl text-sm text-blue-200">
                Call, send us a WhatsApp message, or email us for current Starlink plans, equipment options, and a personalised quotation. Our
                team will explain the costs and setup requirements before you decide.
              </p>
            </motion.div>
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label === "WhatsApp" ? "_blank" : undefined}
                  rel={c.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="flex min-w-[160px] items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 transition-colors hover:bg-white/20"
                >
                  <span>{c.icon}</span>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wide text-blue-200">{c.label}</p>
                    <p className="text-sm font-semibold text-white">{c.value}</p>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="border-t border-[#e2e8f0] bg-white py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div data-aos="fade-up" data-aos-delay="300" className="mb-14 text-center">
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0a0a0a]/75">
              <span className="h-px w-5 bg-[#0a0a0a]" />
              Why Solektra
              <span className="h-px w-5 bg-[#0a0a0a]" />
            </span>
            <h2 className="mb-3 text-2xl font-semibold text-[#0a0a0a] md:text-3xl">More Than a Device. Peace of Mind.</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                data-aos="fade-up-left"
                data-aos-delay="300"
                key={b.title}
                className="group rounded-2xl border border-[#e2e8f0] bg-white p-6 transition-all duration-300 hover:border-[#1d75b3]/30 hover:shadow-[0_8px_30px_rgba(29,117,179,0.09)]"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1d75b3]/10 text-[#1d75b3] transition-colors duration-300 group-hover:bg-[#1d75b3]/20">
                    {b.icon}
                  </div>
                  <span className="rounded-full bg-[#e88824]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#e88824]">
                    {b.stat}
                  </span>
                </div>
                <h3 className="mb-2 text-[15px] font-semibold text-[#0a0a0a]">{b.title}</h3>
                <p className="text-sm leading-relaxed text-[#64748b]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
export default StarlinkPage;
