import { plugin, Messagetype, segment } from 'alemon'
import axios from 'axios'
import fs from "fs"

export class 今日魔法 extends plugin {
  
  constructor() {
    super({
      dsc: '今日魔法',
      rule: [
        {
          reg: '^/?今日魔法$',
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
  async magic(e: Messagetype) {
    const url = 'https://api.t1qq.com/api/sky/gy/sc/mf/magic';
    const filePath = 'plugins/Sky/resource/每日/今日魔法/magic.jpg';
    axios({
      method: 'get',
      url: url,
      responseType: 'stream'
    }).then(response => {
      response.data.pipe(fs.createWriteStream(filePath)).on('close', () => {
        setTimeout(() => {
          e.sendImage(filePath);
        }, 200); // 延迟2毫秒执行
      });
    });
    e.reply('请稍等...', segment.reply(e.msg.id));
    return false;
  }
}
