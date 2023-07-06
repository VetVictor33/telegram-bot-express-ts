import axios from "axios";
export default axios.create({
    baseURL: `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}`,
    timeout: 10000,
    headers: {'Content-Type': 'application/json'}
  });