import { plugin, Messagetype } from 'alemon'

export class 身高进阶知识 extends plugin {
  
  constructor() {
    super({
      dsc: '身高进阶知识',
      rule: [
        {
          reg: '^/?身高进阶知识$',
          fnc: 'Advanced_knowledge_of_height'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Advanced_knowledge_of_height(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/other/身高进阶知识.png';
    e.sendImage(imgreply)
    return false
  }
}
