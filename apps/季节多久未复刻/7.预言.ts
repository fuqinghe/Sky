import { plugin, Messagetype } from 'alemon'

export class 预言季多久未复刻 extends plugin {
  
  constructor() {
    super({
      rule: [
        {
          reg: '^/?预言季多久未复刻$',
          fnc: 'season_prophecy'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async season_prophecy(e: Messagetype) {
    const centent = '预言季多久未复刻'
    const picture = 'https://gitee.com/Tloml-Starry/Tlon-picture/raw/master/season/07预言季.png'
    const 预言 = [
      { name: '水先知', date: new Date('2022-12-19')},
      { name: '土先知', date: new Date('2021-12-06')},
      { name: '风先知', date: new Date('2021-09-13')},
      { name: '火先知', date: new Date('2023-06-05')}
    ];
    let msg = '';
    const today = new Date();
  
    for (const role of 预言) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    const obj = {
      embed: {
        title: '预言季数据更新时间：2023-04-20',
        prompt: '预言季多久未复刻',
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
