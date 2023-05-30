import { plugin, Messagetype } from 'alemon'

export class 追光兑换图 extends plugin {
    constructor() {
        super({
            dsc: '追光兑换图',
            rule: [
                {
                    reg: '^/?追光兑换图$',
                    fnc: 'Exchange_chart_Light_tracing'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_Light_tracing(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/兑换图/季节/追光.png';
      e.sendImage(imgreply)
      return false;
  }
}