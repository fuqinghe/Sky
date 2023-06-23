import { plugin, Messagetype } from 'alemon'

export class 归属季多久未复刻 extends plugin {
  
  constructor() {
    super({
      rule: [
        {
          reg: '^/?归属季多久未复刻$',
          fnc: 'season_Belong_to'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async season_Belong_to(e: Messagetype): Promise<boolean>  {
    const centent = '归属季多久未复刻'
    const picture = 'https://gitee.com/Tloml-Starry/Tlon-picture/raw/master/season/03归属季.png'
    const 归属 = [
      { name: '蓬头青年', date: new Date('2023-01-25')},
      { name: '不舍家长', date: new Date('2023-01-17')},
      { name: '踏舞孩童', date: new Date('2022-12-28')},
      { name: '彩纸表亲', date: new Date('2022-10-05')},
      { name: '火花家长', date: new Date('2022-01-31')},
      { name: '智慧长者', date: new Date('2021-12-29')}
    ];
    let msg = '';
    const today = new Date();
  
    for (const role of 归属) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    const obj = {
      embed: {
        title: '归属季数据更新时间：2023-04-20',
        prompt: '归属季多久未复刻',
        thumbnail: {
          url: picture
        },
        fields: [
          {
            name: '' + msg
          },
        ]
      }
    }
    e.reply(centent, obj)
    return false
  }
}
