import { plugin, Messagetype } from 'alemon'

export class 欧若拉季多久未复刻 extends plugin {
  
  constructor() {
    super({
      rule: [
        {
          reg: '^/?欧若拉季多久未复刻$',
          fnc: 'season_Aurora'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async season_Aurora(e: Messagetype) {
    const centent = '欧若拉季多久未复刻'
    const picture = 'https://gitee.com/Tloml-Starry/Sky/raw/master/resource/picture.jpg'
    const 欧若拉 = [
      { name: '奔离旅行者', date: new Date},
      { name: '细心矿工', date: new Date},
      { name: '爱之战士', date: new Date},
      { name: '希望之种', date: new Date}
    ];
    let msg = '';
    const today = new Date();
  
    for (const role of 欧若拉) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    const obj = {
      embed: {
        title: '欧若拉季暂未复刻',
        prompt: '欧若拉季多久未复刻',
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
