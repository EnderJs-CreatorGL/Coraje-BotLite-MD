/* Código hecho por I'm Fz `
 - https/Github.com/FzTeis
*/

async function acc(longUrl) {
  try {
    const response = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`);
    return response.data;
  } catch (error) {
    console.error('Error al acortar el enlace:', error.message);
    return longUrl;
  }
}
const getDownloadLinks = async (url) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const downloads = {};
    $('table.table-downloads tbody tr').each((_, element) => {
      const server = $(element).find('td:nth-child(2)').text().trim();
      const link = $(element).find('td:nth-child(4) a').attr('href');

      if (server && link) {
        downloads[server] = link;
      }
    });
    return downloads;
  } catch (error) {
    console.error('Error al procesar la URL:', url, error.message);
    return { error: 'No se pudieron obtener los enlaces' };
  }
};

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
  if (!args[0]) throw `*\`🐕 Ingresa el link del anime para obtener información. Ejemplo:.\`*\n\n\`${usedPrefix+command} https://tioanime.com/ver/dungeon-meshi-1\`\n\n> Nota: En el comando #animes no da los links completos pq son muy largos y por éso usé un acortador, pero igualmente sirven.`

  const links = await getDownloadLinks(args[0]);

  if (links.error) throw links.error;

  let messageText = `🐾\n\n\`• 𝐋𝐢𝐬𝐭𝐚 𝐝𝐞 𝐨𝐩𝐜𝐢𝐨𝐧𝐞𝐬 𝐩𝐚𝐫𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫:\n\n`;

  for (const [server, link] of Object.entries(links)) {
   // const shortLink = await acc(link); 
    messageText += `👨‍💻 *\`𝐒𝐞𝐫𝐯𝐢𝐝𝐨𝐫:\`* ${server}\n  🔗 *\`𝐋𝐢𝐧𝐤:\`* ${link}\n─ׄ─ׄ─⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׅ─⭒─ׄ─ׄ─\n`;
  }
  messageText += `\n> Para descargar, usa el comando respectivo al servidor.\n`
  messageText += `\n\`🐾Nota: Los links no siempre pueden funcionar si son muy viejos.\``;
  await conn.sendMessage(m.chat, { text: messageText }, { quoted: m });
}

handler.command = handler.help = ['animedl', 'animelinks'];
handler.tags = ['descargas'];
export default handler;