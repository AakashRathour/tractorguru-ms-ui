"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { SecondaryNavProps } from "@/src/interfaces/interface";
import { getImageUrl } from "@/src/components/imagePath";

const SecondaryNav: React.FC<SecondaryNavProps> = ({
    items,
    visibleItemsDesktop = 6,
    visibleItemsMobile = 5,
    className,
}) => {
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsMoreOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const visibleCount = isMobile ? visibleItemsMobile : visibleItemsDesktop;
    const visibleItems = items.slice(0, visibleCount);
    const moreItems = items.slice(visibleCount);

    return (
        <nav
            className={`fixed md:top-[129px] top-[55px] w-full z-[99] transition-[top] duration-100 ease-in-out bg-[#FCFCFC] h-9 border-b-2 border-[#D325251A] ${className}`}
        >
            <div className="container md:mx-auto md:px-4">
                <div className="secondaryNavList-inner">
                    <ul className="flex flex-row overflow-x-auto md:overflow-x-visible whitespace-nowrap -mx-2 mb-0 p-0 md:mx-0 list-none">
                        {visibleItems.map((item) => (
                            <li
                                key={item.id}
                                className="p-0 m-0 px-2 leading-normal list-none"
                            >
                                <span
                                    className={`block text-sm leading-5 outline-none border-0 m-0 border-b-2 pt-1 px-[5px] pb-2 cursor-pointer relative font-semibold ${item.active
                                        ? "text-[#D32525] border-[#D32525]"
                                        : "text-[#6C737F] border-transparent hover:text-[#D32525]"
                                        }`}
                                >
                                    {item.label}
                                </span>
                            </li>
                        ))}

                        {moreItems.length > 0 && (
                            <li
                                ref={dropdownRef}
                                className="p-0 m-0 px-2 leading-normal list-none relative"
                            >
                                <span
                                    className="flex items-center gap-1 text-sm leading-5 text-[#6C737F] outline-none border-0 m-0 border-b-2 border-transparent pt-1 px-[5px] pb-2 cursor-pointer relative font-semibold hover:text-[#D32525]"
                                    onClick={() => setIsMoreOpen(!isMoreOpen)}
                                >
                                    More
                                    <Image
                                        src={getImageUrl("brand-icons/drop-arrow.svg")}
                                        alt=""
                                        width={9}
                                        height={6}
                                        className={`transition-transform duration-200 ${isMoreOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </span>

                                {isMoreOpen && (
                                    <ul className="absolute top-full left-0 bg-white border border-[#e5e5e5] rounded shadow-lg min-w-[200px] z-50 m-0 p-0 list-none">
                                        {moreItems.map((item) => (
                                            <li
                                                key={item.id}
                                                className="p-0 m-0 px-2 leading-normal list-none border-b border-[#f5f5f5] last:border-b-0"
                                            >
                                                <span
                                                    className={`block text-sm leading-5 outline-none border-0 m-0 border-b-2 border-transparent py-3 px-4 cursor-pointer relative font-semibold ${item.active
                                                        ? "text-[#D32525] bg-[#f9f9f9]"
                                                        : "text-[#6C737F] hover:bg-[#f9f9f9] hover:text-[#D32525]"
                                                        }`}
                                                    onClick={() => setIsMoreOpen(false)}
                                                >
                                                    {item.label}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default SecondaryNav;
