const { SlashCommandBuilder, escapeMarkdown } = require("discord.js");
const { ipa2xsampa } = require("../../xsampa/xsampa-main.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ipa")
        .setDescription("converts ipa to xsampa")
        .addStringOption((option) =>
            option
                .setName("ipa-input")
                .setDescription("ipa input")
                .setRequired(true)
        ),
    async execute(interaction) {
        const ipaInput = await interaction.options.get("ipa-input").value;
        const xsampaOutput = ipa2xsampa(ipaInput);
        if (!xsampaOutput) {
            await interaction.reply("The value could not be passed.");
            return;
        }
        await interaction.reply(escapeMarkdown(xsampaOutput));
    },
};
