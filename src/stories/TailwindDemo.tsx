export const TailwindDemo = () => {
  return (
    <div className="p-8 space-y-12 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 min-h-screen">
      <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-8">
        Tailwind CSS Custom Sizing & Colors Demo
      </h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-200">
          Custom Sizing with []
        </h2>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg space-y-4">
          <div className="bg-[#6366f1] text-white p-4 rounded w-[237px]">
            Width: w-[237px] + bg-[#6366f1]
          </div>
          <div className="bg-[rgb(236,72,153)] text-white p-4 rounded h-[89px] flex items-center justify-center">
            Height: h-[89px] + bg-[rgb(236,72,153)]
          </div>
          <div className="bg-[#14b8a6] text-white p-4 rounded w-[42%]">
            Width: w-[42%] + bg-[#14b8a6]
          </div>
          <div className="bg-[hsl(189,94%,43%)] text-white p-4 rounded max-w-[456px]">
            Max width: max-w-[456px] + bg-[hsl(189,94%,43%)]
          </div>
          <div className="bg-[#f59e0b] text-white p-4 rounded min-h-[123px] flex items-center">
            Min height: min-h-[123px] + bg-[#f59e0b]
          </div>
        </div>
      </section>
    </div>
  );
};
