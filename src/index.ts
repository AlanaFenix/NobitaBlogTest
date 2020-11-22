import { Client, Message } from 'discord.js'
import { config } from 'dotenv'
import databaseConnect from './providers/databaseProvider'
import blogManager from './structures/BlogManager'

config()
databaseConnect()

const client = new Client()

client.on('ready', () => {
    console.log(`[BOT] Online!`)
})

client.on('message', listenMessageForCommands)

function listenMessageForCommands(message: Message) {
    const evaluatedAsCommand = evaluateMessageAsCommand(message)

    if (evaluatedAsCommand) {

        const commandBody = message.content.slice(process.env.PREFIX?.length).split(" ")
        const commandName = commandBody[0]
        const args = commandBody.slice(1)

        try {
            const command = require('./commands/' + commandName)
            command.default(client, message, args)
        } catch (error) {
            message.channel.send(`:x: Este comando não existe.`)
        }
    }
}

function evaluateMessageAsCommand(message: Message) {
    return !message.author.bot
        && message.channel.type !== "dm"
        && message.content
        && message.content.startsWith(process.env.PREFIX!)
}

client.login(process.env.TOKEN).catch((err) => console.log(err))