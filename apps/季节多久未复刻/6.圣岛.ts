import { plugin, Messagetype } from 'alemon'

export class 圣岛季多久未复刻 extends plugin {
  
  constructor() {
    super({
      rule: [
        {
          reg: '^/?圣岛季多久未复刻$',
          fnc: 'season_Holy_island'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async season_Holy_island(e: Messagetype) {
    const centent = '圣岛季多久未复刻'
    const picture = 'https://gitee.com/Tloml-Starry/Tlon-picture/raw/master/season/06圣岛季.png'
    const 圣岛 = [
      { name: '放松日浴者', date: new Date('2022-09-13')},
      { name: '鸣谢收藏家', date: new Date('2022-06-06')},
      { name: '固执登山者', date: new Date('2023-04-10')},
      { name: '热血运动员', date: new Date('2022-07-04')},
      { name: '内秀书虫', date: new Date('2022-10-25')},
      { name: '母语者', date: new Date('2022-08-01')}
    ];
    let msg = '';
    const today = new Date();
  
    for (const role of 圣岛) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    const obj = {
      embed: {
        title: '圣岛季数据更新时间：2023-04-20',
        prompt: '圣岛季多久未复刻',
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
