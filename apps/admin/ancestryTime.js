import { plugin } from '../../api'

export class ancestryTime extends plugin {
  constructor() {
    super({
      /* 指令集 */
      dsc: '季节多久未复刻查询',
      rule: [
        {
          reg: '^/感恩季多久未复刻$',
          fnc: 'season_Be_grateful'
        }, {
          reg: '^/追光季多久未复刻$',
          fnc: 'season_Light_tracing'
        }, {
          reg: '^/归属季多久未复刻$/',
          fnc: 'season_Belong_to'
        }, {
          reg: '^/凌冬季多久未复刻$/',
          fnc: 'season_rhyme'
        }, {
          reg: '^/魔法季多久未复刻$',
          fnc: 'season_magic'
        }, {
          reg: '^/圣岛季多久未复刻$',
          fnc: 'season_Holy_island'
        }, {
          reg: '^/预言季多久未复刻$',
          fnc: 'season_prophecy'
        }, {
          reg: '^/梦想季多久未复刻$',
          fnc: 'season_dream'
        }, {
          reg: '^/集结季多久未复刻$',
          fnc: 'season_assembly'
        }, {
          reg: '^/小王子季多久未复刻$',
          fnc: 'season_Little_prince'
        }
      ]
    })
  }

  async season_Be_grateful(e) {
    const 感恩 = [
      { name: '刁蛮浪者', date: new Date('2021-11-08') },
      { name: '挑衅艺伎', date: new Date('2020-12-07') },
      { name: '敬礼护卫', date: new Date('2023-03-27') },
      { name: '舒展大师', date: new Date('2021-11-22') },
      { name: '跳跃舞者', date: new Date('2023-04-24') },
      { name: '拳礼武僧', date: new Date('2023-02-13') }
    ];
    let msg = '感恩季数据更新时间:2023-04-18\n';
    const today = new Date();
    for (const role of 感恩) {
    const timeDiff = today.getTime() - role.date.getTime();
    const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
    msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
  }
    e.reply(msg.trim())
    return false
  }
  async season_Light_tracing(e) {
    const 追光 = [
      { name: '随性拓荒者', date: new Date('2021-02-01')},
      { name: '击掌光农', date: new Date('2023-03-13')},
      { name: '肩背追光', date: new Date('2023-02-27')},
      { name: '静光学者', date: new Date('2022-04-11')},
      { name: '螺旋舞冠', date: new Date('2021-05-10')},
      { name: '蟹语者', date: new Date('2022-05-09') }
    ];
    let msg = '追光季数据更新时间:2023-04-18\n';
    const today = new Date();
  
    for (const role of 追光) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    e.reply(msg.trim())
    return false
  }
  async season_Belong_to(e) {
    const 归属 = [
      { name: '蓬头青年', date: new Date('2023-01-25')},
      { name: '不舍家长', date: new Date('2023-01-17')},
      { name: '踏舞孩童', date: new Date('2022-12-28')},
      { name: '彩纸表亲', date: new Date('2022-10-05')},
      { name: '火花家长', date: new Date('2022-01-31')},
      { name: '智慧长者', date: new Date('2021-12-29')}
    ];
    let msg = '归属季数据更新时间:2023-04-20\n';
    const today = new Date();
  
    for (const role of 归属) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    e.reply(msg.trim())
    return false
  }
  async season_rhyme(e) {
    const 音韵 = [
      { name: '致敬钢琴家', date: new Date('2022-03-28')},
      { name: '迎宾侍者', date: new Date('2022-05-23')},
      { name: '献情演员', date: new Date('2022-08-16')},
      { name: '抛球杂耍', date: new Date('2022-02-05')},
      { name: '沉思编导', date: new Date('2022-09-27')},
      { name: '旋转舞者', date: new Date('2022-10-10')}
    ];
    let msg = '音韵季数据更新时间:2023-04-20\n';
    const today = new Date();
  
    for (const role of 音韵) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    e.reply(msg.trim())
    return false
  }
  async season_magic(e) {
    const 魔法 = [
      { name: '稻草人农夫', date: new Date('2022-08-29')},
      { name: '赞许壁画及', date: new Date('2022-06-21')},
      { name: '情绪草药师', date: new Date('2022-04-25')},
      { name: '瞌睡木匠', date: new Date('2022-12-07')},
      { name: '冷漠术士', date: new Date('2022-03-14')},
      { name: '蟹舞者', date: new Date('2021-04-12')}
    ];
    let msg = '魔法季数据更新时间:2023-04-20\n';
    const today = new Date();
  
    for (const role of 魔法) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    e.reply(msg.trim())
    return false
  }
  async season_Holy_island(e) {
    const 圣岛 = [
      { name: '放松日浴者', date: new Date('2022-09-13')},
      { name: '鸣谢收藏家', date: new Date('2022-06-06')},
      { name: '固执登山者', date: new Date('2023-04-10')},
      { name: '热血运动员', date: new Date('2022-07-04')},
      { name: '内秀书虫', date: new Date('2022-10-25')},
      { name: '母语者', date: new Date('2022-08-01')}
    ];
    let msg = '圣岛季数据更新时间:2023-04-20\n';
    const today = new Date();
  
    for (const role of 圣岛) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    e.reply(msg.trim())
    return false
  }
  async season_prophecy(e) {
    const 预言 = [
      { name: '水先知', date: new Date('2022-12-19')},
      { name: '土先知', date: new Date('2021-12-06')},
      { name: '风先知', date: new Date('2021-09-13')},
      { name: '火先知', date: new Date('2022-01-03')}
    ];
    let msg = '预言季数据更新时间:2023-04-20\n';
    const today = new Date();
  
    for (const role of 预言) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    e.reply(msg.trim())
    return false
  }
  async season_dream(e) {
    const 梦想 = [
      { name: '偷窥邮差', date: new Date('2022-02-14')},
      { name: '熊抱雪人', date: new Date('2022-02-28')},
      { name: '回旋大师', date: new Date('2022-05-04')},
      //{ name: '跳舞艺人', date: new Date('')}
    ];
    let msg = '梦想季数据更新时间:2023-04-20\n';
    const today = new Date();
  
    for (const role of 梦想) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    e.reply(msg.trim())
    return false
  }
  async season_assembly(e) {
    const 集结 = [
      { name: '白日梦森林人', date: new Date('2022-11-22')},
      //{ name: '茫然植物学生', date: new Date('')},
      { name: '正步冒险家', date: new Date('2022-07-19')},
      //{ name: '傻笑童子军', date: new Date('')},
      { name: '管事小队长', date: new Date('2023-05-03')},
      { name: '胆小鬼学员', date: new Date('2022-12-05')}
    ];
    let msg = '集结季数据更新时间:2023-04-20\n';
    const today = new Date();
  
    for (const role of 集结) {
      const timeDiff = today.getTime() - role.date.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`;
    }
    e.reply(msg.trim())
    return false
  }
  async season_Little_prince(e) {
    const 小王子 = [
      { name: '沾沾自喜的自恋狂', date: new Date('2023-01-02')},
      //{ name: '呼风唤雨的统治者', date: new Date('')},
      //{ name: '打喷嚏的地理学家', date: new Date('')},
      //{ name: '被逼无奈的掌灯人', date: new Date('')},
      { name: '萎靡不振的士兵', date: new Date('2023-01-30')},
      //{ name: '星光收藏家', date: new Date('')}
    ];
    let msg = '小王子季数据更新时间:2023-04-20\n';
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
