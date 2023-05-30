import { plugin, Messagetype } from 'alemon'

export class 活动兑换图 extends plugin {
  
  constructor() {
    super({
      dsc: '活动兑换图',
      rule: [
        {
          reg: '^/?活动兑换图$',
          fnc: 'Help_activity'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Help_activity(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/Help/活动兑换图.png';
    e.sendImage(imgreply)
    return false
  }
}
