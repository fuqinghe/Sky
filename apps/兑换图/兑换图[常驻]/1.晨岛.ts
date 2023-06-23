import { plugin, Messagetype } from 'alemon'

export class 晨岛兑换图 extends plugin {
    constructor() {
        super({
            dsc: '晨岛兑换图',
            rule: [
                {
                    reg: '^/?晨岛兑换图$',
                    fnc: 'Exchange_chart_CD'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_CD(e: Messagetype): Promise<boolean> {
    const imgreply = 'plugins/Sky/resource/兑换图/常驻/晨岛.png';
      e.sendImage(imgreply)
      return false;
  }
}