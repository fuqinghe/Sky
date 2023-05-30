import { plugin, Messagetype } from 'alemon'

export class 复刻记录20 extends plugin {
  
  constructor() {
    super({
      dsc: '复刻记录',
      rule: [
        {
          reg: '^/?20年复刻记录$',
          fnc: 'FK20'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async FK20(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/复刻记录/20.png';
    e.sendImage(imgreply)
    return false
  }
}
