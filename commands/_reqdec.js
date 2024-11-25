/*CMD
  command: /reqdec
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}

Api.sendMessage({
        chat_id: params,
        text:
          "🚫 Your Request Has Been Declined By @Abhishek123345",
        parse_mode: "Markdown"
     })

var ul = "[" + params + "]" + "(" + "tg://user?id=" + params + ")"
Bot.sendMessage("✅ Rejected "+ul+"")
