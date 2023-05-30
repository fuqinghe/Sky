import { plugin, Messagetype } from 'alemon'

export class 禁阁兑换图 extends plugin {
    constructor() {
        super({
            dsc: '禁阁兑换图',
            rule: [
                {
                    reg: '^/?禁阁兑换图$',
                    fnc: 'Exchange_chart_JG'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_JG(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/兑换图/常驻/禁阁.png';
      e.sendImage(imgreply)
      return false;
  }
}