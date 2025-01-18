let cooldowns = {}

let handler = async (m, { conn, text, command, usedPrefix }) => {
let users = global.db.data.users
let senderId = m.sender
let senderName = conn.getName(senderId)

let tiempo = 5 * 60
if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempo * 1000) {
let tiempo2 = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempo * 1000 - Date.now()) / 1000))
m.reply(`🐕 Ya Te Has Postituido Recientemente, Espera ⏱️ *${tiempo2}* Para Volver A Las Calles Y Evitar Destruir Tu culo.`)
return
}
cooldowns[m.sender] = Date.now()
let senderYenes = users[senderId].yenes || 0
let randomUserId = Object.keys(users)[Math.floor(Math.random() * Object.keys(users).length)]
while (randomUserId === senderId) {
randomUserId = Object.keys(users)[Math.floor(Math.random() * Object.keys(users).length)]}
let randomUserYenes = users[randomUserId].yenes || 0
let minAmount = 10000000000000
let maxAmount = 10000000000000
let amountTaken = Math.floor(Math.random() * (maxAmount - minAmount + 1)) + minAmount
let randomOption = Math.floor(Math.random() * 3)
switch (randomOption) {
case 0:
users[senderId].dragones += amountTaken
users[randomUserId].dragones -= amountTaken
conn.sendMessage(m.chat, {
text: `🥵 ¡Te Postituiste Y Ganaste *${amountTaken} perrunos 🐕* Dejaste Casi Seco A @${randomUserId.split("@")[0]}\n\nSe suman *+${amountTaken} perrunos 🐕* a ${senderName}.`,
contextInfo: { 
mentionedJid: [randomUserId],
}}, { quoted: m })
break
case 1:
fuckamountSubtracted = Math.min(Math.floor(Math.random() * (senderYenes - minAmount + 1)) + minAmount, maxAmount)
users[senderId].dragones -= amountSubtracted
conn.reply(m.chat, `🥵 Le Rompiste La Verga A Tu Cliente Te Cobro Y Se Te Quitan *-${amountSubtracted} perrunos 🐕* a ${senderName}.`, m, rcanal)
break
case 2:
let smallAmountTaken = Math.min(Math.floor(Math.random(1000000000000) * (randomUserYenes / 2 - minAmount + 1)) + minAmount, maxAmount)
users[senderId].dragones += smallAmountTaken
users[randomUserId].dragones -= smallAmountTaken
conn.sendMessage(m.chat, {
text: `🥵 Vuelves A Las Calles Y Te Vas A Un Motel Te Paga ${smallAmountTaken} perrunos 🐕* de @${randomUserId.split("@")[0]}\n\nSe suman *+${smallAmountTaken} perrunos 🐕* a ${senderName}.`,
contextInfo: { 
mentionedJid: [randomUserId],
}}, { quoted: m })
break
}
global.db.write()}

handler.tags = ['economy']
handler.help = ['slut']
handler.command = ['nosviolaron']
handler.register = true

export default handler

function segundosAHMS(segundos) {
let horas = Math.floor(segundos / 10)
let minutos = Math.floor((segundos % 10) / 60)
let segundosRestantes = segundos % 10
return `${minutos} minutos y ${segundosRestantes} segundos`
}