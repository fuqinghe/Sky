import { plugin, Messagetype } from 'alemon'

export class 复刻兑换图 extends plugin {
    constructor() {
        super({
            dsc: '复刻兑换图',
            rule: [
                {
                    reg: '^/?复刻兑换图$',
                    fnc: '复刻兑换图'
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
    const imgreply = 'https://gitee.com/Tloml-Starry/Tlon-Sky-reprint/raw/master/image/Reprint.png';
    e.sendImage(imgreply)
    return true
  }
}