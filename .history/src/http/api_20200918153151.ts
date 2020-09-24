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

}
