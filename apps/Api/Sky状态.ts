import { plugin, Messagetype, segment } from 'alemon'
import axios from 'axios';

export class Sky服务器状态 extends plugin {
  constructor() {
    super({
      dsc: 'Sky服务器状态',
      rule: [
        {
          reg: '^/?Sky状态$',
          fnc: 'Sky_Server_status'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async Sky_Server_status(e: Messagetype) {
    const response = await axios.get('https://live-queue-sky-merge.game.163.com/queue?type=json');
    const res = response.data;
    let num;
    if(res.ret === 0){
      num = `查询结果：未炸服~`;
    } else if(res.ret === 1){
      num = `查询结果：炸服力~\n当前排队人数:「 ${res.pos} 」\n预计所需时间:「 ${res.wait_time} 」`;
    }
    e.reply(num, segment.reply(e.msg.id))
    return false
  }
}
