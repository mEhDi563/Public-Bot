const Discord = require("discord.js");
const db = require("quick.db");
const canvacord = require("canvacord");
const { addexp } = require("../../handler/xp.js");

exports.run = (client, message, args) => {
  const user = message.mentions.users.first() || message.author;

  if (user.id === client.user.id) {
    return message.channel.send("I on Level 999");
  }
  if (user.bot) {
    return message.channel.send("Bot don`t Have level :/");
  }
  let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0
  
  const { level, remxp, levelxp } = addexp(xp)
  
  let card = new canvacord.Rank()
    .setUsername(user.username)
    .setDiscriminator(user.discriminator)
    .setLevel(level)
    .setCurrentXP(remxp)
    .setRequiredXP(levelxp)
    .setStatus(user.presence.status)
    .setAvatar(user.displayAvatarURL({format: "png", size: 1024}));
  
  const img = card.build()
  .then(data => {
    const attachment = new Discord.MessageAttachment(data, "rank.png")
    
    message.channel.send(attachment);
  })
};
exports.help = {
  name: "level",
  description: "Show user's server level",
  usage: "m!level [mention user]",
  example: "m!level @Mat#0001"
};

exports.conf = {
  aliases: [""],
  cooldown: 5
};
