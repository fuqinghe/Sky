import { plugin, Messagetype } from 'alemon'

export class 感恩季多久未复刻 extends plugin {
  constructor() {
    super({
      rule: [
        {
          reg: '^/?感恩季多久未复刻$',
          fnc: 'season_Be_grateful'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async season_Be_grateful(e: Messagetype) {
    const centent = '感恩季多久未复刻'
    const picture = 'https://gitee.com/Tloml-Starry/Tlon-picture/raw/master/season/01感恩季.png'
    const 感恩 = [
        { name: '刁蛮浪者', date: new Date('2021-11-08') },
        { name: '挑衅艺伎', date: new Date('2023-05-22') },
        { name: '敬礼护卫', date: new Date('2023-03-27') },
        { name: '舒展大师', date: new Date('2021-11-22') },
        { name: '跳跃舞者', date: new Date('2023-04-24') },
        { name: '拳礼武僧', date: new Date('2023-02-13') }
      ];
      let msg = '';
      const today = new Date();
      for (const role of 感恩) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    const obj = {
      embed: {
        title: '感恩季数据更新时间：2023-05-16',
        prompt: '感恩季多久未复刻',
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
