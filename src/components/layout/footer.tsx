"use client";

import Link from "next/link";
import Image from "next/image";
import { FooterProps } from "@/src/interfaces/interface";

export default function Footer({ footerData }: FooterProps) {
  if (!footerData) {
    return null;
  }

  return (
    <>
      <footer className="bg-[rgba(52,58,64,1)] mt-[48px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-y-[15px] gap-x-[50px] lg:gap-[50px] justify-between py-[24px] md:py-[48px] mr-[-8px] ml-[-8px] md:mr-0 md:ml-0">
            {/* Logo + Social + WhatsApp */}
            <div className="order-4 lg:order-none px-2">
              <div>
                <Link
                  href="/"
                  className="text-[13px] font-semibold leading-5 text-white"
                >
                  <Image
                    src={footerData.logo.src}
                    alt={footerData.logo.alt}
                    width={footerData.logo.width}
                    height={footerData.logo.height}
                    className="mb-9"
                  />
                </Link>
              </div>

              <p className="text-[13px] leading-5 text-white mb-2 uppercase text-base">
                Follow Us
              </p>

              <ul className="mb-9 flex list-none p-0 m-0">
                {footerData.socialLinks.map((social, i) => (
                  <li key={i} className="inline-block mr-[15px] mb-0">
                    <Link href={social.href} target="_blank" rel="noopener">
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={20}
                        height={20}
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center">
                <Link
                  href={footerData.whatsappChannel.href}
                  target="_blank"
                  rel="noopener"
                  className="bg-[#4b4b4b] py-3 px-3.5 min-w-[217px] rounded-lg flex items-center relative hover:text-white hover:underline"
                >
                  <Image
                    src={footerData.whatsappChannel.icon}
                    alt="WhatsApp Channel"
                    width={32}
                    height={32}
                    className="mr-2"
                  />
                  <span className="text-[13px] font-bold leading-5 text-white">
                    Join Our WhatsApp <span className="block">Channel</span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Columns */}
            {footerData.columns.map((col, i) => (
              <div key={i} className="px-2 flex-[1_1_40%] w-full relative md:flex-none md:w-auto">
                <p className="text-[13px] leading-5 text-white uppercase mb-3">
                  {col.title}
                </p>
                <ul className="list-none p-0 m-0">
                  {col.links.map((link, j) => (
                    <li key={j} className="mb-3 leading-5">
                      <Link
                        href={link.href}
                        className="text-[13px] font-semibold leading-5 text-white hover:text-white hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="relative py-3 before:content-[''] before:w-[99%] before:absolute before:border-t before:border-[#7a7a7a] before:top-0 before:left-1/2 before:-translate-x-1/2 before:block">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2">
                <p className="text-[13px] font-normal leading-5 text-white mb-0 py-1 text-center md:text-left">
                  © {new Date().getFullYear()}
                  <Link
                    href="/"
                    className="text-[13px] font-semibold leading-5 text-white hover:text-white hover:underline"
                  >
                    TractorGuru,
                  </Link>
                  All Rights Reserved.
                </p>
              </div>
              <div className="w-full md:w-1/2 text-right">
                <p className="text-[13px] font-normal leading-5 text-white mb-0 py-1 flex justify-evenly md:justify-end">
                  <Link
                    href="/privacy-policy"
                    className="text-[13px] font-semibold leading-5 text-white hover:text-white hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/Sitemap"
                    className="text-[13px] font-semibold leading-5 text-white hover:text-white hover:underline md:ml-12"
                  >
                    Sitemap
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export { Footer };
