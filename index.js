require("dotenv").config();

const Telegraf = require("telegraf");
const who = require("./src/hears/who");
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start(ctx => ctx.reply("Welcome"));
bot.help(ctx => ctx.reply("Send me a sticker"));

bot.command("wow", ctx => ctx.reply("you are wow"));
bot.on("sticker", ctx => ctx.reply("👍"));
bot.on("new_chat_members", ctx => ctx.reply("Welcome msg here"));
bot.hears("hi", ctx => ctx.reply("Hey there"));
who(bot);

bot.launch();
