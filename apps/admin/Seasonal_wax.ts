import { plugin, PluginType, Messgetype } from '../../api'

export class Seasonal_wax extends plugin {
  [parameter: string]: PluginType
  constructor() {
    super({
      dsc: '今日季蜡',
      rule: [
        {
          reg: '^/季蜡位置$',
          fnc: 'Seasonal_wax'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Seasonal_wax(e: Messgetype) {
    e.reply('请稍等...')
    e.reply(
      segment.at(e.msg.author.id),
      {image: 'https://api.t1qq.com/api/sky/gy/sc/scjlwz'}
      )
    return false
  }
}
