import Discord from 'discord.js';
import { config } from 'dotenv'
import databaseConnect from './providers/databaseProvider';
import blogManager from './structures/BlogManager'

config();
databaseConnect();

const client = new Discord.Client();


client.on('ready', () => {
    console.log(`[BOT] Online!`)
});

client.on('message', (message) => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(process.env.prefix!)) return;

    let commandBody = message.content.slice(process.env.PREFIX?.length).split(" ")
    let commandName = commandBody[0]
    let args = commandBody.slice(1)

    try {
        let command = require('./commands/' + commandName)
        command.default(client, message, args)
    } catch (error) {
        message.channel.send(`:x: Este comando não existe.`)
    }
})

client.login(process.env.TOKEN).catch((err) => console.log(err));