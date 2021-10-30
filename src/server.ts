import compression from 'compression'
import express, { Express } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import * as googleTTS from 'google-tts-api' // ES6 or TypeScript
import { PORT } from './config'

interface RequestData {
  msg: string
  language: string
}

const main = async (): Promise<void> => {
  const app: Express = express()

  // Middleware
  app.use(helmet())
  app.use(cors())
  app.use(compression())
  app.use(express.json({ limit: '60mb' }))
  app.use(express.urlencoded({ extended: false }))

  app.post(
    '/base64',
    async (req, res): Promise<void> => {
      const { msg, language } = req.body as RequestData
      const b64 = await googleTTS.getAudioBase64(msg, {
        lang: language,
        slow: false,
        host: 'https://translate.google.com',
        timeout: 10000
      })

      res.send(b64)
    }
  )

  // Start HTTP Server
  app.listen(PORT, (): void => {
    console.log(`Server running on ${PORT}`)
  })
}

main()
