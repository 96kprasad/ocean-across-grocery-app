export default function ProductSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-3 shadow-sm animate-pulse">
      <div className="w-full h-28 bg-gray-200 rounded-xl mb-2" />
      <div className="h-3 bg-gray-200 rounded w-3/4 mb-1" />
      <div className="h-3 bg-gray-200 rounded w-1/2 mb-2" />
      <div className="flex justify-between items-center">
        <div className="h-4 bg-gray-200 rounded w-12" />
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
}
