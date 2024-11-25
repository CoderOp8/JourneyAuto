/*CMD
  command: /demo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/



var polll = [[{text:"📨 Send Feedback", callback_data:"/send1feed"}]]  
  Api.sendMessage({
    chat_id: params,
    text: "🎁 You Have Received A Free Demo With 10 Accounts.",
    parse_mode: "HTML", 
    disable_web_page_preview: true, 
    reply_markup:{inline_keyboard: polll}
  })


var ul = "[" + params + "]" + "(" + "tg://user?id=" + params + ")"
Bot.sendMessage("✅ Sent 1 Free Demo To "+ul+" Successfully")
