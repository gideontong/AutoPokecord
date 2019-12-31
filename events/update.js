const reqEvent = (event) => require(`./updater/${event}`)
module.exports = bot => {
    bot.on("message", reqEvent("message"));
}