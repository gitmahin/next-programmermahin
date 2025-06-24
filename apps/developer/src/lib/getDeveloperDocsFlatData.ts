import { DEVELOPER_DOCS_DATA } from "@/constants/developer-docs-data";

export const getDeveloperDocsFlatData: { label: string; path: string }[] =
  Object.values(DEVELOPER_DOCS_DATA).flatMap((section) =>
    section.items.flatMap((item) => {
      const basePath = `/${section.slug}/${item.slug}`;
      const mainList = { label: item.label, path: basePath };
      if (!item.siblingOneItems) return [mainList];
      const childLists = item.siblingOneItems.map((siblingOneItem) => ({
        label: siblingOneItem.siblingOneLabel,
        path: `${basePath}/${siblingOneItem.siblingOneSlug}`,
      }));
      return [mainList, ...childLists];
    })
  );
