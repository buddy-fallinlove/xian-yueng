export interface FormItem {
    name:string
    tell:string
    code:string
 }
 export interface Rules {
    name: RuleItem[],
    tell: RuleItem[],
    code: RuleItem[],
 }
 export interface RuleItem {
    required?: boolean
    message?: string
    trigger: string
    min?: number
    max?: number
 }