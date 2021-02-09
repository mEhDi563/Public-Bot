const Discord = require("discord.js");
const db = require("quick.db");
const { getInfo } = require("../../handler/XP.js");
const canvacord = require("canvacord");

exports.run = (client, message, args) => {
  const user = message.mentions.users.first() || message.author;

  if (user.id === client.user.id) {
    return message.channel.send("I on Level 999");
  }
  if (user.bot) {
    return message.channel.send("Bot don`t Have level :/");
  }
  let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0;
  const { level, remxp, levelxp } = getInfo(xp);
  if (xp === 0) {
    return message.channel.send(`${user.tag} Is Out of level`);
  }
  let card = new canvacord.Rank()
    .setUsername(user.username)
    .setDiscriminator(user.discriminator)
    .setLevel(level)
    .setCurrentXP(rem)
    .setFooter(`Level Of: ${user.username}`, client.user.displayAvatarURL())
    .setTimestamp();

  message.channel.send(card);
};
exports.help = {
  name: "rank",
  description: "Show user's rank",
  usage: "m!rank [mention user]",
  example: "m!rank @Mat#0001"
};

exports.conf = {
  aliases: [""],
  cooldown: 5
};
