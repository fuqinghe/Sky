import { plugin, Messagetype } from 'alemon'

export class 霞谷兑换图 extends plugin {
    constructor() {
        super({
            dsc: '霞谷兑换图',
            rule: [
                {
                    reg: '^/?霞谷兑换图$',
                    fnc: 'Exchange_chart_XG'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_XG(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/兑换图/常驻/霞谷.png';
      e.sendImage(imgreply)
      return false;
  }
}