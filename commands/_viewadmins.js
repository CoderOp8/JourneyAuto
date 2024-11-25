/*CMD
  command: /viewadmins
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/


  // Retrieve the admin list from stored properties
  var adminList = Bot.getProperty("adminList", []); // Default to an empty list if none exists

  if (adminList.length == 0) {
    // If the list is empty
    Bot.sendMessage("📂 *No admins found in the list.*");
  } else {
    // Create a numbered list of admins
    var numberedList = adminList.map((item, index) => (index + 1) + ". " + item);
    Bot.sendMessage("📋 *Admins List:*\n\n" + numberedList.join("\n"));
  }



