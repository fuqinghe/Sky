import { plugin, Messagetype } from 'alemon'

export class XX季多久未复刻 extends plugin {
  constructor() {
    super({
      rule: [
        {
          reg: '^/?XX季多久未复刻$',
          fnc: 'season_XX'
        }
      ]
    })
  }

  /**
   * 指令方法
   * @param e 消息对象
   * @returns
   */
  async season_XX(e: Messagetype) {
    const XX = [
        { name: '', date: new Date('') },
        { name: '', date: new Date('') },
        { name: '', date: new Date('') },
        { name: '', date: new Date('') },
        { name: '', date: new Date('') },
        { name: '', date: new Date('') }
      ];
      let msg = 'XX季暂未复刻\n';
      const today = new Date();
      for (const role of XX) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
      e.reply(msg.trim())
      return false
  }
}
