import { TutorialNavItemType } from "@programmer/types"
import { action, makeObservable, observable } from "mobx";

class TutoTabStore {
    activeKey: string = ""
    tutorialName: string = ""
    data: TutorialNavItemType = {}
    open: boolean = false;
    lock: boolean = false;


    constructor() {
        makeObservable(this, {
            activeKey: observable,
            tutorialName: observable,
            data: observable,
            open: observable,
            lock: observable,
            setOpenTutoTab: action,
            setLockMouseEnter: action,
            setTutoTabDetails: action,
        })
    }


    setOpenTutoTab(value: boolean) {
        this.open = value;
    }

    setLockMouseEnter(value: boolean) {
        this.lock = value
    }

    setTutoTabDetails({data,
        activeKey,
        tutorialName}: {
             data: TutorialNavItemType;
        activeKey: string;
        tutorialName: string;
        }) {
        this.activeKey = activeKey;
        this.tutorialName = tutorialName;
        this.data = data;
    }
}

export const tutoTabStore = new TutoTabStore()
