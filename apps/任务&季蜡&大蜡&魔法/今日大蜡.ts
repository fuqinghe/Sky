import { plugin, Messagetype, segment } from 'alemon'
import axios from 'axios'
import fs from "fs"

export class 大蜡位置 extends plugin {
  
  constructor() {
    super({
      dsc: '大蜡位置',
      rule: [
        {
          reg: '^/?大蜡位置$',
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
  async Large_candle(e: Messagetype) {
    const url = 'https://api.t1qq.com/api/sky/gy/sc/dlz/scdlwz';
    const filePath = 'plugins/Sky/resource/每日/今日大蜡/scdlwz.jpg';
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
