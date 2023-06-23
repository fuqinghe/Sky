import { createApps, setMessage, BotType, BotConfigType } from 'alemon'
/* 非依赖引用 */
import { AppName } from './app.config.js'
import { PointMessageType } from './types.js'

declare global {
  //机器人信息
  var robot: BotType
  //机器人配置
  var cfg: BotConfigType
}
/* 重定义e消息方法(非必须) */
setMessage(AppName, (e: PointMessageType) => {
  /* 当存在时 */
  if (e.msg.user) {
    /* 定义e.user为e.msg.user */
    e.user = e.msg.user
  }
  /* 用于确保开发时插件执行的e消息字段的正确性 */
  if (cfg.sandbox) console.info(e)
  return e
})

/** 创建插件应用 */
await createApps(AppName)

/**
 * 倘若你有很多同级插件作为你的子插件
 * 你甚至可以手动管理并决定是否创建该插件
 * 注:作为子插件不应该再执行创建插件行为
 */
// createApps('xiuxian-plugin')
