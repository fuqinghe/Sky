import { plugin, Messagetype } from 'alemon'

export class 好友树兑换图 extends plugin {
  constructor() {
    super({
      dsc: '好友树兑换图',
      rule: [
        {
          reg: '^/?好友树兑换图$',
          fnc: 'Friend_tree_redemption_chart'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Friend_tree_redemption_chart(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/兑换图/好友树兑换图.png';
    e.sendImage(imgreply)
    return false
  }
}
