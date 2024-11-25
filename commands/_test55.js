/*CMD
  command: /test55
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter Message
  keyboard: 
  aliases: 
  group: 
CMD*/

var uid = ("["+message+"](tg://openmessage?user_id="+message+")")
var old = Bot.getProperty("tr")
var mess = ""+old+"\n"+uid+""
var tr = Bot.setProperty("tr", message)
var tr = Bot.getProperty("tr")
Bot.sendMessage(""+tr+"")
