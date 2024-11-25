/*CMD
  command: /cus22
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Command
  keyboard: 
  aliases: 
  group: 
CMD*/

let admin = Bot.getProperty("owner" + user.telegramid)
if (admin == "ADMIN"){
Bot.sendMessage("*"+message+"*")
Bot.sendMessage("*"+message+"*")
Bot.sendMessage("*"+message+"*")
Bot.sendMessage("*"+message+"*")
}else{
Bot.sendMessage("⚠️ *Only Specific Users Can Access The Bot*\n\nRegards @CoderOp")
}
