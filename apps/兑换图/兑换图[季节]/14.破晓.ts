import { plugin, Messagetype } from 'alemon'

export class 破晓兑换图 extends plugin {
    constructor() {
        super({
            dsc: '破晓兑换图',
            rule: [
                {
                    reg: '^/?破晓兑换图$',
                    fnc: 'Exchange_chart_Dawn'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_Dawn(e: Messagetype): Promise<boolean> {
    const imgreply = 'plugins/Sky/resource/兑换图/季节/破晓.png';
      e.sendImage(imgreply)
      return false;
  }
}