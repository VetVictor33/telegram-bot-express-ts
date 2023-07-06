import { Request, Response } from "express"
import axios from "../services/axios"

export default class BotController{

  public async control(req: Request, res: Response) {
    const {message} = req.body
    const chatId = message.chat.id
    const command = message.text.split(' ')
    
    switch (command[0]) {
      case '/repeat':
        let text: string = message.text
        text = text.slice(text.indexOf(' '))
        await Bot.sendMessage(chatId, text)
        break;

      case '/scream':
        await Bot.sendMessage(chatId, 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa')
        break;
        
      default:
        const commands = ['/repeat', ' /scream']
        await Bot.sendMessage(chatId, `Lista de comandos: ${commands}`)
        break;
    }

    return res.send()
  }
}

abstract class Bot{
  public static async sendMessage(chatId: string, text: string) {
     await axios.post(`/sendMessage`, {
      chat_id: chatId,
      text: text || 'O q q vc disse aí, meu chape?'
  })
  }
}