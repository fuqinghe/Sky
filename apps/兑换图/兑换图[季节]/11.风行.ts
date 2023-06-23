import { plugin, Messagetype } from 'alemon'

export class 风行兑换图 extends plugin {
    constructor() {
        super({
            dsc: '风行兑换图',
            rule: [
                {
                    reg: '^/?风行兑换图$',
                    fnc: 'Exchange_chart_Popular'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_Popular(e: Messagetype): Promise<boolean> {
    const imgreply = 'plugins/Sky/resource/兑换图/季节/风行.png';
      e.sendImage(imgreply)
      return false;
  }
}