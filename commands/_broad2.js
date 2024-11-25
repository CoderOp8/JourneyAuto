/*CMD
  command: /broad2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (user.telegramid == "6357776693"){

  var broadcast = Bot.getProperty("Broadcast")

  for (var i in broadcast) {
    Api.sendMessage({
      chat_id: broadcast[i],
      text: message,
      parse_mode: "html"
    })
  }

  var text =
    "*✅ Broadcast done successfully*\n\n" + inspect(broadcast) + ""

  Api.sendMessage({
    text: text,
    parse_mode: "Markdown"
  })
} else {
  var notAdminText = "<i>⚠️ You are not admin of @" + bot.name + ".</i>"

  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  })
}
}
