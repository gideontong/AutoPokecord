/*
 * update.js
 */

const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require('./config/config.json');
const package = require('./package.json')
bot.login(config.token);

require('./events/update.js')(bot);

bot.on("ready", function () {
    console.log('[Info] The Discord bot has begun startup...')
    console.log(`[Info] Connected to Discord as: ${bot.user.tag} with the id: ${bot.user.id}! Prefix: ${config.prefix}, branch: ${config.branch}, version: ${package.version}`)
    bot.user.setActivity('for Pokécord updates', { type: 'WATCHING' })
        .then(presence => console.log(`[Info] Activity set to ${presence.game ? presence.game.name : 'none'}`))
        .catch(console.error);
});