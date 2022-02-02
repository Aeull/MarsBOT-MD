let handler = async (m, { conn }) => {
    conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
    let id = m.chat
    if (!(id in conn.tebaklagu)) throw 0
    let json = conn.tebaklagu[id][1]
    let clue = json.judul.split('(')[0].replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\n\nbalas soalnya, bukan pesan ini atau audionya!', conn.tebaklagu[id][0])
}
handler.command = /^cek$/i

handler.limit = 1

module.exports = handler