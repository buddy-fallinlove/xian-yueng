export interface Result {
    data: data[],
    total: number
}
export interface data {
    url: string,
    desc: string
}

export interface Res {
    data: typeItem[]
    total: number
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
export interface Centers {
    data:Dataitem[]
    total:number
 }
 export interface Dataitem {
    title:string
    summary:string
    images:string[]
    city:Citys
    account:Account
    watch:number
 }
 export interface Citys {
    name:string
 }
 export interface Account {
    defaultAvatar:string
    nickname:string
 }
 
