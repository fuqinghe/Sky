import { plugin, Messagetype } from 'alemon'

export class 季节兑换图 extends plugin {
  
  constructor() {
    super({
      dsc: '季节兑换图',
      rule: [
        {
          reg: '^/?季节兑换图$',
          fnc: 'Help_season'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Help_season(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/Help/季节兑换图.png';
    e.sendImage(imgreply)
    return false
  }
}
