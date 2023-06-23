import { plugin, Messagetype } from 'alemon'

export class 花憩兑换图 extends plugin {
    constructor() {
        super({
            dsc: '花憩兑换图',
            rule: [
                {
                    reg: '^/?花憩节兑换图$',
                    fnc: 'Exchange_chart_Flower_rest'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_Flower_rest(e: Messagetype): Promise<boolean> {
    const imgreply = 'plugins/Sky/resource/兑换图/活动/花憩.png';
      e.sendImage(imgreply)
      return false;
  }
}