const config = require('../../config/config.json');
const Discord = require('discord.js');

var fs = require('fs');
var request = require('request');

module.exports = async msg => {
    // What to do if the Pokécord bot talks
    if (msg.author.id == config.pokecord.id) {
        // CASE: p!info has been called by a user
        if (msg.embeds.length > 0) {
            message = msg.embeds[0];
            imageURL = message.image.url;
            console.log(message);
        }
    }

    const bot = msg.client;
    const args = msg.content.split(` `);
    const command = args.shift().slice(config.prefix.length);
};