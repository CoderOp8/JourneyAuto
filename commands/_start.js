/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var fullBotUsers = Bot.getProperty("wholeUsers",[])
var already = User.getProperty("already")
if (!already) {
  fullBotUsers.push(user.telegramid)
var views = Libs.ResourcesLib.anotherChatRes("views","global")
views.add(1)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
User.setProperty("already", user.telegramid, "text")}

let DnT = new Date().toLocaleString("en-US" , {
  timeZone: "Asia/kolkata"
})
let admin = Bot.getProperty("admin" + user.telegramid)
if (admin == "ADMIN"){

Bot.sendKeyboard("📩 Send Message\n🔔 Join Chats,🔕 Leave Chats\n👀 Views,💥 React\nℹ️ Info","*✅ Dashboard *")
}else{
var polll = [[{text:"🔴 Request Approval", callback_data:"/sendreqad"}]]  
var u = user.telegramid
  Api.sendMessage({
    chat_id: u,
    text: "🤦🏻‍♂ You Are Not Approved \n\nGrant Acess From @Abhishek123345\nYour UID: "+user.telegramid+"",
    parse_mode: "HTML", 
    disable_web_page_preview: true, 
    reply_markup:{inline_keyboard: polll}
  })
}


