/*CMD
  command: /sendreqad
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

function canRun() {
  var last_run_at = User.getProperty("last_run_at")
  if (!last_run_at) {
    return true
  }

  var minutes = (Date.now() - last_run_at) / 1000 / 60

  var minutes_in_day = 24 * 60
  var next = minutes_in_day - minutes
  var wait_hours = Math.floor(next / 60)
  next -= wait_hours * 60
  var wait_minutes = Math.floor(next)
  var seconds = Math.floor((next - wait_minutes) * 60)
  if (minutes < minutes_in_day) {
Api.answerCallbackQuery({
  callback_query_id: request.id, 
  text: "✨ Your Request Is Under Review , Wait For Conformation",
  show_alert: false
})
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}
    return
  }
  return true
}

if (!canRun()) {
  return
}
User.setProperty("last_run_at", Date.now(), "integer")

var polll = [[{text:"🔴 Reject", callback_data:"/reqdec "+user.telegramid+""},{text:"🟢 Aproove", callback_data:"/reqacc "+user.telegramid+""}],[{text:"✨ Send 1 Free Demo", callback_data:"/demo "+user.telegramid+""}]]

var u = user.telegramid
var ul = "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
var text = "◽️ New User Requested To Use The Bot Services:\n\n🙋‍♂ User : "+ul+"\n🪪 UID : "+user.telegramid+"\n\n⚠️ Note: By Clicking On '🟢 Aproove' "+ul+" can access the bot & (s)he will become an admin of this bot."
  Api.sendMessage({
    chat_id: 5771749829,
    text: text,
    parse_mode: "markdown", 
    disable_web_page_preview: true, 
    reply_markup:{inline_keyboard: polll}
  })
Api.sendMessage({
    chat_id: 6357776693,
    text: text,
    parse_mode: "markdown", 
    disable_web_page_preview: true, 
    reply_markup:{inline_keyboard: polll}
  })
Bot.sendMessage("✅ Your Request Has Been Submitted , Please Wait For Review")


if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}

