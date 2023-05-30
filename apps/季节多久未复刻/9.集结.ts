import { plugin, Messagetype } from 'alemon'

export class 集结季多久未复刻 extends plugin {
  
  constructor() {
    super({
      rule: [
        {
          reg: '^/?集结季多久未复刻$',
          fnc: 'season_assembly'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async season_assembly(e: Messagetype) {
    const centent = '集结季多久未复刻'
    const picture = 'https://gitee.com/Tloml-Starry/Tlon-picture/raw/master/season/09集结季.png'
    const 集结 = [
      { name: '白日梦森林人', date: new Date('2022-11-22')},
      { name: '茫然植物学生', date: new Date},
      { name: '正步冒险家', date: new Date('2022-07-19')},
      { name: '傻笑童子军', date: new Date},
      { name: '管事小队长', date: new Date('2023-05-03')},
      { name: '胆小鬼学员', date: new Date('2022-12-05')}
    ];
    let msg = '';
    const today = new Date();
  
    for (const role of 集结) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    const obj = {
      embed: {
        title: '集结季数据更新时间：2023-04-20',
        prompt: '集结季多久未复刻',
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
