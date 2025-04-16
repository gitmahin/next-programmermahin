import { writeAlgolia } from "../../helpers/algolia/write.helper";
import { TUTORIAL_INDEX_NAME } from "../constant";
import { IndexTutorialsType } from "./type";

class Algolia {
  async indexTutorial(data: IndexTutorialsType[]) {
    const indexExists = await writeAlgolia.indexExists({
      indexName: TUTORIAL_INDEX_NAME,
    });

    if (indexExists) {
      await writeAlgolia.deleteIndex({ indexName: TUTORIAL_INDEX_NAME });
    }

    if (data) {
      await writeAlgolia.saveObjects({
        indexName: TUTORIAL_INDEX_NAME,
        objects: data,
      });

      await writeAlgolia.setSettings({
        indexName: TUTORIAL_INDEX_NAME,
        indexSettings: {
          searchableAttributes: ["label", "slug"],
          attributesForFaceting: ["type"],
        },
      });
    }
  }
}

export const algolia = new Algolia();
