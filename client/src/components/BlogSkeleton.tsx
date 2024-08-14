const BlogSkeleton = () => {
  return (
    <div className="border-b py-4 w-2/3 lg:w-1/2 animate-pulse">
      <div className="flex items-center">
        <div className="rounded-full bg-gray-300 h-6 w-6"></div>
        <div className="bg-gray-300 h-4 w-24 ml-2 rounded"></div>
        <span className="mx-2 w-[3px] h-[3px] bg-gray-500 rounded-full"></span>
        <div className="bg-gray-300 h-4 w-20 rounded"></div>
      </div>
      <div className="pt-2 pb-4">
        <div className="bg-gray-300 h-8 w-3/4 rounded mb-2"></div>
        <div className="bg-gray-300 h-5 w-full rounded"></div>
        <div className="bg-gray-300 h-5 w-5/6 rounded mt-2"></div>
      </div>
      <div>
        <div className="bg-gray-300 h-4 w-20 rounded"></div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
