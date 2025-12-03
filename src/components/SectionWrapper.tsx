"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Heading from "@/src/components/ui/Heading";

export interface TabItem {
    id: string;
    label: string;
    content: ReactNode;
}

export interface ViewAllProps {
    label?: string;
    href?: string;
    icon?: boolean;
}

export interface SectionWrapperProps {
    id?: string;
    title?: string;
    className?: string;

    /** Optional Tabs */
    tabs?: TabItem[];
    activeTab?: string;
    onTabChange?: (id: string) => void;

    /** Optional View All Section */
    viewAll?: ViewAllProps;

    /** Main Content */
    children?: ReactNode;
    /** Optional Heading control */
    headingTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    headingSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function SectionWrapper({
    headingTag,
    headingSize,
    id,
    title,
    className = "",
    tabs,
    activeTab,
    onTabChange,
    viewAll,
    children,
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`mob-full bg-white rounded-xl shadow-sm mt-3 md:mt-4 ${className}`}
        >
            {/* Title */}
            {title && (
                <div className="px-3 md:px-4 pt-3 md:pt-4 mb-3">
                    <Heading tag={headingTag} size={headingSize} className="mb-3">
                        {title}
                    </Heading>
                </div>
            )}

            {/* TABS */}
            {tabs && tabs.length > 0 && (
                <div className="tabsMain-wrp">
                    <div className="nav navNew-tabs px-3 md:px-4 flex gap-[8px] border-b-2 border-[#D325251A]">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => onTabChange?.(tab.id)}
                                    className={`pb-2 border-b-2 transition-all px-[6px] pb-[8px] md:px-[12px] md:pb-[12px] ${isActive
                                            ? "text-[#D32525] border-[#D32525]"
                                            : "text-gray-700 border-transparent"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* TAB CONTENT */}
                    <div className="tab-content">
                        {tabs.map((tab) =>
                            activeTab === tab.id ? (
                                <div key={tab.id} className="tab-pane p-3 md:p-4">
                                    {tab.content}
                                </div>
                            ) : null
                        )}
                    </div>
                </div>
            )}

            {/* CHILDREN (when no tabs OR after tabs) */}
            {children && (!tabs || tabs.length === 0) && (
                <div className="px-3 md:px-4 pb-4">{children}</div>
            )}

            {/* VIEW ALL */}
            {viewAll && (
                <div className="bg-[#357cc90a] px-4 py-3">
                    <Link
                        href={viewAll.href || ""}
                        className="text-[#357CC9] text-[13px] hover:text-black font-medium text-sm transition-all group"
                    >
                        {viewAll.label || "View All"}
                        {viewAll.icon !== false && (
                            <Image
                                src="https://tractorguru.in/front/images/brand-icons/view-arrow.svg"
                                alt="arrow"
                                width={11}
                                height={15}
                                className="ml-1 inline-block"
                            />
                        )}
                    </Link>
                </div>
            )}
        </section>
    );
}
