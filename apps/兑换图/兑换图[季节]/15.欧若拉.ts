import { plugin, Messagetype } from 'alemon'

export class 欧若拉兑换图 extends plugin {
    constructor() {
        super({
            dsc: '欧若拉兑换图',
            rule: [
                {
                    reg: '^/?欧若拉兑换图$',
                    fnc: 'Exchange_chart_Aurora'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_Aurora(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/兑换图/季节/欧若拉.png';
      e.sendImage(imgreply)
      return false;
  }
}