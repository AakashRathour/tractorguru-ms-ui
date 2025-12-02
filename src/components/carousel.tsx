"use client";

import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRef, useState } from "react";
import { CarouselProps } from "@/src/interfaces/interface";

export default function CarouselComponent({
  slides,
  showArrows = false,
  showDots = false,
  autoPlay = true,
  infiniteLoop = true,
}: CarouselProps) {
  const lastIndex = useRef(0);
  const [loaded, setLoaded] = useState<boolean[]>([]);

  const handleChange = (index: number) => {
    if (index < lastIndex.current) return;
    lastIndex.current = index;
  };

  return (
    <Carousel
      infiniteLoop={infiniteLoop}
      autoPlay={autoPlay}
      interval={5000}
      showArrows={showArrows}
      showIndicators={showDots}
      showThumbs={false}
      showStatus={false}
      swipeable={false}
      emulateTouch={false}
      onChange={handleChange}
      stopOnHover={false}
    >
      {slides.map((item, index) => (
        <div key={index} className="relative w-full h-[380px] overflow-hidden">

          {/* Skeleton */}
          {!loaded[index] && (
            <div className="absolute inset-0 bg-gray-300 animate-pulse" />
          )}

          {item.link ? (
            <Link href={item.link} className="block">
              <Image
                src={item.img}
                alt={`slide-${index}`}
                fill
                priority
                className={`object-cover transition-opacity duration-300 ${
                  loaded[index] ? "opacity-100" : "opacity-0"
                }`}
                onLoadingComplete={() =>
                  setLoaded((prev) => {
                    const updated = [...prev];
                    updated[index] = true;
                    return updated;
                  })
                }
              />
            </Link>
          ) : (
            <Image
              src={item.img}
              alt={`slide-${index}`}
              fill
              priority
              className={`object-cover transition-opacity duration-300 ${
                loaded[index] ? "opacity-100" : "opacity-0"
              }`}
              onLoadingComplete={() =>
                setLoaded((prev) => {
                  const updated = [...prev];
                  updated[index] = true;
                  return updated;
                })
              }
            />
          )}
        </div>
      ))}
    </Carousel>
  );
}
