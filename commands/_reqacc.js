/*CMD
  command: /reqacc
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
  var message_id = request.message.message_id;
  var chat_id = request.message.chat.id;

  // Delete the request message
  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  });
}

// Send approval message to the user
Api.sendMessage({
  chat_id: params,
  text: "✅ Your Request Has Been Approved By @Abhishek123345",
  parse_mode: "Markdown"
});

// Create the user's Telegram link
var ul = "[" + params + "]" + "(tg://user?id=" + params + ")";

// Notify the bot about the approval
Bot.sendMessage("✅ Approved " + ul + " as an admin.");

// Check if the user executing the command is an admin
let admin = Bot.getProperty("owner" + user.telegramid);
if (admin == "ADMIN") {
  
  // Add the approved user to the admin list
  Bot.setProperty("admin" + params, "ADMIN", "string");

  // Create a link to the new admin
  var uid = "[" + params + "](tg://openmessage?user_id=" + params + ")";

  // Get current time in IST (Indian Standard Time)
  var now = new Date();
  var istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
  var istTime = new Date(now.getTime() + istOffset);
  var dateTime = new Date().toLocaleString("en-US" , {
  timeZone: "Asia/kolkata"
})


  // Save admin ID and time to a list
  var adminList = Bot.getProperty("adminList", []); // Get existing list or create an empty one
  adminList.push("👤 " + uid + " - 📅 " + dateTime); // Add the new admin to the list
  Bot.setProperty("adminList", adminList, "json"); // Save the updated list

  // Notify the admin that the new admin was successfully added
  Bot.sendMessage("✅ Added " + ul + " as an Admin of this bot.");
  
  // Create a log message for the report channel
  Api.sendMessage({
    chat_id: "@ADM_REPORTS",
    parse_mode: "markdown",
    text: "🚨 *New Admin Approved!*\n\n" +
          "👤 *New Admin ID:* " + uid + "\n" +
          "📅 *Date and Time:* " + dateTime + "\n" +
          "🔑 *Approved By:* [" + user.telegramid + "](tg://openmessage?user_id=" + user.telegramid + ")"
  });

  // Send the new admin a message to confirm their status
  Bot.sendMessageToChatWithId(
    params,
    "✅ You have been approved as an admin! Please /start again to confirm."
  );
} else {
  // If the user doesn't have permission, send an error message
  Bot.sendMessage("⚠️*You are missing the following rights to use this command: CanPromoteMembers*");
}
