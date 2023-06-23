import { plugin, Messagetype } from 'alemon'

export class 小王子季多久未复刻 extends plugin {
  
  constructor() {
    super({
      rule: [
        {
          reg: '^/?小王子季多久未复刻$',
          fnc: 'season_Little_prince'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async season_Little_prince(e: Messagetype): Promise<boolean>  {
    const 小王子 = [
      { name: '沾沾自喜的自恋狂', date: new Date('2023-01-02')},
      { name: '呼风唤雨的统治者', date: new Date},
      { name: '打喷嚏的地理学家', date: new Date},
      { name: '被逼无奈的掌灯人', date: new Date},
      { name: '萎靡不振的士兵', date: new Date('2023-01-30')},
      { name: '星光收藏家', date: new Date}
    ];
    let msg = '小王子季数据更新时间：2023-04-20\n';
    const today = new Date();
  
    for (const role of 小王子) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    e.reply(msg.trim())
    return false
  }
}
