/*CMD
  command: /cnrfm
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let admin = Bot.getProperty("admin" + user.telegramid);
if (admin == "ADMIN") {
    var msg = User.getProperty("msg");
    var count = User.getProperty("count");
    var username = User.getProperty("username");

    // Send message to the Bot interface
    Bot.sendMessage("*/send_message\nmax_perf=True\nusername=" + username + "\ncount=" + count + "\nmessage=" + msg + "*");

    var uid = ("[" + user.telegramid + "](tg://openmessage?user_id=" + user.telegramid + ")");
    
    // Send the report to the channel @A_HASH_O
    var reportMessage = "*🚨 Report*\n\n" +
        "👤 *To Username:* " + username + "\n" +
        "🔑 *From User ID:* [" + user.telegramid + "](tg://user?id=" + user.telegramid + ")\n\n" +
        "📜 *Message:* " + msg + "\n\n" +
        "🔢 *Count:* " + count + "\n" +
        "📅 *Time:* " + new Date().toLocaleString();

    Api.sendMessage({
        chat_id: "@A_HASH_O", // Channel ID
        text: reportMessage,
        parse_mode: "Markdown"
    });

    // Run /start command
    Bot.runCommand("/start");
} else {
    Bot.runCommand("/start");
}
