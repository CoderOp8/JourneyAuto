/*CMD
  command: /usermsg
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📩 Send The Username To Send Message
  keyboard: 💢 Menu
  aliases: 
  group: 
CMD*/

User.setProperty("username",message)
Bot.runCommand("/speed2")
