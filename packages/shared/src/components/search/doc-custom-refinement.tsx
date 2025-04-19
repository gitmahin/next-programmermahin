
import React, { useEffect } from "react";
import { useRefinementList, UseRefinementListProps } from "react-instantsearch";

export default function DocCustomRefinementList(props: UseRefinementListProps) {
  const { items, refine } = useRefinementList(props);

  useEffect(() => {
    if (items.length > 0 && !items.some((item) => item.isRefined)) {
      refine(items[0]!.value); // Set the first item as the default refinement
    }
  }, [items, refine]);

  const handleCheckboxChange = (value: string) => {
    // Uncheck all items first
    items.map((item) => {
      if (item.isRefined) {
        refine(item.value); // Uncheck the currently refined item
      }
    });
    // Then check the selected item
    refine(value);
  };

  return (
    <>
      <ul className="flex justify-start w-full items-center gap-2 px-2 overflow-x-auto">
        {items.map((item) => (
          <li
            key={item.label}
            className={`${item.isRefined ? "bg-pm_purple-700 text-text-zinc_white" : "bg-background-color_800C text-text-color_4"}  px-2 rounded-tiny font-medium flex-shrink-0`}
          >
            <label >
              <input
                className="hidden"
                type="checkbox"
                checked={item.isRefined}
                onChange={() => handleCheckboxChange(item.value)}
              />
              <span className="text-read_2">
              {item.label.charAt(0).toUpperCase() + item.label.slice(1)}

              </span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
