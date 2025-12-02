"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HeaderProps, MenuItem } from "@/src/interfaces/interface";
import SearchPopup from "@/src/components/ui/SearchPopup";
import ViewAllLink from "@/src/components/ui/ViewAllLink";

export default function Header({ menuData }: HeaderProps) {
  const pathname = usePathname();
  const isNewsPage = pathname?.startsWith("/news");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);
  const [activeMobileBrands, setActiveMobileBrands] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<"English" | "हिंदी">(
    "English"
  );
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const resolveItem = (id: string): MenuItem | undefined =>
    menuData.extraItems[id] || menuData.menuItems.find((i) => i.id === id);

  const desktopItems = menuData.desktopOrder
    .map(resolveItem)
    .filter(Boolean) as MenuItem[];
  const mobileItems = menuData.mobileOrder
    .map(resolveItem)
    .filter(Boolean) as MenuItem[];

  const getIcon = (key?: string) => {
    if (!key || !menuData.icons[key]) return null;
    const size = key === "compare" ? 20 : 20;
    return (
      <Image src={menuData.icons[key]} alt="" width={size} height={size} />
    );
  };

  return (
    <>
      <header className="sticky top-0 z-[1000] border-b border-[#dee2e6]">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white border-b border-[#dee2e6]">
          <div className="py-3">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Image
                    src="https://tractorguru.in/front/images/header-icon/hamburger-icon.svg"
                    alt="Menu"
                    width={20}
                    height={20}
                    priority
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="cursor-pointer"
                  />
                  <Link href="/" className="flex items-center">
                    <Image
                      src="https://tractorguru.in/front/images/logo.svg"
                      alt="Logo"
                      width={127}
                      height={21}
                      priority
                    />
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full border border-[#ebebeb] bg-[#fafafa] p-1.5 flex justify-center items-center cursor-pointer"
                    onClick={() => setIsSearchOpen(true)}
                  >
                    <div className="w-5 h-5 bg-[url('https://tractorguru.in/front/images/header-icon/search-icon.svg')] bg-no-repeat bg-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block bg-white">
          <div className="fixed left-0 right-0 top-0 z-[100] bg-white py-3 border-b border-[#dee2e6]">
            <div className="container mx-auto px-4">
              <div className="flex items-center mx-[-15px]">
                <div className="w-1/4 px-[15px]">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="https://tractorguru.in/front/images/logo.svg"
                      alt="Logo"
                      width={196}
                      height={32}
                      priority
                    />
                  </Link>
                </div>
                <div
                  className="w-5/12 px-[15px] relative cursor-pointer"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <input
                    type="text"
                    placeholder="Search Tractors & Brands"
                    className="w-full max-w-[412px] bg-[#fafafa] border border-[#e5e5e5] rounded-lg text-[#8c8c8c] font-semibold text-sm py-3.5 px-3.5 pl-10 outline-none cursor-pointer bg-[url('https://tractorguru.in/front/images/header-icon/search-icon.svg')] bg-no-repeat bg-[2.2%_50%] bg-[length:24px] focus:border-[#e63946] focus:bg-white focus:shadow-[0_0_0_3px_rgba(230,57,70,0.08)]"
                    readOnly
                  />
                </div>
                <div className="w-1/3 px-[15px] flex justify-end items-center gap-3 ml-auto">
                  {isNewsPage && (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsLanguageOpen(true)}
                      onMouseLeave={() => setIsLanguageOpen(false)}
                    >
                      <button className="w-[40px] h-[40px] rounded-full border border-[#ebebeb] bg-[#fafafa] p-1.5 flex justify-center items-center cursor-pointer">
                        <Image
                          src="https://tractorguru.in/front/images/header-icon/language-icon.svg"
                          alt="Language"
                          width={20}
                          height={20}
                        />
                        {/* {selectedLanguage} */}
                      </button>
                      {isLanguageOpen && (
                        <div className="absolute right-0 top-full w-[150px] bg-white border border-[#e5e5e5] rounded-lg shadow-lg z-[999] py-2">
                          <button
                            onClick={() => {
                              setSelectedLanguage("English");
                              setIsLanguageOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-[#f5f5f5] border-none bg-transparent cursor-pointer flex items-center gap-2 ${
                              selectedLanguage === "English"
                                ? "text-[#e63946] font-semibold"
                                : "text-black"
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                selectedLanguage === "English"
                                  ? "border-[#e63946]"
                                  : "border-gray-400"
                              }`}
                            >
                              {selectedLanguage === "English" && (
                                <div className="w-2 h-2 rounded-full bg-[#e63946]" />
                              )}
                            </div>
                            English
                          </button>
                          <button
                            onClick={() => {
                              setSelectedLanguage("हिंदी");
                              setIsLanguageOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-[#f5f5f5] border-none bg-transparent cursor-pointer flex items-center gap-2 ${
                              selectedLanguage === "हिंदी"
                                ? "text-[#e63946] font-semibold"
                                : "text-black"
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                selectedLanguage === "हिंदी"
                                  ? "border-[#e63946]"
                                  : "border-gray-400"
                              }`}
                            >
                              {selectedLanguage === "हिंदी" && (
                                <div className="w-2 h-2 rounded-full bg-[#e63946]" />
                              )}
                            </div>
                            हिंदी
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                  <Link
                    href="/compare"
                    className="px-4 py-2 rounded-md font-semibold text-base tracking-tight text-black bg-[#f5f5f5]  no-underline transition-colors"
                  >
                    Compare Tractors
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-t border-[#dee2e6] border-b border-[#e5e5e5] shadow-[0px_4px_5.5px_0px_rgba(0,0,0,0.14)] py-3.5 pt-[91px]">
            <div className="container mx-auto px-4">
              <nav className="p-0">
                <ul className="flex gap-5 list-none m-0 p-0">
                  {desktopItems.map((item) => (
                    <li
                      key={item.id}
                      className="relative"
                      onMouseEnter={() =>
                        item.hasDropdown && setActiveDropdown(item.id)
                      }
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span
                        className={`font-bold text-sm uppercase cursor-pointer text-[#202020] relative pb-[20px] ${
                          activeDropdown === item.id
                            ? "before:content-[''] before:absolute before:block before:w-full before:h-[3px] before:bottom-[8px] before:left-0 before:right-0 before:bg-[rgb(211,37,37)]"
                            : "hover:before:content-[''] hover:before:absolute hover:before:block hover:before:w-full hover:before:h-[3px] hover:before:bottom-[8px] hover:before:left-0 hover:before:right-0 hover:before:bg-[rgb(211,37,37)]"
                        }`}
                      >
                        <span className="">{item.title}</span>
                        {item.hasDropdown && (
                          <span className="inline-block ml-[8px] align-[0.255em] w-0 h-0 border-t-[0.3em] border-t-current border-r-[0.3em] border-r-transparent border-b-0 border-l-[0.3em] border-l-transparent" />
                        )}
                      </span>

                      {/* Mega Menus */}
                      {item.hasDropdown &&
                        activeDropdown === item.id &&
                        item.hasMegaMenu && (
                          <div className="absolute top-[35px] left-0 w-[522px] bg-white rounded-none rounded-b-lg shadow-[2px_9px_25.3px_0px_rgba(0,0,0,0.2)] opacity-100 visible animate-[megaMenuShow_0.6s_cubic-bezier(0.4,0,0.2,1)_forwards] z-[9999]">
                            <div className="p-4 px-6">
                              <div className="flex flex-wrap gap-10 mb-0">
                                {item.categories?.map((cat, i: number) => (
                                  <ul
                                    key={i}
                                    className="flex flex-wrap overflow-y-auto overflow-x-hidden list-none h-auto p-0 gap-x-2 w-full"
                                  >
                                    {cat.title && (
                                      <li className="w-full">
                                        <strong className="text-sm font-semibold text-[#454545] m-0 mb-2 pb-0 border-b-0">
                                          {cat.title}
                                        </strong>
                                      </li>
                                    )}
                                    {cat.links.map(
                                      (
                                        link: { href: string; label: string },
                                        j: number
                                      ) => (
                                        <li
                                          key={j}
                                          className="flex-[0_0_49%] max-w-[49%] py-1.5"
                                        >
                                          <Link
                                            href={link.href}
                                            className="p-0 font-normal text-sm text-black capitalize inline hover:no-underline hover:text-[#e63946]"
                                          >
                                            {link.label}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                ))}
                              </div>

                              {/* Brands */}
                              {item.brands && (
                                <div className="mt-4">
                                  <div className="flex justify-between items-center mb-4">
                                    <h4 className="text-sm font-semibold text-[#454545] m-0 mb-2 pb-0 border-b-0">
                                      Brands
                                    </h4>
                                    <ViewAllLink href="/brands" />
                                  </div>
                                  <div className="flex flex-wrap whitespace-nowrap -mx-1">
                                    {item.brands.map((b, i: number) => (
                                      <div
                                        key={i}
                                        className="max-w-[95px] px-1 text-base text-[#212529] text-left list-none"
                                      >
                                        <div className="border border-[#dee2e6] rounded-lg text-center p-1">
                                          <Link href={b.href} className="block">
                                            <Image
                                              src={b.logo}
                                              alt={b.name}
                                              width={80}
                                              height={56}
                                              className="px-2.5"
                                            />
                                            <p className=" my-1 font-normal text-[11px] leading-[14px] text-black whitespace-nowrap overflow-hidden text-ellipsis">
                                              {b.name}
                                            </p>
                                          </Link>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* News Items */}
                              {item.newsItems && (
                                <div className="mt-4">
                                  <div className="flex justify-between items-center mb-4">
                                    <h4 className="text-sm font-semibold text-[#454545] m-0 mb-2 pb-0 border-b-0">
                                      Latest News
                                    </h4>
                                    <ViewAllLink href="/news" />
                                  </div>
                                  <div className="flex overflow-x-auto flex-nowrap whitespace-nowrap scrollbar-none -mx-1">
                                    {item.newsItems.map((news, i: number) => (
                                      <div key={i} className="w-1/2 px-1">
                                        <div className="border border-[#dee2e6] rounded-lg p-2">
                                          <p className="font-semibold text-[9px] leading-3 uppercase text-[#d32525]">
                                            {news.category}
                                          </p>
                                          <Link href={news.href}>
                                            <p className="font-medium text-[13px] leading-[18px] text-black mb-2.5 whitespace-normal overflow-hidden line-clamp-2">
                                              {news.title}
                                            </p>
                                          </Link>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black/70 z-[1100] animate-[overlayFadeIn_0.3s_ease]"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 left-0 bottom-0 w-[305px] bg-white z-[1101] overflow-y-auto animate-[slideInLeft_0.3s_ease] shadow-[2px_0_8px_rgba(0,0,0,0.15)] h-screen pb-[100px]">
            <div className="bg-white border-b border-[#e5e5e5] py-3 px-4 flex justify-between items-center">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="https://tractorguru.in/front/images/logo.svg"
                  alt="Logo"
                  width={129}
                  height={20}
                />
              </Link>
              {isNewsPage && (
                <div
                  className="w-8 h-8 rounded-full border border-[#ebebeb] bg-[#fafafa] p-1.5 flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsMobileLanguageOpen(true);
                  }}
                >
                  <Image
                    src="https://tractorguru.in/front/images/header-icon/language-icon.svg"
                    alt="Language"
                    width={20}
                    height={20}
                  />
                </div>
              )}
            </div>

            <ul className="m-0 p-0">
              {/* Home */}
              <li className="block border-b border-[#ececec]">
                <Link
                  href="/"
                  className="flex items-center gap-2.5 py-3.5 px-3 text-[#454545] text-[13px] font-semibold leading-[18px] capitalize no-underline transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Image
                    src={menuData.icons.home}
                    alt="Home"
                    width={18}
                    height={18}
                  />
                  Home
                </Link>
              </li>

              {/* Menu Items */}
              {mobileItems.map((item) => {
                const isActive = activeMobileDropdown === item.id;
                const isCompareItem = item.id === "compare";
                const isNewTractors = item.id === "new-tractors";

                return (
                  <li key={item.id} className="block border-b border-[#ececec]">
                    {item.hasDropdown && !isCompareItem ? (
                      <>
                        <span
                          className={`flex items-center gap-2.5 py-3.5 px-3 text-[#454545] no-underline text-base font-medium border-none bg-none w-full text-left cursor-pointer transition-all relative ${
                            isActive ? "border-b border-[#D32525]" : ""
                          }`}
                          onClick={() =>
                            setActiveMobileDropdown(isActive ? null : item.id)
                          }
                        >
                          {getIcon(item.icon)}
                          <span className="text-[#454545] capitalize items-center gap-2.5 text-[13px] font-semibold leading-[18px] no-underline transition-all flex">
                            {item.title}
                          </span>
                          <Image
                            src="https://tractorguru.in/front/images/header-icon/down-arrow-icon.svg"
                            alt=""
                            width={20}
                            height={20}
                            className={`ml-auto transition-transform duration-300 text-[#8c8c8c] relative right-2 ${
                              isActive ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </span>

                        {isActive && (
                          <ul className="bg-white border-t border-[#eee] m-0 p-0 list-none">
                            {/* Brands – Only in New Tractors */}
                            {isNewTractors && item.brands && (
                              <li className="py-3 pl-6 pr-5 block text-[#444] text-sm border-b border-[#ececec] no-underline">
                                <div
                                  className="flex justify-between items-center text-[13px] font-semibold leading-[18px] text-[#333] cursor-pointer"
                                  onClick={() =>
                                    setActiveMobileBrands((prev) => !prev)
                                  }
                                >
                                  <span>Brands</span>
                                  <Image
                                    src={
                                      activeMobileBrands
                                        ? "https://tractorguru.in/front/images/header-icon/minus-icon.svg"
                                        : "https://tractorguru.in/front/images/header-icon/plus-icon.svg"
                                    }
                                    alt=""
                                    width={16}
                                    height={16}
                                  />
                                </div>
                                {activeMobileBrands && (
                                  <ul className="list-none p-0 m-0 bg-white">
                                    {item.brands.map((brand, i) => (
                                      <li key={i}>
                                        <Link
                                          href={brand.href}
                                          className="py-3 pl-6 pr-5 block text-[#444] text-sm border-b border-[#ececec] no-underline"
                                          onClick={() => setIsMenuOpen(false)}
                                        >
                                          {brand.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            )}

                            {/* Categories */}
                            {item.categories?.map((cat, i) => (
                              <li key={i} className="border-b border-[#eee]">
                                {cat.title && (
                                  <div className="py-3 pr-4 font-semibold text-[13px] text-[#555] bg-[#fafafa]">
                                    {cat.title}
                                  </div>
                                )}
                                <ul className="list-none p-0 m-0 bg-white">
                                  {cat.links.map(
                                    (
                                      link: { href: string; label: string },
                                      j: number
                                    ) => (
                                      <li key={j}>
                                        <Link
                                          href={link.href}
                                          className="py-3 pl-6 pr-5 block text-[#444] text-sm border-b border-[#ececec] no-underline"
                                          onClick={() => setIsMenuOpen(false)}
                                        >
                                          {link.label}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href!}
                        className="flex items-center gap-2.5 py-3.5 px-3 text-[#454545] text-[13px] font-semibold leading-[18px] capitalize no-underline transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {getIcon(item.icon)}
                        <span className="text-[#454545] capitalize items-center gap-2.5 text-[13px] font-semibold leading-[18px] no-underline transition-all flex">
                          {item.title}
                        </span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}

      {(activeDropdown || isLanguageOpen) && (
        <div
          className="fixed left-0 right-0 bottom-0 bg-black/40 z-[999] animate-[overlayFadeIn_0.3s_ease]"
          style={{ top: "128px" }}
          onMouseEnter={() => {
            setActiveDropdown(null);
            setIsLanguageOpen(false);
          }}
        />
      )}

      {/* Mobile Language Bottom Sheet */}
      {isMobileLanguageOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-[1200] animate-[overlayFadeIn_0.3s_ease]"
            onClick={() => setIsMobileLanguageOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-white z-[1201] rounded-t-2xl animate-[slideUp_0.3s_ease] shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
            <div className="flex justify-between items-center p-4 border-b border-[#e5e5e5]">
              <h3 className="text-lg font-semibold text-black m-0">
                Change Language
              </h3>
              <button
                onClick={() => setIsMobileLanguageOpen(false)}
                className="w-8 h-8 flex items-center justify-center border-none bg-transparent cursor-pointer text-2xl text-gray-500 hover:text-black"
              >
                ×
              </button>
            </div>
            <div className="p-4 pb-6">
              <button
                onClick={() => {
                  setSelectedLanguage("English");
                  setIsMobileLanguageOpen(false);
                }}
                className="w-full flex items-center gap-3 p-4 mb-3 border-none bg-transparent cursor-pointer text-left rounded-lg hover:bg-[#f5f5f5]"
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    selectedLanguage === "English"
                      ? "border-[#e63946]"
                      : "border-gray-400"
                  }`}
                >
                  {selectedLanguage === "English" && (
                    <div className="w-3 h-3 rounded-full bg-[#e63946]" />
                  )}
                </div>
                <span
                  className={`text-base ${
                    selectedLanguage === "English"
                      ? "text-[#e63946] font-semibold"
                      : "text-black font-normal"
                  }`}
                >
                  English
                </span>
              </button>
              <button
                onClick={() => {
                  setSelectedLanguage("हिंदी");
                  setIsMobileLanguageOpen(false);
                }}
                className="w-full flex items-center gap-3 p-4 border-none bg-transparent cursor-pointer text-left rounded-lg hover:bg-[#f5f5f5]"
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    selectedLanguage === "हिंदी"
                      ? "border-[#e63946]"
                      : "border-gray-400"
                  }`}
                >
                  {selectedLanguage === "हिंदी" && (
                    <div className="w-3 h-3 rounded-full bg-[#e63946]" />
                  )}
                </div>
                <span
                  className={`text-base ${
                    selectedLanguage === "हिंदी"
                      ? "text-[#e63946] font-semibold"
                      : "text-black font-normal"
                  }`}
                >
                  हिंदी
                </span>
              </button>
            </div>
          </div>
        </>
      )}
      <SearchPopup
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}

export { Header };