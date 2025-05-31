import fs from "fs";
import matter, { GrayMatterFile } from "gray-matter";

export const getFileContent = (
  filePath: string
): {
  data: GrayMatterFile<string>["data"];
  content: GrayMatterFile<string>["content"];
} => {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    return { data, content };
  } catch (error) {
    return { data: {}, content: "" };
  }
};
