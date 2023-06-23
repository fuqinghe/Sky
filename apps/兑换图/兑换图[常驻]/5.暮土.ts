import { plugin, Messagetype } from 'alemon'

export class 暮土兑换图 extends plugin {
    constructor() {
        super({
            dsc: '暮土兑换图',
            rule: [
                {
                    reg: '^/?暮土兑换图$',
                    fnc: 'Exchange_chart_MT'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_MT(e: Messagetype): Promise<boolean> {
    const imgreply = 'plugins/Sky/resource/兑换图/常驻/暮土.png';
      e.sendImage(imgreply)
      return false;
  }
}