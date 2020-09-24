export interface Result {
    data: data[],
    total: number
}
export interface data {
    url: string,
    desc: string
}
export interface typeItem {
    type: string
    children: ChildrenItem[]
}
export interface ChildrenItem {
    city: string
    desc: string
}
export interface Account {
    data: AccountItem[]
    total: number
}
export interface AccountItem {
    title: string
}
