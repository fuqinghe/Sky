import { plugin, Messagetype } from 'alemon'

export class 魔法季多久未复刻 extends plugin {
  
  constructor() {
    super({
      rule: [
        {
          reg: '^/?魔法季多久未复刻$',
          fnc: 'season_magic'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async season_magic(e: Messagetype): Promise<boolean>  {
    const centent = '魔法季多久未复刻'
    const picture = 'https://gitee.com/Tloml-Starry/Tlon-picture/raw/master/season/05魔法季.png'
    const 魔法 = [
      { name: '稻草人农夫', date: new Date('2022-08-29')},
      { name: '赞许壁画及', date: new Date('2022-06-21')},
      { name: '情绪草药师', date: new Date('2023-06-19')},
      { name: '瞌睡木匠', date: new Date('2022-12-07')},
      { name: '冷漠术士', date: new Date('2022-03-14')},
      { name: '蟹舞者', date: new Date('2021-04-12')}
    ];
    let msg = '';
    const today = new Date();
  
    for (const role of 魔法) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    const obj = {
      embed: {
        title: '魔法季数据更新时间：2023-04-20',
        prompt: '魔法季多久未复刻',
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
