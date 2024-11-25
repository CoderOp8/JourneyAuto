/*CMD
  command: /setinfo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var info = Bot.getProperty("info")
Bot.sendKeyboard("💢 Menu","Enter The New Info\n\n Current Info:\n`"+info+"`")
Bot.runCommand("/seti")
