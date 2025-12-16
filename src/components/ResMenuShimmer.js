const ResMenuShimmer = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 animate-pulse">
      <div className="bg-white rounded-xl shadow p-5 border border-slate-200 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <div className="w-full h-48 bg-slate-200 rounded-lg"></div>
        </div>

        <div className="flex flex-col justify-between w-full md:w-2/3">
          <div>
            <div className="h-6 w-40 bg-slate-300 rounded mb-3"></div>
            <div className="h-4 w-56 bg-slate-200 rounded mb-2"></div>
            <div className="h-4 w-32 bg-slate-200 rounded mb-2"></div>
            <div className="h-4 w-20 bg-slate-200 rounded"></div>
          </div>

          <div className="h-5 w-24 bg-slate-300 rounded mt-4"></div>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow border border-slate-200 flex justify-between items-center"
            >
              <div className="w-full">
                <div className="h-5 w-40 bg-slate-300 rounded mb-2"></div>
                <div className="h-4 w-56 bg-slate-200 rounded mb-1"></div>
                <div className="h-4 w-24 bg-slate-200 rounded"></div>
              </div>

              <div className="w-20 h-20 bg-slate-200 rounded-lg"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ResMenuShimmer;
