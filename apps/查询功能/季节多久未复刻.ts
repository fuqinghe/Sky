import { plugin, Messagetype,segment } from 'alemon'
let weather_icon: string
let msg = '';
const 感恩 = [
  { name: '刁蛮浪者', date: new Date('2021-11-08') },
  { name: '挑衅艺伎', date: new Date('2023-05-22') },
  { name: '敬礼护卫', date: new Date('2023-03-27') },
  { name: '舒展大师', date: new Date('2021-11-22') },
  { name: '跳跃舞者', date: new Date('2023-04-24') },
  { name: '拳礼武僧', date: new Date('2023-02-13') }
];
const 追光 = [
  { name: '随性拓荒者', date: new Date('2023-05-08')},
  { name: '击掌光农', date: new Date('2023-03-13')},
  { name: '肩背追光', date: new Date('2023-02-27')},
  { name: '静光学者', date: new Date('2022-04-11')},
  { name: '螺旋舞冠', date: new Date('2021-05-10')},
  { name: '蟹语者', date: new Date('2022-05-09') }
];
const 归属 = [
  { name: '蓬头青年', date: new Date('2023-01-25')},
  { name: '不舍家长', date: new Date('2023-01-17')},
  { name: '踏舞孩童', date: new Date('2022-12-28')},
  { name: '彩纸表亲', date: new Date('2022-10-05')},
  { name: '火花家长', date: new Date('2022-01-31')},
  { name: '智慧长者', date: new Date('2021-12-29')}
];
const 音韵 = [
  { name: '致敬钢琴家', date: new Date('2022-03-28')},
  { name: '迎宾侍者', date: new Date('2022-05-23')},
  { name: '献情演员', date: new Date('2022-08-16')},
  { name: '抛球杂耍', date: new Date('2023-06-26')},
  { name: '沉思编导', date: new Date('2022-09-27')},
  { name: '旋转舞者', date: new Date('2022-10-10')}
];
const 魔法 = [
  { name: '稻草人农夫', date: new Date('2022-08-29')},
  { name: '赞许壁画及', date: new Date('2022-06-21')},
  { name: '情绪草药师', date: new Date('2023-06-19')},
  { name: '瞌睡木匠', date: new Date('2022-12-07')},
  { name: '冷漠术士', date: new Date('2022-03-14')},
  { name: '蟹舞者', date: new Date('2021-04-12')}
];
const 圣岛 = [
  { name: '放松日浴者', date: new Date('2022-09-13')},
  { name: '鸣谢收藏家', date: new Date('2022-06-06')},
  { name: '固执登山者', date: new Date('2023-04-10')},
  { name: '热血运动员', date: new Date('2022-07-04')},
  { name: '内秀书虫', date: new Date('2022-10-25')},
  { name: '母语者', date: new Date('2022-08-01')}
];
const 预言 = [
  { name: '水先知', date: new Date('2022-12-19')},
  { name: '土先知', date: new Date('2021-12-06')},
  { name: '风先知', date: new Date('2021-09-13')},
  { name: '火先知', date: new Date('2023-06-05')}
];
const 梦想 = [
  { name: '偷窥邮差', date: new Date('2022-02-14')},
  { name: '熊抱雪人', date: new Date('2022-02-28')},
  { name: '回旋大师', date: new Date('2022-05-04')},
  //{ name: '跳舞艺人', date: new Date('')}
];
const 集结 = [
  { name: '白日梦森林人', date: new Date('2022-11-22')},
  //{ name: '茫然植物学生', date: new Date('')},
  { name: '正步冒险家', date: new Date('2022-07-19')},
  //{ name: '傻笑童子军', date: new Date('')},
  { name: '管事小队长', date: new Date('2023-05-03')},
  { name: '胆小鬼学员', date: new Date('2022-12-05')}
];
const 小王子 = [
  { name: '沾沾自喜的自恋狂', date: new Date('2023-01-02')},
  { name: '发号施令的统治者', date: new Date('2023-07-03')},
  //{ name: '打喷嚏的地理学家', date: new Date('')},
  //{ name: '被逼无奈的掌灯人', date: new Date('')},
  { name: '萎靡不振的士兵', date: new Date('2023-01-30')},
  { name: '星光收藏家', date: new Date('2023-07-17')}
];
const 风行 = [
  { name: '光之低语者', date: new Date},
  { name: '编钟修补匠', date: new Date},
  { name: '天才建筑者', date: new Date},
  { name: '活跃导航员', date: new Date}
];
const 潜海 = [
  { name: '退休将领', date: new Date},
  { name: '嬉笑炮手', date: new Date},
  { name: '焦虑渔夫', date: new Date},
  { name: '笨拙水手', date: new Date}
];
const 表演 = [
  { name: '忙碌舞台管理员', date: new Date},
  { name: '健忘叙事者', date: new Date},
  { name: '老练音乐家', date: new Date},
  { name: '谦虚舞者', date: new Date}
];
const 破晓 = [
  { name: '远古光明记忆·上', date: new Date},
  { name: '远古光明记忆·下', date: new Date},
  { name: '远古黑暗记忆·上', date: new Date},
  { name: '远古黑暗记忆·下', date: new Date}
];
const 欧若拉 = [
  { name: '奔离旅行者', date: new Date},
  { name: '细心矿工', date: new Date},
  { name: '爱之战士', date: new Date},
  { name: '希望之种', date: new Date}
];
const 追忆 = [
  { name: '嗫足沏茶师', date: new Date},
  { name: '乞求孩童', date: new Date},
  { name: '丧子老兵', date: new Date},
  { name: '负伤战士', date: new Date}
];
const 夜行 = [
  { name: '古怪边缘人', date: new Date},
  { name: '翻滚捣蛋鬼', date: new Date},
  { name: '郁郁寡欢者', date: new Date},
  { name: '活跃优等生', date: new Date}
];
export class 季节多久未复刻 extends plugin {
  constructor() {
    super({
      rule: [{
        reg: '^/?感恩季多久未复刻$',
        fnc: '感恩季多久未复刻'
      },{
        reg: '^/?追光季多久未复刻$',
        fnc: '追光季多久未复刻'
      },{
        reg: '^/?归属季多久未复刻$',
        fnc: '归属季多久未复刻'
      },{
        reg: '^/?(音韵|凌冬)季多久未复刻$',
        fnc: '音韵季多久未复刻'
      },{
        reg: '^/?魔法季多久未复刻$',
        fnc: '魔法季多久未复刻'
      },{
        reg: '^/?圣岛季多久未复刻',
        fnc: '圣岛季多久未复刻'
      },{
        reg: '^/?预言季多久未复刻$',
        fnc: '预言季多久未复刻'
      },{
        reg: '^/?梦想季多久未复刻$',
        fnc: '梦想季多久未复刻'
      },{
        reg: '^/?集结季多久未复刻$',
        fnc: '集结季多久未复刻'
      },{
        reg: '^/?小王子季多久未复刻$',
        fnc: '小王子季多久未复刻'
      }]
    })
  }

