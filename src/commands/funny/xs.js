const { SlashCommandBuilder, escapeMarkdown } = require("discord.js");
const { xsampa2ipa } = require("../../xsampa/xsampa-main.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("xs")
        .setDescription("converts xsampa to ipa")
        .addStringOption((option) =>
            option
                .setName("xsampa-input")
                .setDescription("xsampa input")
                .setRequired(true)
        ),
    async execute(interaction) {
        const xsampaInput = await interaction.options.get("xsampa-input").value;
        const ipaOutput = xsampa2ipa(xsampaInput);
        if (!ipaOutput) {
            await interaction.reply("The value could not be passed.");
            return;
        }
        await interaction.reply(escapeMarkdown(ipaOutput));
    },
};
