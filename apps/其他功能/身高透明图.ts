import { plugin, Messagetype } from 'alemon'

export class 身高透明图 extends plugin {
  
  constructor() {
    super({
      dsc: '身高透明图',
      rule: [
        {
          reg: '^/?身高透明图$',
          fnc: 'Height_transparency_chart'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Height_transparency_chart(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/other/身高透明图.png';
    e.sendImage(imgreply)
    return false
  }
}
