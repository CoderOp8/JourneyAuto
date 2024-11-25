/*CMD
  command: /cnrfm2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let admin = Bot.getProperty("admin" + user.telegramid)
if (admin == "ADMIN"){
var msg = User.getProperty("msg")
var count = User.getProperty("count")
var speed = User.getProperty("speed")
var username = User.getProperty("username")
Bot.sendMessage("*/send_message\nhold="+speed+"\nusername="+username+"\ncount="+count+"\nmessage="+msg+"*")
var uid = ("["+user.telegramid+"](tg://openmessage?user_id="+user.telegramid+")")
Api.sendMessage({
        chat_id: "@LEAVE_U",
        text:
          "ℹ️ UID : "+uid+"\n\n💥 Message: "+msg+"\n\n👀 To : "+username+"\n\n✅ Count : "+count+"",
        parse_mode: "Markdown"
     })
Api.sendMessage({
  chat_id: "@A_HASH_O",
  text:
    "<b>ℹ️ UID : "+user.telegramid+" "+user.first_name+"</a>\n\n💥 Message: "+msg+"\n\n👀 To : "+username+"\n\n✅ Count : "+count+"</b>",
  parse_mode: "html",
  disable_web_page_preview: true
})
Bot.runCommand("/start")
}else{
Bot.runCommand("/start")
}
