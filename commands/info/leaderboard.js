const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {
  message.channel.send({embed:{color: "RED", description: "```diff\n"+"- Still on development."+"```"}});
};

exports.help = {
  name: "leaderboard",
  description: "Show's server leaderboard",
  usage: "m!leaderboard",
  example: "m!leaderboard"
};

exports.conf = {
  aliases: ["lb"],
  cooldown: 5
};
