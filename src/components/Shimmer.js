const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="p-4 m-2 bg-white rounded-xl border border-slate-200 shadow-md animate-pulse w-full"
          >
            <div className="w-full h-40 bg-slate-200 rounded-lg"></div>

            <div className="mt-3 space-y-2">
              <div className="h-4 bg-slate-200 rounded w-3/4"></div>

              <div className="flex gap-3 mt-2">
                <div className="h-4 bg-slate-200 rounded w-16"></div>
                <div className="h-4 bg-slate-200 rounded w-20"></div>
              </div>

              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-24"></div>
              <div className="h-4 bg-slate-200 rounded w-32"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
