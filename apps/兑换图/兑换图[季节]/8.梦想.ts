import { plugin, Messagetype } from 'alemon'

export class 梦想兑换图 extends plugin {
    constructor() {
        super({
            dsc: '梦想兑换图',
            rule: [
                {
                    reg: '^/?梦想兑换图$',
                    fnc: 'Exchange_chart_dream'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_dream(e: Messagetype): Promise<boolean> {
    const imgreply = 'plugins/Sky/resource/兑换图/季节/梦想.png';
      e.sendImage(imgreply)
      return false;
  }
}