import { plugin, Messagetype } from 'alemon'

export class 梦想季多久未复刻 extends plugin {
  
  constructor() {
    super({
      rule: [
        {
          reg: '^/?梦想季多久未复刻$',
          fnc: 'season_dream'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async season_dream(e: Messagetype) {
    const centent = '梦想季多久未复刻'
    const picture = 'https://gitee.com/Tloml-Starry/Tlon-picture/raw/master/season/08梦想季.png'
    const 梦想 = [
      { name: '偷窥邮差', date: new Date('2022-02-14')},
      { name: '熊抱雪人', date: new Date('2022-02-28')},
      { name: '回旋大师', date: new Date('2022-05-04')},
      { name: '跳舞艺人', date: new Date}
    ];
    let msg = '梦想季数据更新时间:2023-04-20\n';
    const today = new Date();
  
    for (const role of 梦想) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    const obj = {
      embed: {
        title: '梦想季数据更新时间：2023-04-20',
        prompt: '梦想季多久未复刻',
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
