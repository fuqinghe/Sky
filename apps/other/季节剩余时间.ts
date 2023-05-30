import { plugin, Messagetype, segment } from 'alemon'

export class 季节剩余时间 extends plugin {
  
  constructor() {
    super({
      dsc: '季节剩余时间',
      rule: [
        {
          reg: '^/?季节剩余时间$',
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
    let 季节指定时间 = new Date('2023-7-03 23:59:59').getTime();
    let msg = '';
  
    function countdown() {
      let 现在时间 = Date.now();
      let 季节剩余时间_毫秒 = 季节指定时间 - 现在时间;
  
      if (季节剩余时间_毫秒 <= 0) {
        msg = '夜行季已结束！请等待下个季节到来.';
        return;
      }
  
      let 季节剩余时间_天 = Math.floor(季节剩余时间_毫秒 / (24 * 60 * 60 * 1000));
      let 季节剩余时间_小时 = Math.floor((季节剩余时间_毫秒 % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      let 季节剩余时间_分钟 = Math.floor((季节剩余时间_毫秒 % (60 * 60 * 1000)) / (60 * 1000));
      let 季节剩余时间_秒 = Math.floor((季节剩余时间_毫秒 % (60 * 1000)) / 1000);
  
      msg = `距离夜行季结束还剩\n${季节剩余时间_天} 天 ${季节剩余时间_小时} 小时 ${季节剩余时间_分钟} 分钟 ${季节剩余时间_秒} 秒\n截止至2023-7-03 23:59:59`;
      setTimeout(countdown, 1000);
    }
    countdown();
    e.reply(msg, segment.reply(e.msg.id));
    return false
  }
}
