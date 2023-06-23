import { plugin, Messagetype } from 'alemon'

export class 潜海季多久未复刻 extends plugin {
  
  constructor() {
    super({
      rule: [
        {
          reg: '^/?潜海季多久未复刻$',
          fnc: 'season_Submerget_sea'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async season_Submerget_sea(e: Messagetype): Promise<boolean>  {
    const centent = '潜海季多久未复刻'
    const picture = 'https://gitee.com/Tloml-Starry/Tlon-picture/raw/master/season/12潜海季.png'
    const 潜海 = [
      { name: '退休将领', date: new Date},
      { name: '嬉笑炮手', date: new Date},
      { name: '焦虑渔夫', date: new Date},
      { name: '笨拙水手', date: new Date}
    ];
    let msg = '';
    const today = new Date();
  
    for (const role of 潜海) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    const obj = {
      embed: {
        title: '潜海季暂未复刻',
        prompt: '潜海季多久未复刻',
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
