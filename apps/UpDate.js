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
				}, {
                    reg: '^/更新复刻$',
                    fnc: 'update_reprint'
                }, {
                    reg: '^/Sky更新图库$',
                    fnc: 'update_gallery'
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
                    e.reply(`此次更新了${numRet[1]}个内容,\n更新内容请前往Gitee查看~`);
                    return true;
                }
                if (error) {
                    e.reply('更新失败！\nError code: ' + error.code + '\n' + error.stack + '\n 请稍后重试。');
                }
            });
        }
    }
    async update_reprint (e) {
        const resPath = `${_path}/plugins/${AppName}/resource/`;
        let command = '';
        if (fs.existsSync(`${resPath}/复刻图/`)) {
            e.reply('开始尝试更新，请耐心等待~');
            command = 'git pull';
            exec(command, { cwd: `${resPath}/复刻图/` }, function (error, stdout, stderr) {
                console.log(stdout);
                if (/(Already up[ -]to[ -]date|已经是最新的)/.test(stdout)) {
                    e.reply('目前复刻已经是最新的~或者暂未更新~');
                    return true;
                }
                let numRet = /(\d*) files changed,/.exec(stdout);
                if (numRet && numRet[1]) {
                    e.reply(`复刻已更新~`);
                    return true;
                }
                if (error) {
                    e.reply('更新失败！\nError code: ' + error.code + '\n' + error.stack + '\n 请稍后重试。');
                } else {
                    e.reply('复刻更新成功~');
                }
            });
        } else {
            command = `git clone https://gitee.com/Tloml-Starry/Tlon-Sky-reprint.git "${resPath}/复刻图/" --depth=1`;
            e.reply('开始尝试安装复刻图\n可能会需要一段时间，请耐心等待~');
            exec(command, function (error, stdout, stderr) {
                if (error) {
                    e.reply('复刻图安装失败！\nError code: ' + error.code + '\n' + error.stack + '\n 请稍后重试。');
                } else {
                    e.reply('复刻图安装成功\n您后续也可以通过\n[ /更新复刻 ]命令来更新复刻图');
                }
            });
        }
    }
    async update_gallery (e) {
        const resPath = `${_path}/plugins/${AppName}/resource/`;
        let command = '';
        if (fs.existsSync(`${resPath}/光遇绘画分享/`)) {
            // 图片包已经安装，尝试更新
            e.reply('开始尝试更新，请耐心等待~');
            command = 'git pull';
            exec(command, { cwd: `${resPath}/光遇绘画分享/` }, function (error, stdout, stderr) {
                console.log(stdout);
                if (/(Already up[ -]to[ -]date|已经是最新的)/.test(stdout)) {
                    e.reply('目前所有图片都已经是最新的~');
                    return true;
                }
                let numRet = /(\d*) files changed,/.exec(stdout);
                if (numRet && numRet[1]) {
                    e.reply(`此次更新了${numRet[1]}张图片`);
                    return true;
                }
                if (error) {
                    e.reply('更新失败！\nError code: ' + error.code + '\n' + error.stack + '\n 请稍后重试。');
                } else {
                    e.reply('绘图分享图库更新成功~');
                }
            });
        } else {
            // 图片包未安装，尝试从Git仓库克隆
            command = `git clone https://gitee.com/Tloml-Starry/Tlon-Sky-gallery.git "${resPath}/光遇绘画分享/" --depth=1`;
            e.reply('开始尝试安装绘画分享图库\n可能会需要一段时间，请耐心等待~');
            exec(command, function (error, stdout, stderr) {
                if (error) {
                    e.reply('绘画分享图库安装失败！\nError code: ' + error.code + '\n' + error.stack + '\n 请稍后重试。');
                } else {
                    e.reply('绘画分享图库安装成功\n您后续也可以通过\n[ /Sky更新图库 ]命令来更新图像');
                }
            });
        }
    }
}
