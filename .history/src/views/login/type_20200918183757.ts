// 注册
export interface FormItem {
    tells: string,
    captcha: string,
    nickname: string,
    password: string,
    pass: string,
 }
 export interface Rules {
    tells: RuleItem[],
    captcha: RuleItem[],
    nickname: RuleItem[],
    password: RuleItem[],
    pass: RuleItem[],
 }
 export interface RuleItem {
    required?: boolean
    message?: string
    trigger: string
    min?: number
    max?: number
    validator?: any
 }
 //  登录
 export interface FormItems {
    name: string,
    passwords: string
 }
 export interface Ruless {
    name: RuleItem[],
    passwords: RuleItem[],
 }
 // 赋值类型
 export interface Result {
    user: Face,
 }
 export interface Face {
    username:string
 }
 // 发请求得到的数据
 export interface Users {
    user: Datas,
    token:string
 }
 export interface Datas {
    defaultAvatar:string
    username:string
 }
 
 