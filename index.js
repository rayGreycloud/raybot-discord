const Discord = require("discord.js");
const botConfig = require("./bot.config.json");

const bot = new Discord.Client({
  disableEveryone: true
});

bot.on("ready", async () => {
  console.log(`Bot is ready... ${bot.user.username}`);
  
  try {
    const link = await bot.generateInvite(["ADMINISTRATOR"]);
    console.log(link);
  } catch (err) {
    console.log(err.stack);
  }
});

bot.login(botConfig.token);

