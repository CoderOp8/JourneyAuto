/*CMD
  command: /stats
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var views = Libs.ResourcesLib.anotherChatRes("views","global")

Bot.sendMessage("👀 Total Users Of Bot :: `"+views.value().toFixed(0)+" `")

