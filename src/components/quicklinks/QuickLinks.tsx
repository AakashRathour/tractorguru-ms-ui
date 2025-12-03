"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "../imagePath";

export interface QuickLinkItem {
  label: string;
  url: string;
}

export interface QuickLinksSection {
  title: string;
  links: QuickLinkItem[];
}

interface QuickLinksProps {
  sections: QuickLinksSection[];
}

export default function QuickLinks({ sections }: QuickLinksProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordions, setOpenAccordions] = useState<number[]>([0]);

  const toggleAccordion = (idx: number) => {
    setOpenAccordions((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="w-full">
      {/* Desktop Tabs - Hidden on Mobile */}
      <div className="hidden md:block">
        {/* Tab Headers */}
        <div className="flex border-b border-[#e5e5e5]">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 text-[14px] font-medium transition-all ${
                activeTab === index
                  ? "text-[#d32f2f] border-b-2 border-[#d32f2f]"
                  : "text-[#475467] hover:text-[#101828]"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="py-6">
          <div className="flex items-center gap-2 flex-wrap">
            {sections[activeTab].links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="text-[14px] text-[#475467] hover:text-[#d32f2f] transition-colors relative py-[6px] pr-4 pl-[30px] capitalize before:content-[''] before:absolute before:bg-[#D9D9D9] before:h-[8px] before:w-[8px] before:rounded-full before:left-[14px] before:top-1/2 before:-translate-y-1/2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Accordion - Hidden on Desktop */}
      <div className="md:hidden">
        {sections.map((section, index) => {
          const isOpen = openAccordions.includes(index);

          return (
            <div
              key={index}
              className="shadow-[0.5px_0.5px_8px_0px_#00000014] rounded-lg p-4 mt-4"
            >
              {/* Accordion Header */}
              <div
                className="cursor-pointer relative pr-8"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-[16px] font-semibold text-[#101828]">
                  {section.title}
                </h3>

                {/* Plus / Minus Icon */}
                <span
                  className={`absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <Image
                    src={getImageUrl("brand-icons/drop-icon.svg")}
                    alt="toggle"
                    width={11}
                    height={6}
                  />
                </span>
              </div>

              {/* Accordion Content */}
              <div
                className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex items-center gap-0 flex-wrap">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.url} 
                      className="text-[14px] text-[#475467] hover:text-[#d32f2f] transition-colors relative w-1/2 py-[6px] pr-4 pl-[20px] capitalize whitespace-nowrap overflow-hidden text-ellipsis before:content-[''] before:absolute before:bg-[#D9D9D9] before:h-[8px] before:w-[8px] before:rounded-full before:left-[8px] before:top-1/2 before:-translate-y-1/2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
