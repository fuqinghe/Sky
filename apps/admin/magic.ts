import { plugin, PluginType, Messgetype } from '../../api'

export class magic extends plugin {
  [parameter: string]: PluginType
  constructor() {
    super({
      dsc: '今日大蜡烛',
      rule: [
        {
          reg: '^/今日魔法$',
          fnc: 'magic'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async magic(e: Messgetype) {
    e.reply('请稍等...')
    e.reply(
      segment.at(e.msg.author.id),
      {image: 'https://api.t1qq.com/api/sky/gy/sc/mf/magic'}
      )
    return false
  }
}
