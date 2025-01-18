let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `✨ *EQUIPO DE AYUDANTES*
🤖 *Bot:* ${global.botname}
🌟 *Versión:* ${global.vs}

👑 *Propietario:*

• Solar
🤴 *Rol:* Propietario
📱 *Número:* wa.me/5492612721386
✨️ *GitHub:* https://github.com/EnderJs-CreatorGL/Coraje-BotLite-MD

🚀  *Colaboradores:*

• Zaphkiel Power
🦁 *Rol:* Developer
📱 *Número:* Wa.me/50558124470

• Ivan Mods
🐯 *Rol:* Contribuidor
📱 *Número:* Wa.me/595992667005

• Gaby family
💻 *Rol:* Soporte 
📱 *Número:* Wa.me/5493834258985
`
await conn.sendFile(m.chat, icons, 'yaemori.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `✨ Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono
}}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
