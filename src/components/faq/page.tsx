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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faqSecWrapper">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="border-b border-[#e5e5e5] py-3 cursor-pointer"
          >
            {/* Header */}
            <div className="relative pr-8" onClick={() => toggle(index)}>
              <h3 className="text-[16px] font-semibold text-[#101828] leading-[28px]">
                {faq.question}
              </h3>

              {/* Dynamic image using getImageUrl */}
              <span
                className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-no-repeat bg-contain"
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
            {isOpen && (
              <div className="mt-2">
                <p className="text-[14px] font-normal text-[#475467] leading-[22px] m-0">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
