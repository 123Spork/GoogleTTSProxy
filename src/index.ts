import express, { Express } from 'express'
import cors from 'cors'
import * as googleTTS from 'google-tts-api'

interface RequestData {
  msg: string
  language: string
}

const main = async (): Promise<void> => {
  const app: Express = express()

  // Middleware
  app.use(cors({ origin: '*' }))
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

  app.get(
    '/health',
    async (_req, res): Promise<void> => {
      res.send('Hello World')
    }
  )

  // Start HTTP Server
  app.listen(5000, (): void => {
    console.log(`Server running on ${5000}`)
  })
}

main()
