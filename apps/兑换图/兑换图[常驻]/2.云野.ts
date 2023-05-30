import { plugin, Messagetype } from 'alemon'

export class 云野兑换图 extends plugin {
    constructor() {
        super({
            dsc: '云野兑换图',
            rule: [
                {
                    reg: '^/?云野兑换图$',
                    fnc: 'Exchange_chart_YY'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_YY(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/兑换图/常驻/云野.png';
      e.sendImage(imgreply)
      return false;
  }
}