"use client";

import { useState } from "react";
import { categories } from "./plans";
import { CategoryKey } from "../types";

interface SidebarProps {
  activeCat: CategoryKey;
  activeSub: string;
  onSelect: (cat: CategoryKey, sub: string) => void;
}

const icons: Record<string, React.ReactElement> = {
  wifi: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 shrink-0" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  ),
  router: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 shrink-0" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12H3m18 0h-2M12 5V3m0 18v-2m-7-7a7 7 0 1114 0 7 7 0 01-14 0zm7-3v3m0 0l2 2m-2-2l-2 2" />
    </svg>
  ),
  "topology-star-3": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 shrink-0" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  "device-mobile": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 shrink-0" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
};

const SidebarPage = ({ activeCat, activeSub, onSelect }: SidebarProps) => {
  const [openCat, setOpenCat] = useState<CategoryKey>(activeCat);

  const toggleCat = (key: CategoryKey) => {
    setOpenCat((prev) => (prev === key ? ("" as CategoryKey) : key));
  };

  return (
    <nav
      className="w-56 shrink-0  py-10 bg-[#f5f0e870] rounded-3xl px-3 overflow-auto hidden lg:block "
      aria-label="Plan categories"
    >
      {categories.map((cat) => {
        const isOpen = openCat === cat.key;
        return (
          <div key={cat.key} id={cat.key}>
            <button
              onClick={() => toggleCat(cat.key)}
              className={`w-full flex  rounded-md  items-center justify-between my-4 px-4 py-2 text-sm font-medium transition-colors text-left cursor-pointer ${activeCat === cat.key
                ? "text-[#1d75b3] bg-[#f5f0e8]"
                : "text-gray-700 hover:bg-gray-50"
                }`}
            >
              <span className="flex items-center gap-2 rounded-2xl">
                {icons[cat.icon]}
                {cat.label}
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div className="pb-1">
                {cat.subs.map((sub) => {
                  const isActive = activeCat === cat.key && activeSub === sub.key;
                  return (
                    <button
                      key={sub.key}
                      onClick={() => onSelect(cat.key, sub.key)}
                      className={`w-full text-left text-sm pl-8 pr-4 py-1.5 border-r-2 rounded-md transition-all cursor-pointer font-normal my-2 ${isActive
                        ? "border-[#1d75b3] text-[#1d75b3] bg-[#E6F1FB]/40 font-normal"
                        : "border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                        }`}
                    >
                      {sub.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>

  );
}
export default SidebarPage;