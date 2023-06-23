import { plugin, Messagetype } from 'alemon'

export class 集结兑换图 extends plugin {
    constructor() {
        super({
            dsc: '集结兑换图',
            rule: [
                {
                    reg: '^/?集结兑换图$',
                    fnc: 'Exchange_chart_assembly'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_assembly(e: Messagetype): Promise<boolean> {
    const imgreply = 'plugins/Sky/resource/兑换图/季节/集结.png';
      e.sendImage(imgreply)
      return false;
  }
}