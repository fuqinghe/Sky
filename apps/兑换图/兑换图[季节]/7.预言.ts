import { plugin, Messagetype } from 'alemon'

export class 预言兑换图 extends plugin {
    constructor() {
        super({
            dsc: '预言兑换图',
            rule: [
                {
                    reg: '^/?预言兑换图$',
                    fnc: 'Exchange_chart_prophecy'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_prophecy(e: Messagetype): Promise<boolean> {
    const imgreply = 'plugins/Sky/resource/兑换图/季节/预言.png';
      e.sendImage(imgreply)
      return false;
  }
}