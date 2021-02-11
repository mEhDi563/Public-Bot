const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {
  
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
