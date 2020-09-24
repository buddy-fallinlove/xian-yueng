import service from './index';

export default {
    // 注册
    postregister({ username, nickname, captcha, password }: { username: string; nickname: string; captcha: string; password: string }) {
        return service.post(`/accounts/register`, {
            username,
            nickname,
            captcha,
            password
        })
    },
    // 验证码
    postcaptchas({ tel }: { tel: string }) {
        return service.post(`/captchas`, {
            tel
        })
    },
    // 登录
    postlogin({ username, password }: { username: string; password: string }) {
        return service.post(`/accounts/login`, {
            username,
            password
        })
    },
    // 首页轮播
    getBanners() {
        return service.get(`/scenics/banners`);
    },

    getpost() {
        return service.get(`/posts/cities`);
    },

    getposts() {
        return service.get(`/posts`);
    },

    getposte({ city }: { city: string }) {
        return service.get(`/posts?city=${city}`);
    },

    getxiangqing({ id }: { id: string | number }) {
        return service.get(`/posts?id=${id}`)
    },

    //    获取城市简称
    getCity({ name }: { name: string }) {
        return service.get(`/airs/city?name=${name}`)
    },  
    // 机票列表
    airs({ departCity, departCode, destCity, destCode, departDate }: { departCity: string, departCode: string,destCity: string, destCode: string, departDate: string }) {
        return service.get(`/airs?departCity=${departCity}&departCode=${departCode}&destCity=${destCity}&destCode=${destCode}&departDate=${departDate}`)
    },
    // 推荐机票
    sale() {
        return service.get(`/airs/sale`)
    },
  // 选择机票
  // /:id 机票id
  // seat_xid 座位id
  chooseTicket({ id, seatxid }: { id: number | string, seatxid: string }) {
    return service.get(`/airs/${id}?seat_xid=${seatxid}`)
  },
    //7.获取城市
    getcities({ name }: { name: string }) {
        return service.get(`/cities?name=${name}`)
    },
    //8.获取酒店
    // gethotel({ city, id, price_in, scenic, name_contains, hotellevel, hoteltype, hotelbrand, hotelasset, enterTime, person, _sort, _limit, _start }: {
    //     city: number; id?: number | undefined; scenic?: number | undefined; name_contains?: string | undefined; price_in?: number | undefined; hotellevel?: number | undefined; hoteltype?: number | undefined; hotelbrand?: number | undefined; hotelasset?: number | undefined; enterTime?: any; person?: number | undefined; _sort?: string | undefined; _limit?: number | undefined; _start?: number | undefined
    // }) {
    //     return service.get(`/hotels?city=${city}&id=${id}&price_in=${price_in}&scenic=${scenic}&name_contains=${name_contains}&hotellevel=${hotellevel}&hoteltype=${hoteltype}&hotelbrand=${hotelbrand}&hotelasset=${hotelasset}&enterTime=${enterTime}&person=${person}&_sort=${_sort}&_limit=${_limit}&_start=${_start}`)
    // },
    //9.获取酒店
    getHotel({ city }: { city: number }) {
        return service.get(`/hotels?city=${city}`)
    },
    //10.获取酒店详情
    getoptions() {
        return service.get('hotels/options')
    },




}
