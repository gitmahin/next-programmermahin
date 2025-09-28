import { action, makeObservable, observable } from "mobx"

export type PaginateStoreDataType = {
    label: string;
    path: string;
};

class PaginationStore {
    next: PaginateStoreDataType | undefined = undefined
    prev: PaginateStoreDataType | undefined = undefined
    constructor() {
        makeObservable(this, {
            next: observable,
            prev: observable,
            setPagination: action
        })
    }

    setPagination(currentIndex: number,
        dataList: PaginateStoreDataType[]) {
        this.prev = currentIndex > 0 ? dataList[currentIndex - 1] : undefined;
        this.next =
            dataList && currentIndex < dataList.length - 1
                ? dataList[currentIndex + 1]
                : undefined;
    }
}

export const paginationStore = new PaginationStore()