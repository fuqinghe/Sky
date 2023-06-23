import { plugin, Messagetype, segment } from 'alemon'
import axios from 'axios'
import fs from "fs"

export class 今日任务 extends plugin {
  
  constructor() {
    super({
      dsc: '今日任务',
      rule: [
        {
          reg: '^/?今日任务$',
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
  async task(e: Messagetype): Promise<boolean>  {
    // 图片链接
    const url = 'https://api.t1qq.com/api/sky/gy/sc/json/mrrw.jpg';
    // 保存路径
    const filePath = 'plugins/Sky/resource/每日/今日任务/mrrw.jpg';
    // 从链接下载图片并发送
    axios({
      method: 'get',
      url: url,
      responseType: 'stream'
    }).then(response => {
      response.data.pipe(fs.createWriteStream(filePath)).on('close', () => {
        setTimeout(() => {
          e.sendImage(filePath);
        }, 200); // 延迟2毫秒发送图片
      });
    });
    // 提示
    e.reply('请稍等...', segment.reply(e.msg.id));
    return false;
  }
}
