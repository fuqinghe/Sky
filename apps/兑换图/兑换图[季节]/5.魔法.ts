import { plugin, Messagetype } from 'alemon'

export class 魔法兑换图 extends plugin {
    constructor() {
        super({
            dsc: '魔法兑换图',
            rule: [
                {
                    reg: '^/?魔法兑换图$',
                    fnc: 'Exchange_chart_magic'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_magic(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/兑换图/季节/魔法.png';
      e.sendImage(imgreply)
      return false;
  }
}