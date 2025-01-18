const handler = async (m, {conn, isAdmin, groupMetadata }) => {
  if (isAdmin) return m.reply('*"¡No importa cuán grande sea el miedo, siempre lucho por proteger a mi familia, ayúdame a protegerlos!"* 🐾');
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  await m.react(done)
   m.reply('*"¡No importa cuán grande sea el miedo, siempre lucho por proteger a mi familia, ayúdame a protegerlos!"* 🐾');
    let nn = conn.getName(m.sender);
// conn.groupParticipantsUpdate(m.chat, [m.sender], 'demote');
  // await m.react(done)
  // m.reply('😹 *_LISTO, YA LE QUITE SU POWER_* 🤡, *_NO PODRÁ HACER NADA_* 😹😹');
     conn.reply('5491166401905@s.whatsapp.net', `🚩 *${nn}* se dio Auto Admin en:\n> ${groupMetadata.subject}.`, m, rcanal, );
  } catch {
    m.reply('❌ Ocurrio un error.');
  }
};
handler.tags = ['mods'];
handler.help = ['autoadmin'];
handler.command = ['autoadmin', 'corajeayuda', 'daleunapata','teayudo','violaracoraje'];
handler.mods = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
