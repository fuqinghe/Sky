import { plugin, Messagetype } from 'alemon'

export class 夜行兑换图 extends plugin {
    constructor() {
        super({
            dsc: '夜行兑换图',
            rule: [
                {
                    reg: '^/?夜行兑换图$',
                    fnc: 'Exchange_chart_Nocturnal_walking'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_Nocturnal_walking(e: Messagetype): Promise<boolean> {
    const imgreply = 'plugins/Sky/resource/兑换图/季节/夜行.png';
      e.sendImage(imgreply)
      return false;
  }
}