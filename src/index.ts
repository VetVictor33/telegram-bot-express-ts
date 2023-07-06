import 'dotenv/config'
import express from 'express'
import axios from './services/axios'

const app = express()
app.use(express.json())

const init = async () => {
  const res = await axios.get(`/setWebhook?url=${process.env.WEBHOOK_URL}`)
  console.log(res.data)
}

app.post('/', async (req, res) => {
  const {message} = req.body

  const chatId = message.chat.id
  const text = message.text

  await axios.post(`/sendMessage`, {
      chat_id: chatId,
      text: `${message.from.username}, ${text}`
  })
  return res.send()
})


const port = process.env.PORT || 81
app.listen(port, async () => {
  console.log(`App is running on port ${port}`)
  await init()
})
