import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, args }) => {
if (!args[0]) return conn.reply(m.chat, " Ingresa el enlace de un video de pinterest", m)
    
try {
let api = await fetch(`https://deliriussapi-oficial.vercel.app/download/pinterestdl?url=${encodeURIComponent(args[0])}`)
let json = await api.json()
let { title, description, comments, likes, thumbnail, upload, author_name, username, followers, author_url, download } = json.data
let txt = `- *Titulo* ${title}
- *Descripcion* ${description}
- *Comentarios* ${comments}
- *Likes* ${likes}
- *Creado* ${upload}
- *Autor Name* ${author_name}
- *Autor Url* ${author_url}`
await conn.sendFile(m.chat, download.url, 'HasumiBotFreeCodes.mp4', txt, m)

} catch (error) {
console.error(error)
}}


handler.command = ['pinmp4']

export default handler