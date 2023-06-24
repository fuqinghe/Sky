import { plugin, Messagetype } from 'alemon'

export class 周年庆兑换图 extends plugin {
    constructor() {
        super({
            dsc: '周年庆兑换图',
            rule: [
                {
                    reg: '^/?周年庆兑换图$',
                    fnc: 'Exchange_chart_Anniversary_celebration'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_Collective_copy(e: Messagetype): Promise<boolean> {
    const imgreply = 'plugins/Sky/resource/兑换图/活动/周年庆.png';
      e.sendImage(imgreply)
      return false;
  }
}