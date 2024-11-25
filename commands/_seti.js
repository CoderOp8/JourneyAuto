/*CMD
  command: /seti
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let admin = Bot.getProperty("owner" + user.telegramid)
if (admin == "ADMIN"){

var info = Bot.setProperty("info", message)
Bot.sendMessage("✅ Info Updated.")
}
