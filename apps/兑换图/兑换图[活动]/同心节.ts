import { plugin, Messagetype } from 'alemon'

export class 同心兑换图 extends plugin {
    constructor() {
        super({
            dsc: '同心兑换图',
            rule: [
                {
                    reg: '^/?同心节兑换图$',
                    fnc: 'Exchange_chart_concentric'
                }, {
                    reg: '^/?情人节兑换图$',
                    fnc: 'Exchange_chart_concentric'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_concentric(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/兑换图/活动/同心.png';
      e.sendImage(imgreply)
      return false;
  }
}