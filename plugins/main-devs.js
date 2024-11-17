var handler = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let owners = '24160338758 - 𝐃𝐀𝐃𝐃𝐘 𝐈𝐆𝐖𝐄'; // Define owners variable

  let fkontak = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": "hey"
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  };

  let pp = './Assets/SOFIA.jpg';

  const cat = `*_QUEEN SOFIA_*

*_🔰 SOFIA 𝐃𝐄𝐕 wa.me/+24160338758 %dont_contact_me%_*

*---------------------*

*_ᴛʜᴇ ᴍᴏᴅᴇʀᴀᴛᴏʀ_*
*${owners}*`;

  await conn.sendFile(m.chat, pp, 'https://i.ibb.co/Btk5dcq/SOFIA.jpg', cat, fkontak);
};

handler.help = ['devi', 'igwe'];
handler.tags = ['info'];
handler.command = /^(igwe|devi)$/i;

export default handler;
    
