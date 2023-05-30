import { plugin, Messagetype } from 'alemon'

export class 潜海兑换图 extends plugin {
    constructor() {
        super({
            dsc: '潜海兑换图',
            rule: [
                {
                    reg: '^/?潜海兑换图$',
                    fnc: 'Exchange_chart_Submerget_sea'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_Submerget_sea(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/兑换图/季节/潜海.png';
      e.sendImage(imgreply)
      return false;
  }
}