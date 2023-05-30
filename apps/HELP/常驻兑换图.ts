import { plugin, Messagetype } from 'alemon'

export class 常驻兑换图 extends plugin {
  
  constructor() {
    super({
      dsc: '常驻兑换图',
      rule: [
        {
          reg: '^/?常驻兑换图$',
          fnc: 'Help_resident'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Help_resident(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/Help/常驻兑换图.png';
    e.sendImage(imgreply)
    return false
  }
}
