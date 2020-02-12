function who(bot) {
  bot.hears("/who", ctx => {
    ctx.reply(
      `You are: ${ctx.message.from.first_name} ${ctx.message.from.last_name}`
    );
    ctx.deleteMessage();
  });
}

module.exports = who;
