/*CMD
  command: /msgcount
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ❓ How Many Should Send Message
  keyboard: 20,25,30\n40,45,50\n💢 Menu
  aliases: 
  group: 
CMD*/

User.setProperty("count",message)
Bot.runCommand("/usermsg")
