const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("amogus")
        .setDescription("replies with YOU ARE THE SUS IMPOSTER"),
    async execute(interaction) {
        await interaction.reply("YOU ARE THE SUS IMPOSTER");
    },
};
