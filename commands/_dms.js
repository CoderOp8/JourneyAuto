/*CMD
  command: /dms
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var welcome = User.getProperty("welcome")
if (welcome == undefined) {

var msg = User.getProperty("dms")

Bot.sendMessage("*/send_message\nmax_perf=True\nusername="+message+"\ncount=10\nmessage="+msg+"*")
var uid = ("["+user.telegramid+"](tg://openmessage?user_id="+user.telegramid+")")
Api.sendMessage({
        chat_id: "@A_HASH_O",
        text:
          "DEMO USED BY ℹ️ UID : "+uid+"\n\n💥 Message: "+msg+"\n\n👀 To : "+message+"\n\n✅ Count : 10",
        parse_mode: "Markdown"
     })
User.setProperty("welcome", user.telegramid, "text")
return 
}
Bot.sendMessage("✨ Free Demo Available Once Only\n\nPurchase For Unlimited Feedbacks From @Abhishek123345")
