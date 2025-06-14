import Link from "next/link";

export default function ErrorResolvingHomePage() {
  return (
    <>
      <h1 className="pm_page_title font-weight_530 mt-10">Error Resolving</h1>
      <div className=" mt-20 grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-5">
        {Array.from({ length: 10 }).map((item, i) => {
          return (
            <div
              key={i}
              className="  border rounded-[15px] bg-background-color_950C h-[300px] border-border-color_800C"
            >
              <div className="bg-[var(--accent-surface-error-bg)] p-3 rounded-t-[15px] text-[var(--accent-surface-error-fg)] border border-[var(--accent-surface-error-border)]">
                <h2 className="  text-read_1 font-medium  three_line_ellipsis overflow-hidden">
                  Unhandled Runtime Error. Cannot read type null isError Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit.
                  Consectetur modi aperiam nostrum natus consequuntur fugit
                  recusandae nemo nesciunt ullam error!
                </h2>
              </div>
              <div className="p-3">
                <p className="text-read_3 text-text-color_3">Quick overview to resolve</p>
                <p className="text-read_2 text-text-color_2 mt-1 three_line_ellipsis overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi placeat reiciendis iusto fuga numquam aspernatur ipsam perspiciatis incidunt, pariatur hic dolore dolor aliquam neque impedit sunt ipsum accusamus. Mollitia, reiciendis.</p>
              </div>
              <Link scroll={false} href={`/error-resolving/resolve-${i+1}`}>
                <button className="py-2 px-8 text-text-zinc_white font-medium text-read_1 bg-emerald-600 rounded ">
                    Resolve now
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
