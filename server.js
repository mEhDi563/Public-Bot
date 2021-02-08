const Discord = require("discord.js");
const tutorialBot = require("./handler/Client.js"); // We're gonna create this soon.
const client = new tutorialBot();

require("./handler/Module.js")(client);
require("./handler/Event.js")(client);
require('dotenv').config(); // npm install dotenv
client.on("ready", () => {
  console.log(client.user.username + " is ready!")
  
  client.user.setStatus("idle");
})
client.on("warn", console.warn); // This will warn you via logs if there was something wrong with your bot.
client.on("error", console.error); // This will send you an error message via logs if there was something missing with your coding.
setInterval(async () => {
  await fetch("https://matl-public-bot.glitch.me")
}, 5000)
client.login(process.env.SECRET).catch(console.error); // This token will leads to the .env file. It's safe in there.