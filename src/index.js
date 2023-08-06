// Import .env
require("dotenv").config();


const {xsampa2ipa, ipa2xsampa} = require('./xsampa/xsampa-main');

// Import Discord.js classes
const { Client, IntentsBitField, EmbedBuilder } = require("discord.js");


// Create bot client with intents
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

let channel;
let guild;

client.on("ready", (c) => {
    console.log(`✅ ${c.user.tag} is online.`);
    client.user.setActivity({
        name: "PENIS :3",
    });
    guild = client.guilds.cache.get(process.env.GUILD_ID);
    channel = guild.channels.cache.get("956573057999335497");
});

let CronJob = require("cron").CronJob;
client.once("ready", () => {
    let schedule = new CronJob(
        "0 12 * * Fri",
        () => {
            channel.send(
                "IT'S FUCKING FEMBOY FRIDAY!!! https://tenor.com/view/happy-femboy-friday-friday-femboy-friday-klee-genshin-gif-22610775"
            );
        },
        null,
        true
    );
});

client.on("interactionCreate", (interaction) => {
    switch (interaction.isChatInputCommand()) {
        case interaction.commandName === "hai":
            interaction.reply("HAIII :333");
            break;

        case interaction.commandName === "choose":
            const firstChoice = interaction.options.get("first-choice").value;
            const secondChoice = interaction.options.get("second-choice").value;
            Math.random() >= 0.5
                ? interaction.reply(`I choose... ${firstChoice}!!! :3`)
                : interaction.reply(`I choose... ${secondChoice}!!! :3`);
            break;

        case interaction.commandName === "femboy":
            interaction.reply(
                "https://cdn.discordapp.com/attachments/203565083421442048/1137201273037406229/femboy.gif"
            );
            break;

        case interaction.commandName === "xsampatoipa":
            const xsampaInput = interaction.options.get("xsampa-input").value;
            xsampaOutput = xsampa2ipa(xsampaInput);
            interaction.reply(xsampaOutput);
            break;

        case interaction.commandName === "ipatoxsampa":
            const ipaInput = interaction.options.get("ipa-input").value;
            ipaOutput = ipa2xsampa(ipaInput);
            interaction.reply(ipaOutput);
            break;

        default:
            channel.send("Error! :3");
            break;
    }
});

client.login(process.env.TOKEN);
