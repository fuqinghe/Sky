import { plugin, Messagetype } from 'alemon'

export class 身高测量规则 extends plugin {
  
  constructor() {
    super({
      dsc: '身高测量规则',
      rule: [
        {
          reg: '^/?身高测量规则$',
          fnc: 'Height_measurement_rule'
        }, {
          reg: '^/?测量规则$',
          fnc: 'Height_measurement_rule'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Height_measurement_rule(e: Messagetype) {
    const imgreply = 'plugins/Sky/resource/other/身高测量规则.png';
    e.sendImage(imgreply)
    return false
  }
}
