//Codigo hecho por ivan 

import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    // Comprobamos si no se ha pasado el código de país
    if (!args[0]) return conn.reply(m.chat, `🚩 Ingrese el código de país. Ejemplo:\n> *${usedPrefix + command}* +58`, m, rcanal);

    await m.react('🕓');
    try {
        // Llamamos a la API para obtener la información del país
        const response = await fetch(`https://api.dorratz.com/v2/pais/${args[0]}`);
        if (!response.ok) throw new Error('Error al obtener datos');

        // Procesamos JSON
        const data = await response.json();

        // Creamos el mensaje con la información del país
        let txt = '`乂  I N F O R M A C I Ó N  -  P A Í S`\n\n'
        txt += `  ✩   *Nombre* : ${data.nombre}\n`;
        txt += `  ✩   *Código* : ${data.código}\n`;
        txt += `  ✩   *Bandera* : ${data.bandera}\n`;
        txt += `  ✩   *Capital* : ${data.capital}\n`;
        txt += `  ✩   *Moneda* : ${data.moneda}\n`;
        txt += `  ✩   *Continente* : ${data.continente}\n`;
        txt += `  ✩   *Población* : ${data.población}\n`;
        txt += `  ✩   *Área* : ${data.área} km²\n`;
        txt += `  ✩   *Idioma Oficial* : ${data.idioma_oficial}\n`;
        txt += `  ✩   *Código ISO* : ${data.código_iso}\n`;
        txt += `  ✩   *Región* : ${data.región}\n`;
        txt += `  ✩   *Fiesta Nacional* : ${data.fiestanacional}\n`;
        txt += `  ✩   *Clima* : ${data.clima}\n`;
        txt += `  ✩   *Recursos Naturales* : ${data.recursos_naturales}\n`;
        txt += `  ✩   *Economía* : ${data.economía}\n`;
        txt += `  ✩   *Exportaciones* : ${data.exportaciones}\n`;
        txt += `  ✩   *Importaciones* : ${data.importaciones}\n`;
        txt += `  ✩   *Turismo* : ${data.turismo}\n`;
        txt += `  ✩   *Himno Nacional* : ${data.himno_nacional}\n`;
        txt += `  ✩   *Mitos y Leyendas* : ${data.mitos_leyendas}\n`;
        txt += `  ✩   *Gastronomía* : ${data.gastronomía}\n`;

        // Enviamos el mensaje al chat
        await conn.reply(m.chat, txt, m, rcanal);
        await m.react('✅');
    } catch (error) {
        await m.react('✖️');
        conn.reply(m.chat, `⚠️ Error: ${error.message}`, m);
    }
};

handler.help = ['infonumber *<código país>*'];
handler.tags = ['información'];
handler.command = ['infonumber']; // Aquí puedes agregar otros comandos si lo deseas
handler.register = true;

export default handler;