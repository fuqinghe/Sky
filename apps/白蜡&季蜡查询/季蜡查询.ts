import { plugin, Messagetype, segment } from 'alemon'
import axios from 'axios';
import fs from 'fs'

const dirpath = "plugins/Sky/data/id"
var filename = `Sky ID.json`

export class 季蜡查询 extends plugin {
    constructor() {
        super({
            rule: [{
                reg: '^/?季蜡查询$',
                fnc: '季蜡'
            }
            ]
        });
    }
    async 季蜡(e: Messagetype){
        var json = JSON.parse(fs.readFileSync(dirpath + "/" + filename, "utf8"));
        var id = e.msg.author.id
        let place = e.msg.content.replace(/#|(<@![0-9a-zA-Z]+>| |季蜡查询)/g, "")
        if(json.hasOwnProperty(id)) {
          await e.reply('id已收录，正在查询...')
          place = JSON.stringify(json[id].Sky_id).slice(1, -1)
          interface Record {
            cause: string;
            change: string;
            residual: string;
            time: string;
          }
          interface ResponseData {
            code: number;
            msg: string;
            data: Record[];
          }
          axios.get<ResponseData>(`https://api.t1qq.com/api/sky/gy/gf/cxlz.php?uid=${place}&type=jl`)
          .then(response => {
                let 数据 = response.data.data[0];
                let 原因 = 数据.cause
                let 变化 = 数据.change
                let 剩余 = 数据.residual
                let 时间 = 数据.time
                let msg = `最近一次季蜡记录：\n[${时间}]\n因<${原因}> 变化 [${变化}]\n剩余：[${剩余}]`
                console.error(msg)
                e.reply(msg)
            })
        .catch(error => {
            e.reply('查询失败，请重新查询')
        });
        }
        else{await e.reply('您还未绑定id')}
    }
}