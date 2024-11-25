/*CMD
  command: /panel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let admin = Bot.getProperty("owner" + user.telegramid)
if (admin == "ADMIN"){

let DnT = new Date().toLocaleString("en-US" , {
  timeZone: "Asia/kolkata"
})

var button = [[{title:"🔴 Admins List",command:"/viewadmins"}],[{title:"🔺 Add Admins",command:"/addadmins"},{title:"🔻 Remove Admins",command:"/rmvadmins"}],[{title:"📣 Broadcast",command:"/broadd"},{title:"📊 Stats",command:"/stats"},{title:"ℹ️ Info",command:"/setinfo"}],[{title:"💢  Refresh Accounts",command:"/sRef"}]]
Bot.sendInlineKeyboard(button,"*✅ ADMIN PANEL*\n\n⏱ Server Time: " + DnT + "")
}

