import { action, makeObservable, observable } from "mobx";

class SidebarStore {
    isOpenMobSidebar: boolean = false
    constructor() {
        makeObservable(this, {
            isOpenMobSidebar: observable,
            setIsOpenMobSidebar: action
        })
    }

    setIsOpenMobSidebar(value: boolean) {
        this.isOpenMobSidebar = value
    }
}

export const sidebarStore = new SidebarStore()