export default {
  name: 'ping',
  category: 'General',
  execute: async (sock, msg) => {
    await sock.sendMessage(msg.key.remoteJid, {
      text: `╔════════════════════════════
║ 🏓 *PONG!*
╠═════════════════════════════════
║ ✅ LORD_OBITO-MD is online and responding!
║ 🚀 Fast and reliable as the North Wind ❄️
╚═════════════════════════════════`
    });
  }
};
