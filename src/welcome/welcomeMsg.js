const Markup = require("telegraf/markup");
const announcement = `
⚠️請認真閱讀並同意以下規定⚠️
1. 本群鼓励并欢迎
    - 与 *疫情有关* 新闻 ✅
    - 与 *疫情有关* 新闻 ✅
    - 同城互助 ✅
2. 本群禁止：
    - 人身攻击 🚫
    - 危害他人或公共/私人财产 🚫
    - 与疫情无关的话题 🚫
    - 明显无来源的虚假信息 🚫
3. 投稿与放送事故提醒:
    - 需提前编辑内容 📝
    - 然后发送至: 📧 @mwonng
4. 本群连接：https://t.me/joinchat/OElQrFZiBp5If1A90UCnsg
`;
const title = "歡迎來到疫情交流群,請先查看置頂信息並了解群規";
const buttons = [
  Markup.callbackButton("本群規定", "GROUP_RULE"),
  Markup.urlButton("跳去水群", "https://t.me/joinchat/OElQrFKWIz_B1qtkNwE7qA")
];

function welcomeMsg(bot) {
  bot.on("new_chat_members", ctx => {
    bot.telegram.sendMessage(
      ctx.update.message.new_chat_participant.id,
      title,
      Markup.inlineKeyboard(buttons).extra()
    );
    //   .then(res => console.log(res))
    //   .catch(e => console.log(e));
  });
  bot.start(ctx =>
    ctx.reply(
      "歡迎來到疫情交流群,請先查看置頂信息並了解群規",
      Markup.inlineKeyboard([
        Markup.callbackButton("本群規定", "GROUP_RULE"),
        Markup.urlButton(
          "跳去水群",
          "https://t.me/joinchat/OElQrFKWIz_B1qtkNwE7qA"
        )
      ]).extra()
    )
  );
  bot.action("GROUP_RULE", ctx => {
    bot.telegram.sendMessage(ctx.update.callback_query.from.id, announcement);
    //   .then(res => console.log(res))
    //   .catch(e => console.log(e));
  });
  bot.action("REDIRECT_TO_CHAT", ctx => ctx.reply("okey"));
}

module.exports = welcomeMsg;
