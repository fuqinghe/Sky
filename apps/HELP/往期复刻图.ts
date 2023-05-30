import { plugin, Messagetype } from 'alemon'

export class 往期复刻图 extends plugin {
  
  constructor() {
    super({
      dsc: '往期复刻图',
      rule: [
        {
          reg: '^/?往期复刻图$',
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
    const imgreply = 'plugins/Sky/resource/Help/往期复刻图.png';
    e.sendImage(imgreply)
    return false
  }
}
