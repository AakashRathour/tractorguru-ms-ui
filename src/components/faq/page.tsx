import { useState } from "react";
import { getImageUrl } from "../imagePath";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggle = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="faqSecWrapper">
      {items.map((faq, index) => {
        const isOpen = openIndexes.includes(index);

        return (  
          <div
            key={index}
            className={`py-3 cursor-pointer ${
              index !== items.length - 1 ? "border-b border-[#e5e5e5]" : ""
            }`}
          >
            {/* Header */}
            <div className="relative pr-8" onClick={() => toggle(index)}>
              <h3 className="text-[16px] font-semibold text-[#101828] leading-[28px]">
                {faq.question}
              </h3>

              {/* Plus / Minus Icon */}
              <span
                className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-no-repeat bg-contain transition-all duration-300"
                style={{
                  backgroundImage: `url(${getImageUrl(
                    isOpen
                      ? "brand-icons/faq-minus-icon.svg"
                      : "brand-icons/faq-plusicon.svg"
                  )})`,
                }}
              ></span>
            </div>

            {/* Body */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-[14px] font-normal text-[#475467] leading-[22px] m-0">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
