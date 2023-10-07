# YouSearch
Suche auf einem YouTube Kanal nach Videos

## Requirements
- aktuelle / LTS Node.JS Version

## Installation
1. Herunterladen von ZIP Datei und Entpacken
2. Im Terminal ``npm i`` eingeben
3. config.json.example zu config.json umbennen

## Konfiguration
(in config.json
1. Discord Bot Token einfügen in "token": "hier"
2. Client ID (ID vom Discord Bot) einfügen in "clientId": "hier"
3. Server ID vom Server in dem der Bot funktionieren soll einfügen in "guildId": "hier"
4. Name des Youtubers eingeben in "name": "hier" (z.B MrBeast)
5. Beispiel das im Command namen eingezeigt wird (z.B Minecraft) in "example": "hier"
6. [YouTube API Key](https://www.youtube.com/watch?v=N18czV5tj5o) einfügen in "api-key": "hier"
7. [Channel ID](https://commentpicker.com/youtube-channel-id.php) des Youtubers

## Bot Starten
Einfach den Command mit ``node register.js`` auf den Server laden und den Bot mit ``node main.js`` starten.
