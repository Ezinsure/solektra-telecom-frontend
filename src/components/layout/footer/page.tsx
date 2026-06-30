import Image from "next/image";
import Logo from "../../../../public/assets/logos/logo.png";
import { HiOutlineSlash } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi";
import { SiWhatsapp, SiInstagram } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import React from "react";

const socialLinks: { icon: React.ReactNode; label: string; href: string }[] = [
  {
    icon: <SiWhatsapp />,
    label: "WhatsApp",
    href: "https://wa.me/250794766463",
  },
  { icon: <MdPhoneIphone />, label: "Phone", href: "tel:1150" },
  {
    icon: <SiInstagram />,
    label: "Instagram",
    href: "https://www.instagram.com/solektra_telecom/",
  },
  {
    icon: <RiTwitterXFill />,
    label: "X / Twitter",
    href: "https://x.com/solektra_rwanda",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/solektra-rwanda/posts/?feedView=all",
  },
];

const products = [
  { label: "4G Internet", href: "/products/4G-internet" },
  { label: "Fiber Internet", href: "/products/fiber-internet" },
  { label: "VoLTE (Voice over 4G)", href: "/products/Vo-LTE" },
  { label: "Digital Services", href: "/products/digital-devices" },
];

const support = [
  "info@solektra.co",
  "+250 794 766 463 / 1150",
  "KABC Building, 6th Floor",
  "KN 5 RD, Kigali-Rwanda",
];

const FooterPage = () => {
  return (
    <footer style={{ backgroundColor: "#0072CE" }} className="text-white">
      <div className="container mx-auto px-4 md:px-16 py-14">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0">
          <div className="flex flex-col gap-2 md:w-[40%] md:pr-10">
            <Image
              src={Logo}
              alt="SOLEKTRA TELECOM"
              className="h-14 w-44 object-contain"
            />

            <p className="text-sm font-light text-white/60 leading-relaxed max-w-[400px] ">
              We are revolutionizing digital connectivity across{" "}
              <span className="text-white font-normal">homes</span>,{" "}
              <span className="text-white font-normal">businesses</span>, and{" "}
              <span className="text-[#e88824] font-normal">communities</span>.
            </p>

            <div className="mt-8">
              <p className="text-sm text-white/70 font-light mb-2">
                Never miss an update
              </p>
              <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 gap-2 max-w-[450px] focus-within:border-[#e88824] transition-colors duration-200">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-transparent text-sm text-white placeholder-white/35 focus:outline-none"
                />
                <button
                  type="button"
                  aria-label="Subscribe"
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-white/20 hover:bg-[#e88824] transition-colors duration-200 flex-shrink-0"
                >
                  <HiArrowRight className="text-white text-sm" />
                </button>
              </div>
            </div>
          </div>

          {/* ── Fading divider ── */}
          <div
            className="hidden md:block w-px self-stretch mx-2"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(255,255,255,0.18) 25%, rgba(255,255,255,0.18) 75%, transparent)",
            }}
          />

          <div className="flex flex-1 md:px-10">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 w-full">
              {/* Products */}
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest font-medium flex items-center gap-1 mb-8">
                  <HiOutlineSlash />
                  <HiOutlineSlash />
                  Products
                </p>
                <ul className="flex flex-col gap-3">
                  {products.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-white/70 hover:text-[#e88824] text-sm transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest font-medium flex items-center gap-1 mb-8">
                  <HiOutlineSlash />
                  <HiOutlineSlash />
                  Support
                </p>
                <ul className="flex flex-col gap-3">
                  {support.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white/70 hover:text-[#e88824] text-sm transition-colors duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── Fading divider ── */}
          <div
            className="hidden md:block w-px self-stretch mx-2"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(255,255,255,0.18) 25%, rgba(255,255,255,0.18) 75%, transparent)",
            }}
          />

          {/* ── RIGHT: Social icons ── */}
          <div className="flex flex-row md:flex-col items-center justify-center gap-4 md:pl-10">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-[#e88824] hover:border-[#e88824] transition-all duration-200 text-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-6 pt-6  flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <p>
            © {new Date().getFullYear()} Solektra Telecom. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterPage;
