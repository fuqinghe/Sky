import { plugin, Messagetype, segment } from 'alemon'
import axios from 'axios';
import fs from 'fs'

const dirpath = "plugins/Sky/data/id"
let filename = `身高ID.json`
export class 身高查询 extends plugin {
  constructor() {
    super({
      rule: [
        {
          reg: '^/?绑定身高(.*)$',
          fnc: 'sky_bdsg'
        },{
          reg: '^/?(身高查询|查询身高)$',
          fnc: '身高查询文字'
        },{
          reg: '^/?我的角色$',
          fnc: '身高查询图片'
        }
      ]
    });
  }
  async sky_bdsg(e: Messagetype) {
    
    let Sky_Uid = e.msg.content.replace(/\/|(<@![0-9a-zA-Z]+>| |绑定身高)/g, "").trim();
    let data = {
      "Sky_Uid": Sky_Uid,
    }
    const 用户频道ID = e.msg.author.id
    let json = JSON.parse(fs.readFileSync(dirpath + "/" + filename, "utf8"));
    if(!json.hasOwnProperty(用户频道ID)) {
      json[用户频道ID] = data
      fs.writeFileSync(dirpath + "/" + filename, JSON.stringify(json, null, "\t"));
      e.reply("绑定成功\n您可使用'身高查询'查询身高", segment.reply(e.msg.id))
    } else {
      json[用户频道ID] = data
      fs.writeFileSync(dirpath + "/" + filename, JSON.stringify(json, null, "\t"));
      e.reply("重新绑定成功\n您可使用'身高查询'查询身高", segment.reply(e.msg.id))
    }
  }

  async 身高查询文字(e: Messagetype) {
    let json = JSON.parse(fs.readFileSync(dirpath + "/" + filename, "utf8"));
    let id = e.msg.author.id
    let place = e.msg.content.replace(/\/|(<@![0-9a-zA-Z]+>| |身高查询)/g, "").trim();
    if(json.hasOwnProperty(id)) {
      place = JSON.stringify(json[id].Sky_Uid).slice(1, -1)
      interface Record {
        scale: number;
        height: number;
        currentHeight: number;
        maxHeight: number;
        minHeight: number;
      }
      interface Dress_up{
        cloak: string;
        prop: string;
        neck: string;
        mask: string;
        horn: string;
        hair: string;
        pants: string;
      }
      interface ResponseData {
        code: number;
        msg: string;
        data: Record;
        adorn: Dress_up;
      }
      axios.get<ResponseData>(`https://api.t1qq.com/api/sky/sc/sg?key=gLlkn4wsi7O4wxayt2UeJocBmk&cx=${place}`)
      .then(response => {
        if(response.data.code === 200) {
          const userName = e.msg.author.username;
          let S值 = response.data.data.scale
          let H值 = response.data.data.height
          let 最高_原值 = response.data.data.maxHeight
          let 最矮_原值 = response.data.data.minHeight
          let 当前_原值 = response.data.data.currentHeight
          let 最高 = Math.floor(最高_原值 * 100) / 100;
          let 最矮 = Math.floor(最矮_原值 * 100) / 100;
          let 当前 = Math.floor(当前_原值 * 100) / 100;
          let 发型 = response.data.adorn.hair
          let 头饰 = response.data.adorn.horn
          let 面具 = response.data.adorn.mask
          let 项链 = response.data.adorn.neck
          let 裤子 = response.data.adorn.pants
          let 斗篷 = response.data.adorn.cloak
          let 背饰 = response.data.adorn.prop
          let weather_icon: string
          let Textreply = [
            `@${userName}`,
            '身高查询',
             weather_icon,
             [
              `------用户身高-----`,
              `体型 S 值是：\n${S值}`,
              `身高 H 值是：\n${H值}`,
              `最高是：${最高.toFixed(3)}号`,
              `最矮是：${最矮.toFixed(3)}号`,
              `目前身高：${当前.toFixed(3)}号`,
              `------用户装扮-----`,
              `发型：${发型}`,
              `头饰：${头饰}`,
              `面具：${面具}`,
              `项链：${项链}`,
              `裤子：${裤子}`,
              `斗篷：${斗篷}`,
              `背饰：${背饰}`
            ]
          ] as [title: string, prompt: string, url: string, arr: any[]]
          e.reply('', segment.embed(...Textreply))
          console.error(Textreply)
        } else if(response.data.code === 201) {
          let Textreply = '绑定id错误,请重新绑定'
          console.error(Textreply)
          e.reply(Textreply, segment.reply(e.msg.id))
        } else if(response.data.code === 400 ) {
          let Textreply = '今日查询用户已上限,请明日再来'
          console.error(Textreply)
          e.reply(Textreply, segment.reply(e.msg.id))
        }
      })
      .catch(error => {
        console.error(`${error}`)
      });
    } else {
      let Textreply = '您还未绑定id'
      console.error('您还未绑定id')
      await e.reply(Textreply, segment.reply(e.msg.id))
    }
  }
  async 身高查询图片(e: Messagetype) {
    let json = JSON.parse(fs.readFileSync(dirpath + "/" + filename, "utf8"));
    let id = e.msg.author.id
    let place = e.msg.content.replace(/\/|(<@![0-9a-zA-Z]+>| |身高查询)/g, "").trim();
    const userName = e.msg.author.username;
    if(json.hasOwnProperty(id)) {
      place = JSON.stringify(json[id].Sky_Uid).slice(1, -1)
      const url = `https://api.t1qq.com/api/sky/sc/adorn.php?cx=${place}&qq=3620060826&nc=${userName}`
      const filePath = 'plugins/Sky/resource/adorn.jpg';
      axios({
        method: 'get',
        url: url,
        responseType: 'stream'
      }).then(response => {
        response.data.pipe(fs.createWriteStream(filePath)).on('close', () => {
          setTimeout(() => {
            e.sendImage(filePath);
          }, 200); // 延迟2毫秒发送图片
        });
      });
    } else {
      let Textreply = '您还未绑定id'
      console.error('您还未绑定id')
      await e.reply(Textreply, segment.reply(e.msg.id))
    }
  }
}