"use client";

import classNames from "classnames";
import Image from "next/image";
import { InputProps } from "@/src/interfaces/interface";

const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  disabled = false,
  className,
  label,
  error,
  required = false,
  variant = "border",
  leftIcon,
  rightIcon,
  name,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const inputStyles = classNames(
    "w-full text-base transition-all duration-200",
    {
      "bg-white": !className?.includes("bg-"),
      "border border-[#e5e5e5] rounded-md hover:border-gray-400 focus:outline-none":
        variant === "border" && !error && !disabled,
      "border-0 border-b-2 border-[#e5e5e5] rounded-none hover:border-gray-400 focus:outline-none":
        variant === "border-bottom" && !error && !disabled,
      "border border-red-500 rounded-md focus:border-red-500":
        variant === "border" && error && !disabled,
      "border-0 border-b-2 border-red-500 rounded-none focus:border-red-500":
        variant === "border-bottom" && error && !disabled,
      "bg-gray-50 cursor-not-allowed opacity-60": disabled,
      "text-[#333]": value,
      "text-[#8c8c8c]": !value,
    },
    className
  );

  const getPaddingStyle = () => {
    if (leftIcon && rightIcon) {
      return { padding: "8px 40px 8px 40px" };
    } else if (leftIcon) {
      return { padding: "8px 10px 8px 40px" };
    } else if (rightIcon) {
      return { padding: "8px 40px 8px 10px" };
    }
    return { padding: "8px 10px" };
  };

  return (
    <div className="relative w-full">
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
          {required && <span className="text-[#D32525] ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Image src={leftIcon} alt="" width={16} height={16} />
          </div>
        )}

        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          placeholder={placeholder}
          className={inputStyles}
          style={getPaddingStyle()}
        />

        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Image src={rightIcon} alt="" width={20} height={20} />
          </div>
        )}
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
