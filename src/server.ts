import app from './app'
import axios from './services/axios'

const port = process.env.PORT || 81

const botConfig = async () => {
  const response = await axios.get(`/setWebhook?url=${process.env.WEBHOOK_URL}`)
  console.log(response.data)
}

app.listen(port, async () => {
  console.log(`App is running on port ${port}`)
  await botConfig()
})