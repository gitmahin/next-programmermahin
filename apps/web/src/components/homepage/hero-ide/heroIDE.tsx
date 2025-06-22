export const HeroIDE = () => {
  return (
    <div className="w-full flex justify-center items-center relative z-20 mt-5">
      <div className="max-w-[800px] h-[500px] w-full relative">

        <div className="w-[400px] h-[300px] border rounded-[12px] absolute left-[100%]"></div>

        <div className="w-full h-full rounded-[12px] border border-border-color_800C bg-background-color_950C">
          <div className="w-full h-[25px] border-b border-border-color_800C flex justify-between items-center">
            <div className="flex justify-start items-center gap-2 pl-2">
              {Array.from({ length: 3 }).map((_, i) => {
                return (
                  <div
                    className={`w-[12px] h-[12px] rounded-full ${i === 0 ? "bg-[#ef4444]" : i === 1 ? "bg-[#facc15]" : "bg-[#a3e635]"} `}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
