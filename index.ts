import { createApps, setMessage, BotType, BotConfigType } from 'alemon'
import { AppName } from './app.config.js'
import { PointMessageType } from './types.js'
import fs from 'fs'
const dirpath_0 = "plugins/Sky/data/id"
const dirpath_1 = "plugins/SKy/data/Sky签到"
let filename_0 = `身高ID.json`
let filename_1 = `Sky ID.json`
if (!fs.existsSync(dirpath_0)) {fs.mkdirSync(dirpath_0);}
if (!fs.existsSync(dirpath_1)) {fs.mkdirSync(dirpath_1);}
if (!fs.existsSync(dirpath_0 + "/" + filename_0)) {fs.writeFileSync(dirpath_0 + "/" + filename_0, JSON.stringify({}))}
if (!fs.existsSync(dirpath_0 + "/" + filename_1)) {fs.writeFileSync(dirpath_0 + "/" + filename_1, JSON.stringify({}))}

declare global {
  var robot: BotType
  var cfg: BotConfigType
}

console.log('         Sky插件载入成功！')
console.log('         感谢您的使用！')
console.log('         官方频道：https://pd.qq.com/s/bclm3owlx')

setMessage(AppName, (e: PointMessageType) => {
  if (e.msg.user) {
    e.user = e.msg.user
  }
  if (cfg.sandbox) console.info(e)
  return e
})

await createApps(AppName)

