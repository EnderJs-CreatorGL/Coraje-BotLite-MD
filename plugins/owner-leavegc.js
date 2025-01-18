let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let chat = global.db.data.chats[m.chat]
chat.welcome = false
await conn.reply(id, `🐕 
**¡¿De verdad esperan que enfrente esto?! ¡Que se vayan todos al carajo! Yo no nací para esto, ¡me largo antes de que esa cosa me atrape!"* 🐾💥
`) 
await conn.groupLeave(id)
try {  
chat.welcome = true
} catch (e) {
await m.reply(`${fg}`) 
return console.log(e)
}}
handler.command = ['salir','leavegc','salirdelgrupo','leave']
handler.group = true
handler.rowner = true
export default handler
