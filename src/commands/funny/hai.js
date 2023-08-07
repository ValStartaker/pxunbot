const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hai")
        .setDescription("replies with haiiii :333"),
    async execute(interaction) {
        await interaction.reply("HAIII :333");
    },
};
