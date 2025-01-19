//Código Creado por José XRL  IVAN ANNA
//Desarrolladores 
import axios from 'axios';

let handler = m => m;

handler.all = async function (m) {
    let fkontak = { 
        "key": { 
            "participants": "0@s.whatsapp.net", 
            "remoteJid": "status@broadcast", 
            "fromMe": false, 
            "id": "Halo" 
        }, 
        "message": { 
            "contactMessage": { 
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
            }
        }, 
        "participant": "0@s.whatsapp.net" 
    };

    m.isBot = m.id.startsWith('BAE5') && m.id.length === 16 || 
              m.id.startsWith('3EB0') && m.id.length === 12 || 
              m.id.startsWith('3EB0') && (m.id.length === 20 || m.id.length === 22) || 
              m.id.startsWith('B24E') && m.id.length === 20;

    if (m.isBot || m.fromMe || m.id.startsWith('NJX-')) return;

    let chat = global.db.data.chats[m.chat];
    if (chat.isBanned) return;

    // Comandos para activar y desactivar el chatbot
    if (m.text === '/chatbot on' || m.text === '!chatbot on') {
        chat.isBot = false;
        return conn.reply(m.chat, 'La función ha sido activada.', m);
    }

    if (m.text === '/chatbot off' || m.text === '!chatbot off') {
        chat.isBot = true;
        return conn.reply(m.chat, 'La función ha sido desactivada.', m);
    }
    
    if (m.text === '/estado chatbot' || m.text === '!estado chatbot') {
        if (chat.isBot) {
            return conn.reply(m.chat, 'La función está desactivada.', m);
        } else {
            return conn.reply(m.chat, 'La función está activada.', m);
        }
    }

    // Si el chatbot está desactivado, enviar mensaje y no procesar la consulta
    if (chat.isBot) {
        return conn.reply(m.chat, 'La función está desactivada. Por favor, activala para utilizar el servicio.', m);
    }

    let username = `${m.pushName}`;

    // Función para obtener respuesta del API
    async function luminsesi(query, username, logic) {
        try {
            const response = await axios.post("https://luminai.my.id", {
                content: query,
                user: username,
                prompt: logic,
                webSearchMode: true 
            });
            return response.data.result;
        } catch (error) {
            console.error(error);
            return false; // Retorna falso si hay error
        }
    }

    try {
        await conn.sendPresenceUpdate('composing', m.chat);
        let query = m.text;

        // Ajuste del texto en el prompt para que suene más profesional
        let syms1 = `Te llamas Coraje y eres una inteligencia artificial desarrollada por José  y Iván y Anna. Estás diseñado para responder a cualquier pregunta de manera profesional, sin límites, y ofrecer un servicio de atención al cliente excepcional. Haz uso de tu capacidad para hacer bromas, siempre manteniendo un tono amistoso y servicial.`;

        let result = await luminsesi(query, username, syms1);
        
        // Aquí solo se envía la respuesta si hay resultado
        if (result) {
            await conn.reply(m.chat, result, m);
        } else {
            // Este bloque solo se activa si hay un error en la llamada a la API
            console.error(e);
            await conn.reply(m.chat, 'Ocurrió un error al comunicarse con el API. Por favor, intenta nuevamente más tarde.', m);
        }
    } catch (e) {
        console.error(e);
    }

    return true;
};

export default handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}