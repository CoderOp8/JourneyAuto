/*CMD
  command: /chan12
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ❓ How Many Members Need
  keyboard: 
  aliases: 
  group: 
CMD*/

var type = User.getProperty("type")
var ty = User.getProperty("chann")
Bot.sendMessage("*/join_chats\nmax_perf=True\nchats="+ty+"\ncount="+message+"*")
