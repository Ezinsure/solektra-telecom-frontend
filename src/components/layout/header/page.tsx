"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/assets/logos/logo-dark.png";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import {
  MdOutlineListAlt,
  MdOutlineCalendarMonth,
  MdOutlineAltRoute,
  MdOutlineStorefront,
} from "react-icons/md";

const products = [
  {
    icon: <MdOutlineListAlt className="text-xl" />,
    title: "4G Internet",
    desc: "Reliable high-speed 4G connectivity for homes and businesses.",
    href: "/products/4G-internet",
  },
  {
    icon: <MdOutlineCalendarMonth className="text-xl" />,
    title: "Fiber Internet",
    desc: "Ultra-fast fiber optic internet with low latency.",
    href: "/products/fiber-internet",
  },
  {
    icon: <MdOutlineAltRoute className="text-xl" />,
    title: "VoLTE",
    desc: "Crystal-clear voice calls delivered over our 4G network.",
    href: "/products/Vo-LTE",
  },
  {
    icon: <MdOutlineStorefront className="text-xl" />,
    title: "Digital Services",
    desc: "Manage your inbound digital pipeline from one interface.",
    href: "/products/digital-devices",
  },
];

const navLinks = [
  { label: "Home", hasDropdown: false, href: "/" },
  { label: "Solution", hasDropdown: true, href: "/products" },
  { label: "Pricing", hasDropdown: false, href: "/pricing" },
  { label: "About us", hasDropdown: false, href: "/about" },
  { label: "Contact", hasDropdown: false, href: "/contact" },
];

const HeaderPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);

  return (
    <header className="w-full bg-white/40 border-b border-gray-100 sticky top-0 z-50">
      {/*  Main bar  */}
      <div className="container mx-auto px-4 md:px-14 h-16 flex items-center justify-between">
        {/* Logo + Nav */}
        <Link href="/" className="flex items-center gap-10">
          <Image
            src={Logo}
            alt="SOLEKTRA TELECOM"
            className="h-14 w-44 object-contain"
          />
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => {
                if (link.hasDropdown) setDropdownOpen(true);
                setActiveNav(link.label);
              }}
              onMouseLeave={() => {
                if (link.hasDropdown) setDropdownOpen(false);
                setActiveNav(null);
              }}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1 px-4 py-2 text-base font-medium rounded-md transition-colors duration-500 ${activeNav === link.label
                  ? "text-[#0072CE]"
                  : "text-[#0a0a0a]/80 hover:text-[#0072CE]"
                  }`}
              >
                {link.label}
                {link.hasDropdown && (
                  <HiChevronDown
                    className={`text-sm transition-transform duration-200 ${dropdownOpen && activeNav === link.label
                      ? "rotate-180"
                      : ""
                      }`}
                  />
                )}
              </Link>

              {/* Mega dropdown */}
              {link.hasDropdown && dropdownOpen && activeNav === link.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[560px] bg-white rounded-2xl shadow-xl border border-gray-100 p-4 grid grid-cols-2 gap-2 z-50">
                  {products.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#0072CE]/5 transition-colors duration-150 group"
                    >
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 text-[#0072CE] group-hover:bg-[#0072CE]/10 transition-colors duration-150 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0a0a0a] group-hover:text-[#0072CE] transition-colors duration-500">
                          {item.title}
                        </p>
                        <p className="text-xs text-[#0a0a0a]/50 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* ── Right: CTA buttons ── */}
        {/* <div className="hidden md:flex items-center gap-3">
                    <a
                        href="#"
                        className="text-sm font-medium text-[#0a0a0a]/70 hover:text-[#0072CE] px-4 py-2 transition-colors duration-150"
                    >
                        Login
                    </a>
                </div> */}

        {/* ── Mobile hamburger ── */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-[#0a0a0a] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#0a0a0a] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#0a0a0a] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#0a0a0a]/70 hover:text-[#0072CE] py-2.5 border-b border-gray-50 transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <Link
              href="#"
              className="text-sm font-medium text-center text-[#0072CE] border border-[#0072CE] px-4 py-2.5 rounded-lg"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
export default HeaderPage;
