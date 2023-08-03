// Import .env
require("dotenv").config();

// Import Discord.js classes
const { Client, IntentsBitField } = require("discord.js");

// Create bot client with intents
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});


client.on("ready", (c) => {
    console.log(`${c.user.tag} is online.`);
});

let CronJob = require("cron").CronJob;
client.once("ready", () => {
    let schedule = new CronJob(
        "0 12 * * Fri",
        () => {
            const guild = client.guilds.cache.get(process.env.GUILD_ID);
            const channel = guild.channels.cache.get("956573057999335497");
            channel.send("IT'S FUCKING FEMBOY FRIDAY!!! https://tenor.com/view/happy-femboy-friday-friday-femboy-friday-klee-genshin-gif-22610775");
        },
        null,
        true
    );
});

client.on("interactionCreate", (interaction) => {
    if (interaction.isChatInputCommand()) {
        if (interaction.commandName === "hai") {
            interaction.reply("HAIII :333");
        }

        if (interaction.commandName === "choose") {
            const firstChoice = interaction.options.get("first-choice").value;
            const secondChoice = interaction.options.get("second-choice").value;
            Math.random() >= 0.5
                ? interaction.reply(`I choose... ${firstChoice}!!! :3`)
                : interaction.reply(`I choose... ${secondChoice}!!! :3`);
        }
    }
});

client.login(process.env.TOKEN);
