import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, command, usedPrefix }) => {
if (!args || !args[0]) throw `${mg}𝐒𝐈 𝐃𝐄𝐒𝐄𝐀𝐒 𝐕𝐄𝐑 𝐔𝐍 𝐂𝐀𝐏Í𝐓𝐔𝐋𝐎\n𝐏𝐎𝐍 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎\n /Anime-shinka`
try {
let { thumbnail, video, title } = await youtubedl(args[0])
.catch(async () => await youtubedlv2(args[0]))
let link = await video['480p'].download()
const isY = /y(es)/gi.test(args[1])
const limitedSize = (isPrems || isOwner ? 350 : 200) * 3074
let isLimit = limitedSize < video['480p'].fileSize
if (!isY) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
╭─────────────┈⊷
│◦➛☘️✨𝐌𝐈𝐊𝐔_𝐁𝐎𝐓💫
╰┬────────────┈⊷
┌┤🥀𝐄𝐍 𝐔𝐍 𝐌𝐎𝐌𝐄𝐍𝐓𝐎 𝐋𝐄 𝐄𝐍𝐕𝐈𝐀𝐌𝐎𝐒 𝐒𝐔 𝐏𝐄𝐃𝐈𝐃𝐎🍃
│◦➛📚ᩭ✎𝐌𝐄𝐍Ú 𝐃𝐄 𝐒𝐄𝐑𝐈𝐄𝐒 
│◦➛📔ᩭ✎𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐧𝐨 𝐦𝐢 𝐂𝐚𝐩1 𝐀𝐋 12
│◦➛🍀ᩭ✎𝐓𝐄𝐌𝐏𝐎𝐑𝐀𝐃𝐀 1
│◦➛📚ᩭ✎𝚃𝙸𝚃𝚄𝙻𝙾:${title}
│◦➛📔ᩭ✎𝚄𝚁𝙻:${video['480p'].fileSizeH}
│◦➛🍃ᩭ✎${vs}
│◦➛🌱𝐎𝐅𝐂 𝐘𝐎𝐕𝐀𝐍𝐈☘️ 
╰────────────┈⊷`.trim(), m)
  
await conn.sendFile(m.chat, link, title + '.mp3', `
╭─────────────┈⊷
│◦➛☘️✨𝐌𝐈𝐊𝐔_𝐁𝐎𝐓💫
╰┬────────────┈⊷
┌┤🥀𝐒𝐈 𝐃𝐄𝐒𝐄𝐀𝐒 𝐕𝐄𝐑 𝐎𝐓𝐑𝐎 𝐂𝐀𝐏Í𝐓𝐔𝐋𝐎 
│◦➛🍀ᩭ✎𝐏𝐎𝐍 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 
│◦➛🍀ᩭ✎ /Anime-shinka
│◦➛📔ᩭ✎𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐧𝐨 𝐦𝐢 𝐂𝐚𝐩1 𝐀𝐋 12
│◦➛🍀ᩭ✎𝐓𝐄𝐌𝐏𝐎𝐑𝐀𝐃𝐀 1
│◦➛🍀ᩭ✎𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐀 𝐄𝐋 𝐂𝐀𝐏Í𝐓𝐔𝐋𝐎 𝐐𝐔𝐄 𝐐𝐔𝐈𝐄𝐑𝐄 𝐕𝐄𝐑 
│◦➛🌱𝐎𝐅𝐂 𝐘𝐎𝐕𝐀𝐍𝐈☘️  
╰────────────┈⊷
`.trim(), m, null, {
  
asDocument: 0
})
}catch(e){
m.reply(`${fg}𝐒𝐈 𝐄𝐋 𝐂𝐀𝐏𝐈𝐓𝐔𝐋𝐎 𝐍𝐎 𝐄𝐍𝐕𝐈𝐀𝐃𝐎 𝐏𝐔𝐄𝐃𝐄𝐒 𝐕𝐎𝐋𝐕𝐄𝐑 𝐀 𝐒𝐎𝐋𝐈𝐂𝐈𝐓𝐀𝐑𝐋𝐎 𝐃𝐄 𝐍𝐔𝐄𝐕𝐎`)
console.log(e)  
}
  
//let info = `☘️𝐓𝐔 𝐏𝐄𝐃𝐈𝐃𝐎 𝐅𝐔𝐄 𝐄𝐍𝐓𝐑𝐄𝐆𝐀𝐃𝐎 𝐂𝐎𝐍 É𝐗𝐈𝐓𝐎📚`.trim()
  
//conn.sendHydrated(m.chat, info, wm, null, md, '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
//['𝐆𝐑𝐔𝐏𝐎𝐒', '/grupos'],
//['𝐄𝐒𝐓𝐀𝐃𝐎', '.estado'],
//['𝑴𝑬𝑵𝑼', '/menu'], m,) 

}
handler.help = ['mp4', 'v'].map(v => 'playanime' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^play4?$/i
export default handler

