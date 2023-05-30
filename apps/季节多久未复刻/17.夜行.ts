import { plugin, Messagetype } from 'alemon'

export class 夜行季多久未复刻 extends plugin {
  
  constructor() {
    super({
      rule: [
        {
          reg: '^/?夜行季多久未复刻$',
          fnc: 'season_Nocturnal_walking'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async season_Nocturnal_walking(e: Messagetype) {
    const centent = '夜行季多久未复刻'
    const picture = 'https://gitee.com/Tloml-Starry/Sky/raw/master/resource/picture.jpg'
    const 夜行 = [
      { name: '古怪边缘人', date: new Date},
      { name: '翻滚捣蛋鬼', date: new Date},
      { name: '郁郁寡欢者', date: new Date},
      { name: '活跃优等生', date: new Date}
    ];
    let msg = '';
    const today = new Date();
  
    for (const role of 夜行) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    const obj = {
      embed: {
        title: '夜行季暂未复刻',
        prompt: '夜行季多久未复刻',
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
