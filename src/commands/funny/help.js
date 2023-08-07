const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("shows all available commands"),
    async execute(interaction) {
        const helpEmbed = new EmbedBuilder()
        .setColor("Red")
        .setTitle("help")
        .setDescription("all available commands! :3")
        .setThumbnail("https://cdn.discordapp.com/attachments/1138233876221796376/1138245828595699812/mebee.png")
        .addFields(
            { name: "help", value: "shows all available commands"},
            { name: "hai", value: "replies with haiii! :3"},
            { name: "femboy", value: "shows the funny femboy gif"},
            { name: "xs", value: "converts xsampa to ipa"},
            { name: "ipa", value: "converts ipa to xsampa"},
        )
        await interaction.reply({ embeds: [helpEmbed]})

    },
};
