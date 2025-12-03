import Image from "next/image";
import Link from "next/link";
import { ProductCardProps } from "@/src/interfaces/interface";
import { getImageUrl } from "../imagePath";

export default function ProductCard({
    title,
    slug,
    image,
    price,
    hp,
    brandName,
    modelName,
    brandId,
    onEmiClick,
    onPriceClick,
}: ProductCardProps) {
    return (
        <div className="relative border border-[#e5e5e5] rounded-lg overflow-hidden mt-3">
            {/* Product Image */}
            <div className="w-full">
                <Link href={slug} className="block w-full" title={title}>
                    <Image
                        src={image}
                        height={160}
                        width={290}
                        className="w-full h-auto"
                        alt={title}
                        title={title}
                    />
                </Link>
            </div>

            {/* Product Description */}
            <div className="bg-white">
                <div className="p-3">
                    {/* Title */}
                    <h3 className="text-[16px] font-semibold leading-[24px] whitespace-nowrap overflow-hidden text-ellipsis">
                        <Link href={slug} title={title} className="text-[#101828] hover:text-[#D32525]">
                            {title}
                        </Link>
                    </h3>

                    {/* Ex-Showroom Price Label */}
                    <p className="mb-0 mt-2 text-[12px] text-[#6C737F]">Ex-Showroom Price</p>

                    {/* Price and HP */}
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex-1">
                            <p className="mb-0 text-[18px] font-bold text-[#101828] whitespace-nowrap overflow-hidden text-ellipsis">
                                {price}
                            </p>
                        </div>
                        <div className="flex items-center gap-2 bg-[#F3F4F6] px-3 py-1 rounded">
                            <Image
                                src={getImageUrl("/brand-icons/hp_icon.svg")}
                                alt="HP"
                                width={20}
                                height={20}
                            />
                            <p className="mb-0 text-[14px] font-semibold text-[#101828]">{hp} HP</p>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="p-3 pt-0">
                    {/* EMI Link */}
                    <p className="mt-1 py-2 mb-2 flex justify-center items-center gap-1 text-[14px]">
                        <span className="text-[#6C737F]">For EMI</span>
                        <button
                            onClick={() => onEmiClick?.({ title, modelName, brandName, brandId })}
                            className="text-[#357CC9] font-semibold cursor-pointer hover:underline bg-transparent border-0"
                        >
                            Click Here
                        </button>
                    </p>

                    {/* Check Price Button */}
                    <button
                        onClick={() => onPriceClick?.({ title, modelName, brandName, brandId })}
                        className="block p-3 text-center bg-[#D32525] hover:bg-[#b91f1f] text-white font-semibold w-full rounded border-0 transition-colors"
                    >
                        Check Tractor Price
                    </button>
                </div>
            </div>
        </div>
    );
}

export { ProductCard };
