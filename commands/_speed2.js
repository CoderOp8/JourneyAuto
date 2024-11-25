/*CMD
  command: /speed2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
⚡ Choose The Speed Of The Work: ( In Seconds )
• Enter Or Choose From The Keyboard 
_Instant = All The Message Comes in 1 Second.
1 = Each 1 Second 1 Message 
60 = Each 1 Minute 1 Message _

  ANSWER
  keyboard: Instant\n1,2,5,10,20,30\n60,90,120,180\n240,300,360,420\n480,540,600\n💢 Menu
  aliases: 
  group: 
CMD*/

if (message == "Instant") {
Bot.runCommand("/cnrfm")
}else{
User.setProperty("speed",message)
Bot.runCommand("/cnrfm2")
}
