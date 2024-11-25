/*CMD
  command: /shortcut
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

var button = [[{title:"▫️cPanel",command:"/panel"}]]
Bot.sendInlineKeyboard(button,"▫️Open Your Control Panel")
}

