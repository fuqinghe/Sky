import { plugin, Messagetype, segment } from 'alemon'

export class 活动剩余时间 extends plugin {
  
  constructor() {
    super({
      dsc: '活动剩余时间',
      rule: [
        {
          reg: '^/?活动剩余时间$',
          fnc: 'Active_remaining_time'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Active_remaining_time(e: Messagetype) {
    let 活动指定时间 = new Date('2023-6-09 23:59:59').getTime();
    let msg = '';
  
    function countdown() {
      let 现在时间 = Date.now();
      let 活动剩余时间_毫秒 = 活动指定时间 - 现在时间;
  
      if (活动剩余时间_毫秒 < 0) {
        msg = '海洋节已结束！';
        return;
      }
  
      let 活动剩余时间_天 = Math.floor(活动剩余时间_毫秒 / (24 * 60 * 60 * 1000));
      let 活动剩余时间_小时 = Math.floor((活动剩余时间_毫秒 % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      let 活动剩余时间_分钟 = Math.floor((活动剩余时间_毫秒 % (60 * 60 * 1000)) / (60 * 1000));
      let 活动剩余时间_秒 = Math.floor((活动剩余时间_毫秒 % (60 * 1000)) / 1000);
  
  
      msg = `距离海洋节结束还剩\n${活动剩余时间_天} 天 ${活动剩余时间_小时} 小时 ${活动剩余时间_分钟} 分钟 ${活动剩余时间_秒} 秒\n截止至2023-6-09 23:59:59`;
      setTimeout(countdown, 1000);
    }
    countdown();
    e.reply(msg, segment.reply(e.msg.id));
    return false
  }
}
