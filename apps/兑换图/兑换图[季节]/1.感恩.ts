import { plugin, Messagetype } from 'alemon'

export class 感恩兑换图 extends plugin {
    constructor() {
        super({
            dsc: '感恩兑换图',
            rule: [
                {
                    reg: '^/?感恩兑换图$',
                    fnc: 'Exchange_chart_Be_grateful'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_Be_grateful(e: Messagetype): Promise<boolean> {
    const imgreply = 'plugins/Sky/resource/兑换图/季节/感恩.png';
      e.sendImage(imgreply)
      return false;
  }
}