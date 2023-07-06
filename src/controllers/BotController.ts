import { Request, Response } from "express"
import axios from "../services/axios"

export default class BotController{
  public async init () {
    return await axios.get(`/setWebhook?url=${process.env.WEBHOOK_URL}`)
  }
  public async repeat(req: Request, res: Response) {
    const {message} = req.body
    const {id: chatId} = message.chat
    const {text} = message
     await axios.post(`/sendMessage`, {
      chat_id: chatId,
      text: `${message.from.username}, ${text}`
  })
    return res.send()
  }
}