  async 感恩季多久未复刻(e: Messagetype): Promise<boolean>  {
    const today = new Date();
    for (const role of 感恩) {
      const timeDiff = today.getTime() - role.date.getTime()
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0')
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`
    }
    const Textreply = [
      `感恩季多久未复刻`,
      `感恩季多久未复刻`,
      weather_icon,
      [
        msg
      ]
    ] as [title: string, prompt: string, url: string, arr: any[]];
    e.reply('', segment.embed(...Textreply));
    return false
  }
  
  async 追光季多久未复刻(e: Messagetype): Promise<boolean>  {
    const today = new Date();
    for (const role of 追光) {
      const timeDiff = today.getTime() - role.date.getTime()
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0')
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`
    }
    const Textreply = [
      `追光季多久未复刻`,
      `追光季多久未复刻`,
      weather_icon,
      [
        msg
      ]
    ] as [title: string, prompt: string, url: string, arr: any[]];
    e.reply('', segment.embed(...Textreply));
    return false
  }

  async 归属季多久未复刻(e: Messagetype): Promise<boolean>  {
    const today = new Date();
    for (const role of 归属) {
      const timeDiff = today.getTime() - role.date.getTime()
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0')
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`
    }
    const Textreply = [
      `归属季多久未复刻`,
      `归属季多久未复刻`,
      weather_icon,
      [
        msg
      ]
    ] as [title: string, prompt: string, url: string, arr: any[]];
    e.reply('', segment.embed(...Textreply));
    return false
  }

  async 音韵季多久未复刻(e: Messagetype): Promise<boolean>  {
    const today = new Date();
    for (const role of 音韵) {
      const timeDiff = today.getTime() - role.date.getTime()
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0')
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`
    }
    const Textreply = [
      `音韵季多久未复刻`,
      `音韵季多久未复刻`,
      weather_icon,
      [
        msg
      ]
    ] as [title: string, prompt: string, url: string, arr: any[]];
    e.reply('', segment.embed(...Textreply));
    return false
  }

