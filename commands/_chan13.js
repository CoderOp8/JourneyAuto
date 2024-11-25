/*CMD
  command: /chan13
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ❓ How Many Members Need To Leave
  keyboard: 
  aliases: 
  group: 
CMD*/

var type = User.getProperty("type")
var ty = User.getProperty("chann")
Bot.sendMessage("*/leave_chats\nmax_perf=True\nchats="+ty+"\ncount="+message+"*")
