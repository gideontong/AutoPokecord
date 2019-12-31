# AutoPokecord

**Please note that this codebase no longer actively maintained. If you would like to contribute to it, please create a pull request. Thank you!**

Auto Pokécord is a Discord bot that automatically detects and catches Pokémon in Pokécord-enabled Discord servers, as well as automatically levels up Pokémon in channels designated as spam.

However, it is to note that the Discord bot was never finished, and was never intended to work as an auto-catcher, since Pokecord itself is not designed to respond to bots. You can get it this working simply by providing a Discord API key in `config/config.json` and then running the following commands on Node 10.x or newer:

```bash
npm install
npm run dev
```

Should there ever be an update to Pokecord in which you need to download new Pokemon, you can run

```bash
npm run update
```

in the command line.

It is important to note that this code repository is no longer maintained, and the codebase was never finished. I am releasing this prior to the start of the 2020 New Year as a gift since it has been a long time since I have worked on this, and have no idea how much of it would still work with the current update of Pokecord.