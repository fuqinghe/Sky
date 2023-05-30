import { plugin, Messagetype } from 'alemon'

export class 追光季多久未复刻 extends plugin {
  
  constructor() {
    super({
      rule: [
        {
          reg: '^/?追光季多久未复刻$',
          fnc: 'season_Light_tracing'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async season_Light_tracing(e: Messagetype) {
    const centent = '追光季多久未复刻'
    const picture = 'https://gitee.com/Tloml-Starry/Tlon-picture/raw/master/season/02追光.png'
    const 追光 = [
      { name: '随性拓荒者', date: new Date('2021-02-01')},
      { name: '击掌光农', date: new Date('2023-03-13')},
      { name: '肩背追光', date: new Date('2023-02-27')},
      { name: '静光学者', date: new Date('2022-04-11')},
      { name: '螺旋舞冠', date: new Date('2021-05-10')},
      { name: '蟹语者', date: new Date('2022-05-09') }
    ];
    let msg = '';
    const today = new Date();
  
    for (const role of 追光) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    const obj = {
      embed: {
        title: '追光季数据更新时间：2023-04-18',
        prompt: '追光季多久未复刻',
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
