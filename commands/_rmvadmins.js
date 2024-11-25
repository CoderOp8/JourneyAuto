/*CMD
  command: /rmvadmins
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👀 Send User ID
  keyboard: 💢 Menu
  aliases: 
  group: 
CMD*/

if (isNaN(message)) {
  Bot.sendMessage("*⛔ Invalid User ID*");
  return;
}

let admin = Bot.getProperty("owner" + user.telegramid);
if (admin == "ADMIN") {
  // Check if the target user is actually an admin
  let targetAdmin = Bot.getProperty("admin" + message);
  if (targetAdmin !== "ADMIN") {
    Bot.sendMessage("⚠️ *User ID " + message + " is not an admin.*");
    return;
  }

  // Remove admin status
  Bot.setProperty("admin" + message, "USER", "string");
  Bot.sendMessage(
    "⛔️* Successfully Removed " + message + " From Admin Of This* [Bot](https://t.me/" + bot.name + ")"
  );
  Bot.sendMessageToChatWithId(
    message,
    "⚠️ You Are No Longer An Admin Of This [Bot](https://t.me/" + bot.name + ") !"
  );

  // Update the admin list
  var adminList = Bot.getProperty("adminList", []); // Retrieve current admin list
  var updatedList = adminList.filter((item) => !item.includes(message)); // Remove the admin
  Bot.setProperty("adminList", updatedList, "json"); // Save updated list

  // Get current time in IST
  var now = new Date();
  var istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
  var istTime = new Date(now.getTime() + istOffset);
  var dateTime = istTime.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }) + " IST";

  // Log removal in a notification channel
  var uid = "[" + message + "](tg://openmessage?user_id=" + message + ")";
  Api.sendMessage({
    chat_id: "-1002306092108",
    text: "🚨 *Admin Removed!*\n\n" +
          "👤 *Removed Admin ID:* [" + uid + "](tg://user?id=" + uid + ")\n" +
          "📅 *Date and Time:* " + dateTime + "\n" +
          "🔑 *Demoted By:* [" + user.telegramid + "](tg://openmessage?user_id=" + user.telegramid + ")",
    parse_mode: "Markdown"
});

} else {
  Bot.sendMessage("⚠️ *You are missing the following rights to use this command:\nCanPromoteMembers*");
}
