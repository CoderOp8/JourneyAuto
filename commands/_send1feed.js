/*CMD
  command: /send1feed
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
Bot.runCommand("Message1Feed")
Bot.sendMessage("Send The Messages , Seperate The Messages By |\n\nEg: Hi|Hello|Free Demo|Thanks|Great")
