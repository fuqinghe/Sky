import { plugin, Messagetype } from 'alemon'

export class 小王子兑换图 extends plugin {
    constructor() {
        super({
            dsc: '小王子兑换图',
            rule: [
                {
                    reg: '^/?小王子兑换图$',
                    fnc: 'Exchange_chart_Little_prince'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_Little_prince(e: Messagetype): Promise<boolean> {
    const imgreply = 'plugins/Sky/resource/兑换图/季节/小王子.png';
      e.sendImage(imgreply)
      return false;
  }
}