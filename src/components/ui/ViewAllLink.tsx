import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { ViewAllLinkProps } from "@/src/interfaces/interface";
import { getImageUrl } from "@/src/components/imagePath";

const ViewAllLink: React.FC<ViewAllLinkProps> = ({
  href,
  title,
  label = "View All",
  icon = getImageUrl("brand-icons/view-arrow.svg"),
  className,
  iconClassName,
  loading = false,
  width = 16,
  height = 16,
}) => {
  if (loading) {
    return (
      <div
        className={classNames(
          "inline-flex items-center gap-2 h-[20px] w-[90px]", // same size as final layout
          className
        )}
      >
        {/* text skeleton */}
        <div className="h-[12px] w-[55px] bg-gray-300 animate-pulse rounded" />

        {/* icon skeleton (fixed width to avoid CLS) */}
        <div
          className="bg-gray-300 animate-pulse rounded"
          style={{ width, height }}
        />
      </div>
    );
  }

  return (
    <Link
      href={href}
      title={title}
      className={classNames(
        "font-semibold text-xs text-[#357cc9] flex items-center hover:no-underline",
        className
      )}
    >
      {label}

      {icon && (
        <Image
          src={icon}
          alt=""
          width={width}
          height={height}
          className={classNames("ml-2", iconClassName)}
          priority
        />
      )}
    </Link>
  );
};

export default ViewAllLink;
