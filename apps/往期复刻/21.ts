import { plugin, Messagetype } from 'alemon'

export class 复刻记录21 extends plugin {
  
  constructor() {
    super({
      dsc: '复刻记录21',
      rule: [
        {
          reg: '^/?21年复刻记录$',
          fnc: 'FK21'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async FK21(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/复刻记录/21.png';
    e.sendImage(imgreply)
    return false
  }
}
