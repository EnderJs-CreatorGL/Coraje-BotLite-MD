import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {

if (!process.send) throw '*『✦』Reiniciar: node start.js*\n*『✦』Reiniciar: node index.js*'

if (conn.user.jid == conn.user.jid) {

const { key } = await conn.sendMessage(m.chat, {text: `*Ejecutando orden, Me estoy reiniciando*...`}, {quoted: m})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `Reiniciando...`, edit: key})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `By Coraje-BotLite-MD`, edit: key})
await conn.sendMessage(m.chat, {text: `*『🍀』Espere 15 segundos a mi reactivacion...*`, edit: key})

process.send('reset')
} else throw 'eh'
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart','coraje0', 'poweroff'] 
handler.rowner = true

export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
