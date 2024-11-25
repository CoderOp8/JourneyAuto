/*CMD
  command: /broadd
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🔈 Enter The Message Or Something To Broadcast
  keyboard: 💢 Menu
  aliases: 
  group: 
CMD*/

var fullBotUsers = Bot.getProperty("wholeUsers")
if (message.length > 10000) {
  Bot.sendMessage("Message Is Too Big.")
 Bot.runCommand("Broadcastt") 
return
}
for (var index in fullBotUsers) {
  var info = fullBotUsers[index]
  var polll = [[{text:"🎤 Talk to Admin", callback_data:"/replyadmin_sos"}]]  
  Api.sendMessage({
    chat_id: info,
    text: "✨ Info From Bot:\n\n"+message+"",
    parse_mode: "HTML", 
    disable_web_page_preview: true
  })
}
Bot.sendMessage("*✅ Broadcast Sent*")
