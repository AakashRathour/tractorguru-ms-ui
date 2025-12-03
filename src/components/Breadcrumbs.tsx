import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items || !Array.isArray(items)) {
    return null;
  }

  return (
    <div className="bg-white mt-5">
      <div className="container mx-auto px-4">
        <ul className="flex mb-0 p-0 pt-0 md:pt-0 mt-[0.2rem] md:mt-0 whitespace-nowrap overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li
                key={index}
                className={`inline-block text-[10px] relative pr-[13px] mr-1 mb-0 font-semibold uppercase ${
                  isLast
                    ? "pr-0 mr-0 text-[#6C737F] after:hidden"
                    : "text-[#D32525] after:content-[''] after:absolute after:border after:border-[#D32525] after:border-t-0 after:border-r-0 after:w-[5px] after:h-[5px] after:rotate-[-135deg] after:right-[2px] after:top-[6px]"
                }`}
              >
                {item.href && !isLast ? (
                  <Link href={item.href} title={item.label}>
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
