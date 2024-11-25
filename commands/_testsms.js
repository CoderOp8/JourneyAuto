/*CMD
  command: /testsms
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Ente msg
  keyboard: 
  aliases: 
  group: 
CMD*/

// Define a list of offensive, illegal, or violent words/phrases
var prohibitedWords = [
    "violence", "kill", "bomb", "terror", "abuse", "racism", "hate", "sex", "assault", "rape", "murder", 
    "mutilation", "bully", "suicide", "pimp", "drugs", "illegal", "pedophile", "threat", "cheat", 
    "scam", "fraud", "kill yourself", "shooting", "shoot", "slut", "bitch", "bastard", "whore", 
    "cunt", "dick", "pussy", "motherfucker", "fag", "faggot", "retard", "nigger", "nigga", "cocksucker", 
    "fuck", "fucking", "asshole", "douche", "prick", "twat", "cock", "tits", "boobs", "piss", "shit", 
    "bastards", "cum", "semen", "orgasm", "blowjob", "masturbation", "genitals", "testicles", "penis", 
    "vagina", "anal", "porno", "pornography", "sex", "fisting", "cunnilingus", "ass-fuck", "dildo", 
    "whorehouse", "hooker", "escort", "stripper", "exploited", "incest", "bestiality", "pedophilia",
    "molestation", "stalker", "abusive", "molester", "bullying", "hate speech", "self harm", "cutting", 
    "toxic", "toxic behavior", "idiot", "loser", "bitch ass", "dickhead", "retarded", "fool", "stupid", 
    "lame", "suck my dick", "shut the fuck up", "fuck you", "fuck off", "asshole", "asslick", "jackass", 
    "motherfucker", "bastard", "shithead", "dumbass", "shitface", "cockhead"
];

// Split the input message by the '|' character to count the number of words
var inputMessage = message; // The message received from the user
var messageParts = inputMessage.split("|"); // Split the message by '|'

// Check if the parts are unique
var uniqueParts = new Set(messageParts); // Set automatically removes duplicates

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

// Check if the message contains prohibited words
if (containsProhibitedWords(inputMessage)) {
    Bot.sendMessage("⛔ Your message contains offensive or prohibited content and cannot be processed.");
} else if (uniqueParts.size === messageParts.length && messageParts.length >= 4) {
    // If there are 5 or more unique parts and no prohibited words, allow the message
    Bot.sendMessage("✅ Allowed");
} else {
    // If there are less than 5 unique parts, or any duplicate, it's not allowed
    Bot.sendMessage("🚫 Enter Atleast 5 Different Messages To Continue");
}
