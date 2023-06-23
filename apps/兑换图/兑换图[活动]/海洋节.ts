import { plugin, Messagetype } from 'alemon'

export class 海洋兑换图 extends plugin {
    constructor() {
        super({
            dsc: '海洋兑换图',
            rule: [
                {
                    reg: '^/?海洋节兑换图$',
                    fnc: 'Exchange_chart_ocean'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_ocean(e: Messagetype): Promise<boolean> {
    const imgreply = 'plugins/Sky/resource/兑换图/活动/海洋.png';
      e.sendImage(imgreply)
      return false;
  }
}