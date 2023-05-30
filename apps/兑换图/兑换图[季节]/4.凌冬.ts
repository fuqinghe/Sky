import { plugin, Messagetype } from 'alemon'

export class 凌冬兑换图 extends plugin {
    constructor() {
        super({
            dsc: '凌冬兑换图',
            rule: [
                {
                    reg: '^/?凌冬兑换图$',
                    fnc: 'Exchange_chart_rhyme'
                }, {
                    reg: '/?音韵兑换图$',
                    fnc: 'Exchange_chart_rhyme'
                }
            ]
        })
    }
  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Exchange_chart_rhyme(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/兑换图/季节/凌冬.png';
      e.sendImage(imgreply)
      return false;
  }
}