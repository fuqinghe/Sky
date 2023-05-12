import { plugin, PluginType, Messgetype } from '../../api'

export class Large_candle extends plugin {
  [parameter: string]: PluginType
  constructor() {
    super({
      dsc: '今日大蜡烛',
      rule: [
        {
          reg: '^/大蜡位置$',
          fnc: 'Large_candle'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Large_candle(e: Messgetype) {
    e.reply('请稍等...')
    e.reply(
      segment.at(e.msg.author.id),
      {image: 'https://api.t1qq.com/api/sky/gy/sc/dlz/scdlwz'}
      )
    return false
  }
}
