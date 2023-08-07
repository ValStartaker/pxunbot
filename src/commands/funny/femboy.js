const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("femboy")
        .setDescription("posts the femboy gif"),
    async execute(interaction) {
        await interaction.reply("https://cdn.discordapp.com/attachments/203565083421442048/1137201273037406229/femboy.gif");
    },
};
