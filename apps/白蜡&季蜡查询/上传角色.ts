import { plugin, Messagetype, createQrcode } from 'alemon'

export class 上传角色 extends plugin {
    constructor() {
        super({
            rule: [
                {
                    reg: '^/?上传角色$',
                    fnc: 'sky_cxid'
                }
            ]
        });
    }
    async sky_cxid(e: Messagetype){
        const img = await createQrcode('https://api.t1qq.com/api/sky/bd.html')
        if (img) e.postImage(img, '请扫码绑定Token获取光遇id')
    }
}