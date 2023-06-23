import { plugin, Messagetype } from 'alemon'

export class 复刻记录23 extends plugin {
  
  constructor() {
    super({
      dsc: '复刻记录23',
      rule: [
        {
          reg: '^/?23年复刻记录$',
          fnc: 'FK23'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async FK23(e: Messagetype): Promise<boolean>  {
    const imgreply = 'plugins/Sky/resource/复刻记录/23.png';
    e.sendImage(imgreply)
    return false
  }
}
