import { plugin, Messagetype } from 'alemon'

export class 破晓季多久未复刻 extends plugin {
  
  constructor() {
    super({
      rule: [
        {
          reg: '^/?破晓季多久未复刻$',
          fnc: 'season_Dawn'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async season_Dawn(e: Messagetype) {
    const centent = '破晓季多久未复刻'
    const picture = 'https://gitee.com/Tloml-Starry/Tlon-picture/raw/master/season/14破晓季.png'
    const 破晓 = [
      { name: '远古光明记忆·上', date: new Date},
      { name: '远古光明记忆·下', date: new Date},
      { name: '远古黑暗记忆·上', date: new Date},
      { name: '远古黑暗记忆·下', date: new Date}
    ];
    let msg = '';
    const today = new Date();
  
    for (const role of 破晓) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    const obj = {
      embed: {
        title: '破晓季暂未复刻',
        prompt: '破晓季多久未复刻',
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
