/*CMD
  command: /viewc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👀 Enter The No.Of Views
  keyboard: 💢 Menu
  aliases: 👀 views
  group: 
CMD*/

var viewp = User.getProperty("viewp")
Bot.sendMessage("*/watch\nlink="+viewp+"\ncount="+message+"\nmax_perf=True*")
