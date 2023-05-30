import { plugin, Messagetype } from 'alemon'

export class 表演兑换图 extends plugin {
    constructor() {
        super({
            dsc: '表演兑换图',
            rule: [
                {
                    reg: '^/?表演兑换图$',
                    fnc: 'Exchange_chart_Performance'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_Performance(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/兑换图/季节/表演.png';
      e.sendImage(imgreply)
      return false;
  }
}