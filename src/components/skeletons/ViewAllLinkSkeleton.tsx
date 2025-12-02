import classNames from "classnames";

interface SkeletonProps {
  className?: string;
}

const ViewAllLinkSkeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div className={classNames("flex items-center gap-2", className)}>
      <div className="h-3 w-16 bg-gray-300 rounded animate-pulse" />
      <div className="h-3 w-3 bg-gray-300 rounded-full animate-pulse" />
    </div>
  );
};

export default ViewAllLinkSkeleton;
