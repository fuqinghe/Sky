import { plugin, Messagetype } from 'alemon'

export class 归属兑换图 extends plugin {
    constructor() {
        super({
            dsc: '归属兑换图',
            rule: [
                {
                    reg: '^/?归属兑换图$',
                    fnc: 'Exchange_chart_Belong_to'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_Belong_to(e: Messagetype): Promise<boolean> {
    const imgreply = 'plugins/Sky/resource/兑换图/季节/归属.png';
      e.sendImage(imgreply)
      return false;
  }
}