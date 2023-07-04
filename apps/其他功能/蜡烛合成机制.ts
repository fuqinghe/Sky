import { plugin, Messagetype } from 'alemon'

export class 蜡烛合成机制 extends plugin {
  
  constructor() {
    super({
      dsc: '蜡烛合成机制',
      rule: [
        {
          reg: '^/?蜡烛合成机制$',
          fnc: 'Candle_synthesis_mechanism'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Candle_synthesis_mechanism(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/other/蜡烛合成机制.png';
    e.sendImage(imgreply)
    return false
  }
}
