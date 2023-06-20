import { plugin, Messagetype } from 'alemon'

export class 凌冬季多久未复刻 extends plugin {
  
  constructor() {
    super({
      rule: [
        {
          reg: '^/?凌冬季多久未复刻$',
          fnc: 'season_rhyme'
        }, {
          reg: '/?音韵季多久未复刻',
          fnc: 'season_rhyme'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async season_rhyme(e: Messagetype) {
    const centent = '凌冬季多久未复刻'
    const picture = 'https://gitee.com/Tloml-Starry/Tlon-picture/raw/master/season/04音韵季.png'
    const 音韵 = [
      { name: '致敬钢琴家', date: new Date('2022-03-28')},
      { name: '迎宾侍者', date: new Date('2022-05-23')},
      { name: '献情演员', date: new Date('2022-08-16')},
      { name: '抛球杂耍', date: new Date('2023-06-26')},
      { name: '沉思编导', date: new Date('2022-09-27')},
      { name: '旋转舞者', date: new Date('2022-10-10')}
    ];
    let msg = '';
    const today = new Date();
  
    for (const role of 音韵) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    const obj = {
      embed: {
        title: '音韵季数据更新时间：2023-04-20',
        prompt: '音韵季多久未复刻',
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
