interface ChipItem {
  label: string;
  href?: string;
}

interface ChipsProps {
  items: ChipItem[];
}

export default function Chips({ items }: ChipsProps) {
  return (
    <div className="">
      <div className="flex flex-wrap -mx-2">
        {items.map((item, index) => (
          <div key={index} className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2">
            <a
              href={item.href || "#"}
              className="
                block mt-3 p-2 text-center
                whitespace-nowrap overflow-hidden text-ellipsis
                border border-[#D32525] bg-white text-[#D32525]
                text-[14px] font-semibold rounded-[8px] hover:bg-[#D32525] hover:text-white
              "
              title={item.label}
            >
              {item.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
