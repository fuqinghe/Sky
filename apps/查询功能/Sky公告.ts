import { plugin, Messagetype } from 'alemon'
import axios from 'axios';

export class Sky公告 extends plugin {
  constructor() {
    super({
      dsc: 'Sky公告',
      rule: [
        {
          reg: '^/?Sky公告$',
          fnc: 'announcement'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async announcement(e: Messagetype) {
    const response = await axios.get('https://ma75.update.netease.com/game_notice/announcement_live.json');
    const res = response.data;
    e.reply(`${res.Title}\n${res.OtherChannelMessage}`)
    return false
  }
}
