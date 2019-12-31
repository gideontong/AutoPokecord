const config = require('../../config/config.json');
const Discord = require('discord.js');

const fs = require('fs');

module.exports = async msg => {
    // What to do if the Pokécord bot talks
    if (msg.author.id == config.pokecord.id) {
        // CASE: p!info has been called by a user
        if (msg.embeds.length > 0 && msg.embeds[0].author.name == 'Professor Oak' && msg.embeds[0].title.substring(0, 4) == 'Base') {
            message = msg.embeds[0];
            name_data = message.title.substring(15, message.title.length - 1);
            last_space = name_data.lastIndexOf(' ');
            name = name_data.substring(0, last_space);
            dex = parseInt(name_data.substring(last_space + 2));
            image = message.image.url;
            data = "\n" + name + "," + dex + "," + image
            fs.appendFile('./config/pokemon.csv', data, function (err) {
                if (err) {
                    console.log('Something went wrong!', err);
                } else {
                    console.log("Writing", name, "with Pokédex ID", dex, "complete!");
                }
            });
        }
    }

    const bot = msg.client;
    const args = msg.content.split(` `);
    const command = args.shift().slice(config.prefix.length);
};