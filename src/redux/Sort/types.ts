export type TSortItem = {
    name: string,
    value: string,
}
export type TInitialState = {
    sortList: TSortItem[],
    activeSort: TSortItem,
    currentPage: number,
}
