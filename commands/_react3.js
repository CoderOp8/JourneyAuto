/*CMD
  command: /react3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
👀 Which Reaction?
Choose Only 1 From The Keyboard Or Send An Emoji Your Own
  ANSWER
  keyboard: ❤️,😍,😘,🔥,🥳,🤩,🤯,🤪,🤑,😻\n💢 Menu\n🤮,🤧,😷,🤒,😮‍💨,😵,💩,🤡,😈,🖕
  aliases: 
  group: 
CMD*/

let admin = Bot.getProperty("admin" + user.telegramid)
if (admin == "ADMIN"){
var react = User.getProperty("react")
var rcount = User.getProperty("rcount")
var username = User.getProperty("username")
Bot.sendKeyboard("💢 Menu","*/send_reaction\nlink="+react+"\nemoji="+message+"\ncount="+rcount+"\nmax_perf=True*")
}else{
Bot.sendMessage("⚠️ *Only Specific Users Can Access The Bot*\n\nRegards @CoderOp")
}
