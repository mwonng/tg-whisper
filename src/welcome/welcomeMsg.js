const Markup = require("telegraf/markup");
const announcement = `
⚠️請認真閱讀並同意以下規定⚠️
1. 本群鼓励并欢迎
    - 与疫情有关新闻及互助 ✅
    - 与疫区有关事实陈述 ✅
    - 为保护有效发言开启慢速模式
2. 本群禁止：
    - 人身攻击 🚫
    - 危害他人或公共/私人财产 🚫
    - 讨论与疫情无关的话题 🚫
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
  //   bot.on("new_chat_members", ctx => {
  //     const {
  //       id,
  //       first_name,
  //       last_name
  //     } = ctx.update.message.new_chat_participant;
  //     bot.telegram
  //       .sendMessage(
  //         ctx.update.message.new_chat_participant.id,
  //         title,
  //         Markup.inlineKeyboard(buttons).extra()
  //       )
  //       .then(
  //         console.log(
  //           `message sent to id: ${id} named ${first_name} ${last_name}`
  //         )
  //       )
  //       .catch(
  //         console.log(`failed sent to id: ${id} named ${first_name} ${last_name}`)
  //       );
  //   });

  bot.start(ctx => {
    ctx.deleteMessage();
    ctx.reply(
      "歡迎來到疫情交流群,請先查看置頂信息並了解群規",
      Markup.inlineKeyboard([
        Markup.callbackButton("本群規定", "GROUP_RULE"),
        Markup.urlButton(
          "跳去水群",
          "https://t.me/joinchat/OElQrFKWIz_B1qtkNwE7qA"
        )
      ]).extra()
    );
  });

  bot.action("GROUP_RULE", ctx => {
    const { id, first_name, last_name } = ctx.update.callback_query.from;
    bot.telegram
      .sendMessage(ctx.update.callback_query.from.id, announcement)
      .then(
        console.log(
          `[callback] message sent to id: ${id} named ${first_name} ${last_name}`
        )
      )
      .catch(e =>
        console.log(
          `[callback] failed sent to id: ${id} named ${first_name} ${last_name} with error:`,
          e
        )
      );
  });
}

module.exports = welcomeMsg;
