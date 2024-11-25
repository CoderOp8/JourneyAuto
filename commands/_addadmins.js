/*CMD
  command: /addadmins
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👀 Send User Id
  keyboard: 💢 Menu
  aliases: 
  group: 
CMD*/

if (isNaN(message)) {
  Bot.sendMessage("*⛔ Invalid ID*");
  return;
}

let admin = Bot.getProperty("owner" + user.telegramid);
if (admin == "ADMIN") {
  // Set the target user as an admin
  Bot.setProperty("admin" + message, "ADMIN", "string");
  Bot.sendMessage("*✅ Done.*");

  // Notify the new admin
  var uid = "[" + message + "](tg://openmessage?user_id=" + message + ")";
  Bot.sendMessageToChatWithId(
    message,
    "✅ You Have Been Approved /start Again."
  );

  // Get the current UTC time and convert to IST
  var now = new Date();
  var istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
  var istTime = new Date(now.getTime() + istOffset);
  var dateTime = new Date().toLocaleString("en-US" , {
  timeZone: "Asia/kolkata"
})

  // Save admin ID and time to a list
  var adminList = Bot.getProperty("adminList", []); // Get existing list or create an empty one
  adminList.push("👤 " + uid + " - 📅 " + dateTime);
  Bot.setProperty("adminList", adminList, "json"); // Save the updated list

  // Notify the admin channel
  Api.sendMessage({
    chat_id: "@ADM_REPORTS",
    text: "🚨 *New Admin Added!*\n\n" +
          "👤 *Admin ID:* [" + uid + "](tg://user?id=" + uid + ")\n" +
          "📅 *Date and Time:* " + dateTime + "\n" +
          "🔑 *Promoted By:* [" + user.telegramid + "](tg://openmessage?user_id=" + user.telegramid + ")",
    parse_mode: "Markdown"
});
} else {
  Bot.sendMessage("⚠️ *You are missing the following rights to use this command:\nCanPromoteMembers*");
}
