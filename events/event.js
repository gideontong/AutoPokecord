const reqEvent = (event) => require(`./package/${event}`)
module.exports = bot => {
    bot.on("message", reqEvent("message"));
}