import classNames from "classnames";
import { TwoSectionProps } from "@/src/interfaces/interface";

const TwoSection: React.FC<TwoSectionProps> = ({
  leftContent,
  rightContent,
  className,
  leftClassName,
  rightClassName,
}) => {
  return (
    <div className={classNames("flex flex-col lg:flex-row gap-4", className)}>
      {/* Left Section - 9 columns on desktop, full width on mobile */}
      <div className={classNames("w-full lg:w-9/12", leftClassName)}>
        {leftContent}
      </div>

      {/* Right Section - 3 columns on desktop, full width on mobile */}
      <div className={classNames("w-full lg:w-3/12", rightClassName)}>
        {rightContent}
      </div>
    </div>
  );
};

export default TwoSection;
