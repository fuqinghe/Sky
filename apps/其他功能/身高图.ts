import { plugin, Messagetype } from 'alemon'

export class 身高图 extends plugin {
  
  constructor() {
    super({
      dsc: '身高图',
      rule: [
        {
          reg: '^/?身高图$',
          fnc: 'Height_chart'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Height_chart(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/other/身高图.png';
    e.reply('发送/身高透明图\n可查看png格式')
    e.sendImage(imgreply)
    return false
  }
}
