/*CMD
  command: /getreqq
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var polll = [[{text:"🔴 Request Approval", callback_data:"/sendreqad"}]]  
var u = user.telegramid
  Api.sendMessage({
    chat_id: u,
    text: "🤦🏻‍♂ You Are Not Approved \n\nGrant Acess From @Abhishek123345\nYour UID: "+user.telegramid+"",
    parse_mode: "HTML", 
    disable_web_page_preview: true, 
    reply_markup:{inline_keyboard: polll}
  })
