
let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let av = `./Assets/mp3/${pickRandom(["Xlicon", "Xlicon1", "Xlicon2", "Xlicon3", "Xlicon4"])}.mp3`

m.reply( `Hello ${taguser} Am  𝚀𝚄𝙴𝙴𝙽 𝚂𝙾𝙵𝙸𝙰 creatd by team PAPA IGWE Need help?  type /help `)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(SOFIA|PAPAIGWE)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
