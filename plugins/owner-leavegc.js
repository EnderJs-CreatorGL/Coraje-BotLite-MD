let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let chat = global.db.data.chats[m.chat]
chat.welcome = false
await conn.reply(id, `🐕 
*"Aunque me voy, siempre estaré ahí, en cada rincón oscuro, luchando por lo que amo... porque el coraje no se mide por la ausencia del miedo, sino por lo que haces a pesar de él."* 🐾✨
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
