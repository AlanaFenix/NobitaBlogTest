import { Client, Message } from "discord.js";

function teste(client: Client, message: Message, args: []) {
    return message.channel.send(`yeah`)
}

export default teste;