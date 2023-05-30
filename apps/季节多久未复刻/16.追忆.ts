import { plugin, Messagetype } from 'alemon'

export class 追忆季多久未复刻 extends plugin {
  
  constructor() {
    super({
      rule: [
        {
          reg: '^/?追忆季多久未复刻$',
          fnc: 'season_Recall'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async season_Recall(e: Messagetype) {
    const centent = '追忆季多久未复刻'
    const picture = 'https://gitee.com/Tloml-Starry/Sky/raw/master/resource/picture.jpg'
    const 追忆 = [
      { name: '嗫足沏茶师', date: new Date},
      { name: '乞求孩童', date: new Date},
      { name: '丧子老兵', date: new Date},
      { name: '负伤战士', date: new Date}
    ];
    let msg = '';
    const today = new Date();
  
    for (const role of 追忆) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    const obj = {
      embed: {
        title: '追忆季暂未复刻',
        prompt: '追忆季多久未复刻',
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
