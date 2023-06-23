import { plugin, Messagetype } from 'alemon'

export class 复刻记录22 extends plugin {
  
  constructor() {
    super({
      dsc: '复刻记录22',
      rule: [
        {
          reg: '^/?22年复刻记录$',
          fnc: 'FK22'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async FK22(e: Messagetype): Promise<boolean>  {
    const imgreply = 'plugins/Sky/resource/复刻记录/22.png';
    e.sendImage(imgreply)
    return false
  }
}
