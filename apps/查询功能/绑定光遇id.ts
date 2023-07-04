import { plugin, Messagetype } from 'alemon'
import fs from 'fs'

const dirpath = "plugins/Sky/data/id"
var filename = `Sky ID.json`
export class 绑定光遇id extends plugin {
    constructor() {
        super({
            rule: [
                {
                    reg: '^绑定光遇id(.*)$',
                    fnc: 'sky_bdid'
                },{
                    reg: '^查询光遇id$',
                    fnc: 'sky_cxid'
                }
            ]
        });
    }
    async sky_bdid(e: Messagetype) {
        var Sky_ID = e.msg.content.replace(/#|(<@![0-9a-zA-Z]+>| |绑定光遇id)/g, "")
        var data = {
            "Sky_id": Sky_ID
        }
        const id = e.msg.author.id
        var json = JSON.parse(fs.readFileSync(dirpath + "/" + filename, "utf8"));
        if(!json.hasOwnProperty(id)) {
            json[id] = data
            fs.writeFileSync(dirpath + "/" + filename, JSON.stringify(json, null, "\t"));//写入文件
            await e.reply("ID绑定成功")
        }
        else{
            json[id] = data
            fs.writeFileSync(dirpath + "/" + filename, JSON.stringify(json, null, "\t"));//写入文件
            await e.reply("重新绑定成功")
        }
    }
    async sky_cxid(e: Messagetype){
        var json = JSON.parse(fs.readFileSync(dirpath + "/" + filename, "utf8"));
        const id = e.msg.author.id
        let num
        if(json.hasOwnProperty(id)) {//如果json中存在该用户
            num = `您的id为：\n${JSON.stringify(json[id].Sky_id).slice(1, -1)}`
        }
        else{
            num = "您还未绑定id"
        }
        await e.reply(num)
    }
}