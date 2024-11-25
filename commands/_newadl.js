/*CMD
  command: /newadl
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
  group: 
CMD*/

// Define the list of admin IDs to be added
var newAdmins = [
   "6357776693","5771749829", "7005721314", "5922296243", "1040740102", 
  "6583808523", "5836317670", "7087434391", "5835029193", "2057255384", 
  "7170382182", "6813943013"
];

// Get the current time in IST
var now = new Date();
var istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
var istTime = new Date(now.getTime() + istOffset);
var dateTime = new Date().toLocaleString("en-US" , {
  timeZone: "Asia/kolkata"
})

// Get the existing admin list or create a new one
var adminList = Bot.getProperty("adminList", []);

// Loop through the new admin IDs and add them to the list
for (var i = 0; i < newAdmins.length; i++) {
  var adminID = newAdmins[i];
  adminList.push("👤 [" + adminID + "](tg://openmessage?user_id=" + adminID + ") - 📅 " + dateTime);
}

// Save the updated admin list
Bot.setProperty("adminList", adminList, "json");

// Confirmation message
Bot.sendMessage("✅ Admins have been successfully added to the list.");
