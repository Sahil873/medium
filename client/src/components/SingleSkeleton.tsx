const SingleSkeleton = () => {
  return (
    <div className="grid grid-cols-12 px-8 py-12 max-w-screen-xl mx-auto">
      <div className="col-span-8 animate-pulse">
        <div className="mb-4 pb-2 border-b">
          <div className="h-12 bg-gray-300 rounded w-3/4"></div>
          <div className="mt-2 h-6 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="h-40 bg-gray-200 rounded"></div>
      </div>
      <div className="col-span-4 pl-4 animate-pulse">
        <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
        <div className="grid grid-cols-12 px-2 py-4">
          <div className="col-span-2 h-12 w-12 bg-gray-300 rounded-full"></div>
          <div className="col-span-10 pl-4">
            <div className="h-8 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSkeleton;
