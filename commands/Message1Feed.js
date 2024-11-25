/*CMD
  command: Message1Feed
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// Define a list of prohibited words (this is an example, you can add more)

    var prohibitedWords = [
    // English offensive words
    "violence", "kill", "bomb", "terror", "abuse", "racism", "hate", "assault", "rape", 
    "murder", "mutilation", "bully", "suicide", "pimp", "drugs", "illegal", "pedophile", "threat", 
    "cheat", "scam", "fraud", "kill yourself", "shooting", "shoot", "slut", "bitch", "bastard", "whore", 
    "cunt", "dick", "pussy", "motherfucker", "fag", "faggot", "retard", "nigger", "nigga", "cocksucker", 
    "fuck", "fucking", "asshole", "douche", "prick", "twat", "cock", "tits", "boobs", "piss", "shit", 
    "bastards", "cum", "semen", "orgasm", "blowjob", "masturbation", "genitals", "testicles", "penis", 
    "vagina", "anal", "porno", "pornography", "fisting", "cunnilingus", "ass-fuck", "dildo", 
    "whorehouse", "hooker", "escort", "stripper", "exploited", "incest", "bestiality", "pedophilia",
    "molestation", "stalker", "abusive", "molester", "bullying", "hate speech", "self harm", "cutting", 
    "toxic", "toxic behavior", "idiot", "loser", "bitch ass", "dickhead", "retarded", "fool", "stupid", 
    "lame", "suck my dick", "shut the fuck up", "fuck you", "fuck off", "asshole", "asslick", "jackass", 
    "motherfucker", "bastard", "shithead", "dumbass", "shitface", "cockhead",

    // Hindi offensive words
    "kutta", "bhenchod", "madarchod", "randi", "chod", "gandu", "saala", "loda", "gandmar", "bhosdike", 
    "behen ki...", "chutiya", "lanat", "harami", "jhaag", "kaminay", "fuck", "sharmnaak", "neech", "bakra", 
    "churail", "kuchh nahi", "maaki", "pagal", "chutiya", "behen ki chut", "ma ki chut", "chamaar", 
    "maal", "matlab", "bhadwa", "sexy", "suicide", "tatti", "khota", "dum", "bawal", "bajra", "batameez"
];

    // Split the message by '|' character to check if it contains prohibited words
    var inputMessage = message; // The message received from the user

    // Function to check if the message contains any prohibited words
    function containsProhibitedWords(message) {
        // Loop through each prohibited word and check if it exists in the message
        for (var i = 0; i < prohibitedWords.length; i++) {
            if (message.toLowerCase().includes(prohibitedWords[i].toLowerCase())) {
                return true; // If any prohibited word is found, return true
            }
        }
        return false; // If no prohibited words are found, return false
    }

    // Check if the message contains any prohibited words
    if (containsProhibitedWords(inputMessage)) {
        // Get the user ID of the sender
        var userID = user.telegramid;
        
        // Notify the admins that this user has used a prohibited word
        var reportMessage = "⚠️ User " + "[" + userID + "](tg://user?id=" + userID + ") sent an offensive message:\n\n" + inputMessage;
        Bot.sendMessage("⛔ Your message contains offensive or prohibited content and cannot be processed.\n*⚠️You Are No Longer An Admin!*");
        Api.sendMessage({
            chat_id: "6357776693", // Admin ID 1
            text: reportMessage,
            parse_mode: "Markdown"
        });
        Api.sendMessage({
            chat_id: "5771749829", // Admin ID 2
            text: reportMessage,
            parse_mode: "Markdown"
        });

        // Remove the user from the admin list
        let admin = Bot.getProperty("owner" + user.telegramid);
        if (admin == "ADMIN") {
            let targetAdmin = Bot.getProperty("admin" + userID);
            if (targetAdmin == "ADMIN") {
                // Remove admin status
                Bot.setProperty("admin" + userID, "USER", "string");

                // Update the admin list
                var adminList = Bot.getProperty("adminList", []); // Retrieve current admin list
                var updatedList = adminList.filter((item) => !item.includes(userID)); // Remove the admin
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
                var uid = "[" + userID + "](tg://openmessage?user_id=" + userID + ")";
                Api.sendMessage({
                    chat_id: "-1002306092108", // Report channel ID
                    text: "🚨 *Admin Removed!*\n\n" +
                          "👤 *Removed Admin ID:* [" + uid + "](tg://user?id=" + userID + ")\n" +
                          "📅 *Date and Time:* " + dateTime + "\n" +
                          "🔑 *Demoted By:* [" + user.telegramid + "](tg://openmessage?user_id=" + user.telegramid + ")\n\n🚫 Reason : " + inputMessage,
                    parse_mode: "Markdown"
                });
            }
        }
    } else {
        // Allow the message if it doesn't contain prohibited content

        // Split the message by '|' character to check for unique words
        var messageParts = inputMessage.split("|");
        var uniqueParts = new Set(messageParts); // Set automatically removes duplicates

        // Check if the message has at least 5 different words
        if (uniqueParts.size >= 4) {
            User.setProperty("msg", inputMessage);
            User.setProperty("dms",message)
Bot.runCommand("/dms")
Bot.sendMessage("Send The Username To Receive Feedbacks")
        } else {
            Bot.sendMessage("🚫 Enter Atleast 5 Different Messages To Continue");
Bot.sendMessage("Send The Messages , Seperate The Messages By |\n\nEg: Hi|Hello|Free Demo|Thanks|Great")
            Bot.runCommand("Message1Feed");
        }
    }
