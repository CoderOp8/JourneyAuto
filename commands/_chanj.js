/*CMD
  command: /chanj
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
🔈 Enter The Channel Links
: For 2 or more channels: @chan1|@chan2|@chan3
  ANSWER
  keyboard: 💢 Menu
  aliases: 🔔 join chats
  group: 
CMD*/

let admin = Bot.getProperty("admin" + user.telegramid)
if (admin == "ADMIN"){
User.setProperty("chann",message)
Bot.runCommand("/chan12")
}else{
Bot.sendMessage("⚠️ *Only Specific Users Can Access The Bot*\n\nRegards @CoderOp")
}
