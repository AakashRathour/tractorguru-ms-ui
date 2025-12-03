"use client";

import classNames from "classnames";
import Image from "next/image";
import { SelectProps } from "@/src/interfaces/interface";
import { getImageUrl } from "@/src/components/imagePath";

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  className,
  label,
  error,
  required = false,
  variant = "border",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const selectStyles = classNames(
    "w-full text-base bg-white appearance-none transition-all duration-200 cursor-pointer",
    {
      "border border-[#e5e5e5] rounded-md hover:border-gray-400 focus:outline-none focus:border-[#D32525]":
        variant === "border" && !error && !disabled,
      "border-0 border-b-2 border-[#e5e5e5] rounded-none hover:border-gray-400 focus:outline-none focus:border-[#D32525]":
        variant === "border-bottom" && !error && !disabled,
      "border border-red-500 rounded-md focus:border-red-500":
        variant === "border" && error && !disabled,
      "border-0 border-b-2 border-red-500 rounded-none focus:border-red-500":
        variant === "border-bottom" && error && !disabled,
      "bg-gray-50 cursor-not-allowed opacity-60": disabled,
      "text-[#8c8c8c]": !value,
      "text-[#333]": value,
    },
    className
  );

  const paddingStyle = {
    padding: "6px 48px 6px 12px",
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
        <select
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className={selectStyles}
          style={paddingStyle}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <Image
            src={getImageUrl("aw-sel.svg")}
            alt=""
            width={12}
            height={12}
          />
        </div>
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Select;
