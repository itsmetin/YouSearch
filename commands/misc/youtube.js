const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
const config = require('../../config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('search')
        .addStringOption(option =>
            option
                .setName('suchbegriff')
                .setDescription(`Suchbegriff für die Suche (z.B. ${config.youtube['name']})`)
                .setRequired(true))
        .setDescription(`Sucht auf ${config.youtube.name}'s Youtube Account!`),
    async execute(interaction) {
        const searchTerm = interaction.options.getString('suchbegriff');

        try {
            // Hier kommt dein YouTube Data API Key
            const apiKey = config.youtube['api-key'];

            // Hier kommt der Kanal-Id von NexTab
            const channelId = config.youtube['channel-id'];

            // YouTube Data API-Endpoint für die Suche nach Videos auf einem bestimmten Kanal
            const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchTerm}&channelId=${channelId}&key=${apiKey}`;

            // API-Aufruf
            const response = await axios.get(apiUrl);

            // Extrahiere Videoinformationen
            const videos = response.data.items;

            // Baue die Antwort für den Discord-Bot
            let responseMessage = `Suchergebnisse für "${searchTerm}" auf ${config.youtube.name}'s Kanal:\n`;

            videos.forEach(video => {
                const title = video.snippet.title;
                const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;
                responseMessage += `[${title}](<${videoUrl}>)\n\n`;
            });

            // Sende die Antwort an den Discord-Server
            await interaction.reply(responseMessage);
        } catch (error) {
            console.error('Fehler bei der YouTube-Suche:', error);
            await interaction.reply('Es gab einen Fehler bei der Suche. Versuche es später erneut.');
        }
    },
};
