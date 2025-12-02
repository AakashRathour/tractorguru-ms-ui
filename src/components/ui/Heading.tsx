import React from "react";
import classNames from "classnames";
import { HeadingProps } from "@/src/interfaces/interface";

const sizes = {
  h1: "text-[22px] leading-[28px] font-bold tracking-[0.03rem]",
  h2: "text-[20px] leading-[28px] font-bold tracking-[0.03rem]",
  h3: "text-[20px] leading-[28px] font-bold tracking-[0.03rem]",
  h4: "text-[20px] leading-[28px] font-bold tracking-[0.03rem]",
  h5: "text-[20px] leading-[28px] font-bold tracking-[0.03rem]",
  h6: "text-[20px] leading-[28px] font-bold tracking-[0.03rem]",
};

const Heading: React.FC<HeadingProps> = ({
  tag = "h2",
  children,
  className,
  size = "h2",
  uppercase = true,
  color = "text-black",
}) => {
  const TagName = tag;

  return (
    <TagName
      className={classNames(
        sizes[size],               
        uppercase && "uppercase",  
        color,                     
        className                  
      )}
    >
      {children}
    </TagName>
  );
};

export default Heading;
