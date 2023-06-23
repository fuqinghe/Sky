import { plugin, Messagetype, segment } from 'alemon'
import axios from 'axios'
import fs from "fs"

export class 季蜡位置 extends plugin {
  
  constructor() {
    super({
      dsc: '季蜡位置',
      rule: [
        {
          reg: '^/?季蜡位置$',
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
  async Seasonal_wax(e: Messagetype): Promise<boolean>  {
    const url = 'https://api.t1qq.com/api/sky/gy/sc/json/scjl.jpg';
    const filePath = 'plugins/Sky/resource/每日/今日季蜡/scjl.jpg';
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
