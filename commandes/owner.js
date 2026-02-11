const { zokou } = require("../framework/zokou");
const { getAllSudoNumbers, isSudoTableNotEmpty } = require("../luckydatabase/sudo");
const conf = require("../set");

zokou({ nomCom: "owner", categorie: "Devs", reaction: "🚜" }, async (dest, zk, commandeOptions) => {
  const { ms, mybotpic } = commandeOptions;

  const thsudo = await isSudoTableNotEmpty();

  if (thsudo) {
    let msg = `My Super-User\nOwner Number:\n\n😎 @${conf.NUMERO_OWNER}\n\n------ other sudos -----\n`;

    let sudos = await getAllSudoNumbers();

    for (const sudo of sudos) {
      if (sudo) {
        const sudonumero = sudo.replace(/[^0-9]/g, "");
        msg += `- 💼 @${sudonumero}\n`;
      }
    }

    const ownerjid = conf.NUMERO_OWNER.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    const mentionedJid = sudos.concat([ownerjid]);

    await zk.sendMessage(dest, { image: { url: mybotpic() }, caption: msg, mentions: mentionedJid }, { quoted: ms });
  } else {
    const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + conf.OWNER_NAME + '\n' + 'ORG:undefined;\n' + 'TEL;type=CELL;type=VOICE;waid=' + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + '\n' + 'END:VCARD';
    await zk.sendMessage(dest, { contacts: { displayName: conf.OWNER_NAME, contacts: [{ vcard }] } }, { quoted: ms });
  }
});

zokou({ nomCom: "dev", categorie: "Devs", reaction: "🚜" }, async (dest, zk, commandeOptions) => {
  const { ms, mybotpic, repondre } = commandeOptions;

  const devs = [
    { nom: "SILA MD", numero: "255770208711" },
    { nom: "Rahmany", numero: "255760164530" },
  ];

  let message = "Uuhh Hellow These are the Dev's Contacts:\n\n";
  for (const dev of devs) {
    message += `----------------\n• ${dev.nom} : https://wa.me/${dev.numero}\n`;
  }

  const lien = mybotpic();
  try {
    if (lien.match(/\.(mp4|gif)$/i)) {
      await zk.sendMessage(dest, { video: { url: lien }, caption: message }, { quoted: ms });
    } else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
      await zk.sendMessage(dest, { image: { url: lien }, caption: message }, { quoted: ms });
    } else {
      if (repondre) repondre(lien);
      if (repondre) repondre("link error");
    }
  } catch (e) {
    console.log("🥵🥵 Menu erreur " + e);
    if (repondre) repondre("🥵🥵 Menu erreur " + e);
  }
});

zokou({ nomCom: "support", categorie: "Devs" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage } = commandeOptions;

  if (repondre) repondre("look on pm sir");
  await zk.sendMessage(auteurMessage, { text: "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f" }, { quoted: ms });
});

zokou({ nomCom: "developer", categorie: "General", reaction: "🚜" }, async (dest, zk, commandeOptions) => {
  const { ms, mybotpic, repondre } = commandeOptions;

  const devs = [
    { nom: "SILA MD", numero: "255770208711" },
    { nom: "Rahmani", numero: "255760164530" },
  ];

  let message = "*Holla Welcome to SILA MD here is the developer numbers:*\n\n";
  for (const dev of devs) {
    message += `----------------\n• ${dev.nom} : https://wa.me/${dev.numero}\n`;
  }

  const lien = mybotpic();
  try {
    if (lien.match(/\.(mp4|gif)$/i)) {
      await zk.sendMessage(dest, { video: { url: lien }, caption: message }, { quoted: ms });
    } else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
      await zk.sendMessage(dest, { image: { url: lien }, caption: message }, { quoted: ms });
    } else {
      if (repondre) repondre(lien);
      if (repondre) repondre("link error");
    }
  } catch (e) {
    console.log("🥵🥵 Menu erreur " + e);
    if (repondre) repondre("🥵🥵 Menu erreur " + e);
  }
});

                                                                                                         
