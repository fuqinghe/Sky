import { exec } from 'child_process'
import { plugin } from '../api'
import { AppName } from '../app.config'
import fs from 'fs'
const { exec } = require('child_process');
const _path = process.cwd()

export class xianyu_update extends plugin {
	constructor() {
		super({
			dsc: 'Sky插件更新',
			priority: 2000,
			rule: [
				{
                    reg: '^/Sky更新$',
					fnc: 'update',
				}
			]
		});
	}

	async update (e) {
		const resPath = `${_path}/plugins/${AppName}`;
        let command = '';
        if (fs.existsSync(`${resPath}`)) {
            e.reply('开始尝试更新，请耐心等待~');
            command = 'git pull';
            exec(command, { cwd: `${resPath}` }, function (error, stdout, stderr) {
                console.log(stdout);
                if (/(Already up[ -]to[ -]date|已经是最新的)/.test(stdout)) {
                    e.reply('目前Sky插件已经是最新的~');
                    return true;
                }
                let numRet = /(\d*) files changed,/.exec(stdout);
                if (numRet && numRet[1]) {
                    e.reply(`此次更新了${numRet[1]}个内容,\n更新内容请前往GitHub查看~`);
                    return true;
                }
                if (error) {
                    e.reply('更新失败！\nError code: ' + error.code + '\n' + error.stack + '\n 请稍后重试。');
                }
            });
        }
    }
}
