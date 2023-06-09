import { plugin, Messagetype, segment } from 'alemon'
import fs from "fs"
export class 绘画分享 extends plugin {
    
    constructor() {
        super({
            dsc: '绘画分享',
            rule: [
                {
                    reg: '^/?绘画分享$',
                    fnc: 'Painting_sharing'
                }, {
                    reg: '/?绘图分享$',
                    fnc: 'Painting_sharing'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Painting_sharing(e: Messagetype) {
    let Sky_image = `${process.cwd()}/plugins/Sky/resource/光遇绘画分享/image/`;
    if (!fs.existsSync(Sky_image)) {
        await e.reply("抱歉未找到光遇绘画分享文件夹！\n请使用指令 [ /Sky更新图库 ] 安装");
        return false;
        }
        let img = Sky_image + fs.readdirSync(Sky_image)[Math.floor(Math.random() * fs.readdirSync(Sky_image).length)];
        e.sendImage(img)
    }
}