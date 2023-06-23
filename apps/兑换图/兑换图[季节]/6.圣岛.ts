import { plugin, Messagetype } from 'alemon'

export class 圣岛兑换图 extends plugin {
    constructor() {
        super({
            dsc: '圣岛兑换图',
            rule: [
                {
                    reg: '^/?圣岛兑换图$',
                    fnc: 'Exchange_chart_Holy_island'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_Holy_island(e: Messagetype): Promise<boolean> {
    const imgreply = 'plugins/Sky/resource/兑换图/季节/圣岛.png';
      e.sendImage(imgreply)
      return false;
  }
}