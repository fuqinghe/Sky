import { plugin, Messagetype } from 'alemon'

export class 雨林兑换图 extends plugin {
    constructor() {
        super({
            dsc: '雨林兑换图',
            rule: [
                {
                    reg: '^/?雨林兑换图$',
                    fnc: 'Exchange_chart_YL'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_YL(e: Messagetype): Promise<boolean> {
    const imgreply = 'plugins/Sky/resource/兑换图/常驻/雨林.png';
      e.sendImage(imgreply)
      return false;
  }
}