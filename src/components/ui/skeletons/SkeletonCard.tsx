export const SkeletonCard = () => {
  return (
    <div className="w-full sm:w-[320px] lg:w-[360px] animate-pulse">
      <div className="w-full aspect-[4/3] bg-gray-300 rounded" />

      <div className="mt-4 space-y-2">
        <div className="h-4 bg-gray-300 w-1/3 rounded" />
        <div className="h-5 bg-gray-300 w-2/3 rounded" />
        <div className="h-4 bg-gray-300 w-full rounded" />
      </div>
    </div>
  );
};