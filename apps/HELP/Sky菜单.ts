import { plugin, Messagetype } from 'alemon'

export class Sky菜单 extends plugin {
  
  constructor() {
    super({
      dsc: 'Sky菜单',
      rule: [
        {
          reg: '^/?(Sky|sky|光遇)(菜单|帮助)$',
          fnc: 'Help'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Help(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/Help/Sky Help.jpg';
    e.sendImage(imgreply)
    return false
  }
}
