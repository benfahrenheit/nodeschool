module.exports = (message, importance = message.length) =>
message + "!".repeat(importance)