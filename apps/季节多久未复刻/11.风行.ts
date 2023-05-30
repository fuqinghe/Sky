import { plugin, Messagetype } from 'alemon'

export class 风行季多久未复刻 extends plugin {
  
  constructor() {
    super({
      rule: [
        {
          reg: '^/?风行季多久未复刻$',
          fnc: 'season_Popular'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async season_Popular(e: Messagetype) {
    const centent = '风行季多久未复刻'
    const picture = 'https://gitee.com/Tloml-Starry/Tlon-picture/raw/master/season/11风行季.png'
    const 风行 = [
      { name: '光之低语者', date: new Date},
      { name: '编钟修补匠', date: new Date},
      { name: '天才建筑者', date: new Date},
      { name: '活跃导航员', date: new Date}
    ];
    let msg = '';
    const today = new Date();
  
    for (const role of 风行) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    const obj = {
      embed: {
        title: '风行季暂未复刻',
        prompt: '风行季多久未复刻',
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
