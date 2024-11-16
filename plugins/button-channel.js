import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async m => {
  const imageBuffer = await (await fetch('https://i.imgur.com/lR6QADZ.jpeg')).buffer()
  let imgurl = await uploadImage(imageBuffer)
  
  const messageContent = `
  ╭⭑⭑⭑★✪ 𝚀𝚄𝙴𝙴𝙽-𝚂𝙾𝙵𝙸𝙰 𝙼𝙳 ✪★⭑⭑⭑
  │ 📂 *BOT Name:* _𝚀𝚄𝙴𝙴𝙽-𝚂𝙾𝙵𝙸𝙰-MD_
  │ 📝 *Description:* _I'm 𝚂𝙾𝙵𝙸𝙰. A MultiDevice WhatsApp bot with rich features Created By 𝙿𝙰𝙿𝙰 𝙸𝙶𝚆𝙴 𝚃𝙴𝙲𝙷 𝙸𝙽𝙲._
  │ 👤 *Owner:* _𝙿𝙰𝙿𝙰𝙸𝙶𝚆𝙴_
  │ 🌐 *Channel:* https://whatsapp.com/channel/0029VartOqACMY0OUI2n350j
  ╰━━━━━━━━━━━━━━━━╯
  `.trim()
  const imageBuffer = await response.buffer()
      let imgurl = await uploadImage(imageBuffer)
      await conn.sendButton(m.chat,'Here is your Result', author, imgurl, [['MENU', `${usedPrefix}menu`]], null, [['WATCH ANIME', `https://ab-streamer.vercel.app`]], m)
}
handler.help = ['bchannel']
handler.tags = ['main']
handler.command = ['channel', 'bchannel']
export default handler
