import { plugin, Messagetype, segment } from 'alemon'
import fs from "fs"
export class 复刻兑换图 extends plugin {
    constructor() {
        super({
            dsc: '复刻兑换图',
            rule: [
                {
                    reg: '^/?复刻兑换图$',
                    fnc: 'Copy_the_exchange_chart'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Copy_the_exchange_chart(e: Messagetype): Promise<boolean> {
    const imgreply = 'plugins/Sky/resource/复刻图/image/Reprint.png';
    if (!fs.existsSync(imgreply)) {
        await e.reply("抱歉未找到复刻图文件夹！\n请使用指令 [ /更新复刻 ] 安装");
        return false;
      }
      e.reply(segment.at(e.msg.author.id))
      e.sendImage(imgreply)
  }
}