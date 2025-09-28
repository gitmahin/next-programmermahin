import { TutorialEnums } from "@programmer/constants";
import { TutorialNavItemType } from "@programmer/types";
import { action, makeObservable, observable } from "mobx";

export class TutorialChaptersStore {
    value: TutorialNavItemType = {};
    type: string = "";
    constructor() {
        makeObservable(this, {
            value: observable,
            type: observable,
            setTutorialChapters: action
        })
    }

    setTutorialChapters({ data, type }:{ data: TutorialNavItemType; type: TutorialEnums } ) {
   this.value = data;
      this.type = type;
    }
}

export const tutorialChaptersStore = new TutorialChaptersStore()