  async 魔法季多久未复刻(e: Messagetype): Promise<boolean>  {
    const today = new Date();
    for (const role of 魔法) {
      const timeDiff = today.getTime() - role.date.getTime()
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0')
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`
    }
    const Textreply = [
      `魔法季多久未复刻`,
      `魔法季多久未复刻`,
      weather_icon,
      [
        msg
      ]
    ] as [title: string, prompt: string, url: string, arr: any[]];
    e.reply('', segment.embed(...Textreply));
    return false
  }

  async 圣岛季多久未复刻(e: Messagetype): Promise<boolean>  {
    const today = new Date();
    for (const role of 圣岛) {
      const timeDiff = today.getTime() - role.date.getTime()
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0')
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`
    }
    const Textreply = [
      `圣岛季多久未复刻`,
      `圣岛季多久未复刻`,
      weather_icon,
      [
        msg
      ]
    ] as [title: string, prompt: string, url: string, arr: any[]];
    e.reply('', segment.embed(...Textreply));
    return false
  }

  async 预言季多久未复刻(e: Messagetype): Promise<boolean>  {
    const today = new Date();
    for (const role of 预言) {
      const timeDiff = today.getTime() - role.date.getTime()
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0')
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`
    }
    const Textreply = [
      `预言季多久未复刻`,
      `预言季多久未复刻`,
      weather_icon,
      [
        msg
      ]
    ] as [title: string, prompt: string, url: string, arr: any[]];
    e.reply('', segment.embed(...Textreply));
    return false
  }

  async 梦想季多久未复刻(e: Messagetype): Promise<boolean>  {
    const today = new Date();
    for (const role of 梦想) {
      const timeDiff = today.getTime() - role.date.getTime()
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0')
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`
    }
    const Textreply = [
      `梦想季多久未复刻`,
      `梦想季多久未复刻`,
      weather_icon,
      [
        msg
      ]
    ] as [title: string, prompt: string, url: string, arr: any[]];
    e.reply('', segment.embed(...Textreply));
    return false
  }

  async 集结季多久未复刻(e: Messagetype): Promise<boolean>  {
    const today = new Date();
    for (const role of 集结) {
      const timeDiff = today.getTime() - role.date.getTime()
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0')
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`
    }
    const Textreply = [
      `集结季多久未复刻`,
      `集结季多久未复刻`,
      weather_icon,
      [
        msg
      ]
    ] as [title: string, prompt: string, url: string, arr: any[]];
    e.reply('', segment.embed(...Textreply));
    return false
  }

  async 小王子季多久未复刻(e: Messagetype): Promise<boolean>  {
    const today = new Date();
    for (const role of 小王子) {
      const timeDiff = today.getTime() - role.date.getTime()
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(3, '0')
      msg += `${role.name}已[ ${dayDiff} ]天！未复刻\n`
    }
    const Textreply = [
      `小王子季多久未复刻`,
      `小王子季多久未复刻`,
      weather_icon,
      [
        msg
      ]
    ] as [title: string, prompt: string, url: string, arr: any[]];
    e.reply('', segment.embed(...Textreply));
    return false
  }
}