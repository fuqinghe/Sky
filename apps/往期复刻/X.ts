import { plugin, Messagetype } from 'alemon'

export class X extends plugin {
  
  constructor() {
    super({
      dsc: 'X',
      rule: [
        {
          reg: '^/?X年复刻记录$',
          fnc: 'X'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async X(e: Messagetype) {
    const msg = '20年复刻记录\n21年复刻记录\n22年复刻记录\n23年复刻记录';
    e.reply(msg)
    return false
  }
}
