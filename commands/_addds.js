/*CMD
  command: /addds
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Id
  keyboard: 
  aliases: 
  group: 
CMD*/

if (user.telegramid == "6357776693") {
Bot.setProperty("owner" + message + "", "ADMIN", "string")
Bot.sendMessageToChatWithId(
    message,
    "✅ You Have Been Set As Owner , Enter /panel To Acess Owner Features."
  )
}
