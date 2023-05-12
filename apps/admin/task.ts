import { plugin, PluginType, Messgetype } from '../../api'

export class task extends plugin {
  [parameter: string]: PluginType
  constructor() {
    super({
      dsc: '今日任务',
      rule: [
        {
          reg: '^/今日任务$',
          fnc: 'task'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async getAlmanac(e: Messgetype) {
    e.reply(
      segment.at(e.msg.author.id),
      {
        image: 'https://api.t1qq.com/api/sky/gy/sc/scsky.php'
      }
      )
    return false
  }
}
