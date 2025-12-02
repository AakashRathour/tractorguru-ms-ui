"use client";

import { useState } from "react";

interface SearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const popularSearches = [
  "Swaraj 744 FE",
  "MAHINDRA 475 DI",
  "New Holland 3630 TX",
  "Massey Ferguson 1035",
  "Farmtrac 45",
  "SONALIKA DI 50 SIKANDER",
  "Kubota MU4501 2WD",
  "Powertrac Euro 45",
  "Mahindra",
  "Mahindra YUVO TECH Plus 405 DI",
  "Mahindra 255 DI Power Plus",
  "Mahindra 265 DI",
];

export default function SearchPopup({ isOpen, onClose }: SearchPopupProps) {
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 lg:bg-black/20 z-[2000] animate-[fadeIn_0.3s_ease]"
        onClick={onClose}
      />

      {/* Search Popup */}
      <div className="z-[9999] bg-white w-full h-full fixed top-0 left-0">
        <div className="lg:max-w-[500px] lg:relative lg:mx-auto lg:p-0">
          {/* Search Header */}
          <div className="flex items-center gap-3 lg:gap-2 p-4 lg:py-3.5 lg:px-4 bg-[#f8f9fa] lg:bg-white border-b border-[#e0e0e0] lg:border-b-0 lg:rounded-t sticky top-0 z-10">
            <button
              className="bg-none border-none p-2 lg:p-1 cursor-pointer text-[#333333] flex items-center justify-center transition-colors hover:text-[#e63946] flex-shrink-0"
              onClick={onClose}
              aria-label="Close search"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                width="24"
                height="24"
                className="lg:w-5 lg:h-5"
              >
                <path
                  d="M19 12H5M12 19l-7-7 7-7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="relative flex-1">
              <svg
                className="absolute left-3.5 lg:left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] lg:w-4 lg:h-4 text-[#999999] lg:text-[#666666] pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <path
                  d="M21 21l-4.35-4.35"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Search Tractors & Brands"
                className="w-full py-3 px-4 pl-11 lg:py-2 lg:px-3.5 lg:pl-9 border border-[#e0e0e0] lg:border-2 lg:border-[#e63946] rounded-md lg:rounded text-base lg:text-sm outline-none bg-white transition-all focus:border-[#e63946] focus:shadow-[0_0_0_3px_rgba(230,57,70,0.08)] lg:focus:shadow-none placeholder:text-[#999999]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>
          </div>

          {/* Search Content */}
          <div className="flex-1 lg:bg-white lg:rounded-b">
            <h3 className="px-[15px] pt-[9px] text-lg lg:text-[15px] font-semibold text-[#333333] m-0 lg:px-4">
              Popular Searches
            </h3>

            <div className="flex flex-col gap-0 lg:max-h-[400px] lg:overflow-y-auto">
              {popularSearches.map((search, index) => (
                <a
                  key={index}
                  href={`/search?q=${encodeURIComponent(search)}`}
                  className="block px-[15px] py-[9px] text-[#666666] lg:text-[#555555] no-underline text-base lg:text-sm  lg:border-b-0 transition-all"
                >
                  {search}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
