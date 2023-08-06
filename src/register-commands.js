require("dotenv").config()
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
    {
        name: "hai",
        description: "replies with haiiii :333",
    },
    {
        name: "choose",
        description: "Chooses between two options. Separate options with a comma.",
        options: [
            {
                name:"first-choice",
                description: "The first choice",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name:"second-choice",
                description: "The second choice",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ]
    },
    {
        name: "xsampa",
        description: "converts xsampa to IPA.",
        options: [
            {
                name: "xsampa-input",
                description: "the input for xsampa",
                type: ApplicationCommandOptionType.String,
                required: true,
            }
        ]
    },
    {
        name: "femboy",
        description: "sends femboy gif",
    }
];

const rest = new REST({ version: "10"}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log("Registering slash commands...");
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID),
            { body: commands }
        )
        console.log("Slash commands registered.");

    }
    catch (error) {
        console.log(`Error: ${error}`);
    }
})();