import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { ButtonProps } from "@/src/interfaces/interface";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "fill",
  onClick,
  href,
  type = "button",
  disabled = false,
  className,
  leftImage,
  rightImage,
  imageWidth = 20,
  imageHeight = 20,
  imageClassName,
  loading = false,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    fill: "bg-[#D32525] text-white hover:bg-[#202020] hover:text-[#fff]",
    border:
      "bg-transparent text-[#D32525] border-2 border-[#D32525] hover:bg-[#D32525] hover:text-white active:bg-[#b91f1f]",
  };

  const combinedClassName = classNames(
    baseStyles,
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {loading ? (
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {leftImage && (
            <Image
              src={leftImage}
              alt=""
              width={imageWidth}
              height={imageHeight}
              className={classNames("flex-shrink-0", imageClassName)}
            />
          )}
          {children}
          {rightImage && (
            <Image
              src={rightImage}
              alt=""
              width={imageWidth}
              height={imageHeight}
              className={classNames("flex-shrink-0", imageClassName)}
            />
          )}
        </>
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedClassName}
    >
      {content}
    </button>
  );
};

export default Button;
