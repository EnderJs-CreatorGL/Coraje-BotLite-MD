const handler = async (m, { conn, text }) => {
    const numberPattern = /\d+/g;
    let user = '';
    const numberMatches = text.match(numberPattern);
    if (numberMatches) {
        const number = numberMatches.join('');
        user = number + '@s.whatsapp.net';
    } else if (m.quoted && m.quoted.sender) {
        const quotedNumberMatches = m.quoted.sender.match(numberPattern);
        if (quotedNumberMatches) {
            const number = quotedNumberMatches.join('');
            user = number + '@s.whatsapp.net';
        } else {
        return conn.sendMessage(m.chat, {text: `☘️ *Mal uso del comando.*`}, {quoted: fkontak});
    }
    } else {
        return conn.sendMessage(m.chat, {text: `☘️ *Mal uso del comando.*`}, {quoted: fkontak});
    }        
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {};
        const participants = m.isGroup ? groupMetadata.participants : [];
        const users = m.isGroup ? participants.find(u => u.jid == user) : {};
        const userNumber = user.split('@')[0];
        if (!global.global.db.data.users[user] || global.global.db.data.users[user] == '') {
            return conn.sendMessage(m.chat, {text: `🥀 *Usuario @${userNumber} no esta en la database.*`, mentions: [user]}, {quoted: fkontak});
         }
        delete global.global.db.data.users[user];
        conn.sendMessage(m.chat, {text: `🌹 *Perfecto he borrado los datos del usuario: @${userNumber} de la database de Coraje-BotLite-MD.*`, mentions: [user]}, {quoted: fkontak});
};
handler.tags = ['owner'];
handler.command = ['restablecerdatos','deletedatauser','resetuser','data0'];
handler.rowner = true;
export default handler;
