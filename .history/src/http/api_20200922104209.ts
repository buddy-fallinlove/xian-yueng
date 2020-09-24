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


}
