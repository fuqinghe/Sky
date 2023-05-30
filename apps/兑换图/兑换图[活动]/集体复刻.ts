import { plugin, Messagetype } from 'alemon'

export class 集体复刻兑换图 extends plugin {
    constructor() {
        super({
            dsc: '集体复刻兑换图',
            rule: [
                {
                    reg: '^/?集体复刻兑换图$',
                    fnc: 'Exchange_chart_Collective_copy'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_Collective_copy(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/兑换图/活动/集体复刻.png';
      e.sendImage(imgreply)
      return false;
  }
}