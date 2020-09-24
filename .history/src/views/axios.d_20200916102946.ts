import *as axios from 'axios'

declare module 'axios' {
    interface AxiosResponse<T>{
        total:number
        data:T
    }
    
},