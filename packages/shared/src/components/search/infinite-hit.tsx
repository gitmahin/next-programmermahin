import { LUCIDE_DEFAULT_ICON_SIZE } from "@programmer/ui";
import { Folder } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { useInfiniteHits } from "react-instantsearch";

export function InfiniteHits({
  hitComponent: HitComponent,
  className,
  ...props
}: {
  hitComponent: React.ElementType;
  className?: string
}) {
  const { items, isLastPage, showMore } = useInfiniteHits(props);
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (sentinelRef.current !== null) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLastPage) {
            showMore();
          }
        });
      });

      observer.observe(sentinelRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [isLastPage, showMore]);

  const groupedHits = Object.groupBy(items, (hit) => hit.slug.split("/")[0])!;

  return (
    // Keep `pb-5` to ensure Infinite Scroll sentinel stays in view when loading
    <div className={`ais-InfiniteHits mt-2 w-full pb-5 ${className}`}>
      <div className="ais-InfiniteHits-list">
        {Object.keys(groupedHits).map((label, i) => (
          <React.Fragment key={i}>
            <div className="border p-3 rounded border-border-color_800C bg-background-color_925C mb-2">
              <div className={` flex justify-start items-center gap-2 `}>
                <Folder
                  size={LUCIDE_DEFAULT_ICON_SIZE}
                  className="text-text-color_1"
                />
                <span className="text-read_1 font-medium text-text-color_1">
                  {label
                    .replace(/^\d+-/, "")
                    .replace(/-/g, " ")
                    .replace(/^\w/, (c) => c.toUpperCase())}
                </span>
              </div>
              <div className="bg-background-color_950C mt-2 rounded p-2">
                {groupedHits &&
                  groupedHits[label]?.map((hit) => (
                    <div key={hit.objectID} className="ais-InfiniteHits-item  ">
                      <HitComponent hit={hit} />
                    </div>
                  ))}
              </div>
            </div>
          </React.Fragment>
        ))}
        <div
          className="ais-InfiniteHits-sentinel border-none"
          ref={sentinelRef}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
