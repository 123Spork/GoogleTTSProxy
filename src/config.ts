import dotenv from 'dotenv'

dotenv.config()

export const { SITE_URL } = process.env

export const { SERVICE_URI } = process.env
export const DATABASE_URI = process.env.DATABASE_URI || ''
export const {
  FTP_HOST,
  FTP_USER,
  FTP_PASSWORD,
  FTP_IMAGE_DIRECTORY
} = process.env

export const BUSINESS_NAME = process.env.BUSINESS_NAME || 'The Flower Parade'

export const EMAIL_USER = process.env.EMAIL_USER || ''
export const EMAIL_PASS = process.env.EMAIL_PASS || ''
export const EMAIL_ENABLED = process.env.EMAIL_ENABLED === 'true' || false
export const EMAIL_HOST = process.env.EMAIL_HOST || 'smtp.office365.com'
export const EMAIL_PORT = process.env.EMAIL_PORT
  ? parseInt(process.env.EMAIL_PORT)
  : 587

export const ENVIRONMENT: string = process.env.NODE_ENV
  ? process.env.NODE_ENV
  : 'production'

// export const PUBLIC_PATH: string = path.join(__dirname, 'public')

export const JWT_TOKEN_SECRET: string =
  process.env.ACCESS_TOKEN_SECRET || '4C355_T0KN_53CR7'

export const PORT: number = process.env.PORT
  ? Number.parseInt(process.env.PORT)
  : 5000

export const MORGAN_LOGGER_FORMAT: string =
  process.env.MORGAN_LOGGER_FORMAT || 'tiny'

export const RATE_LIMIT_MAX_CONNECTIONS = 1000
export const RATE_LIMIT_REQUEST_RECORD_TTL = 15 * 60 * 1000

export const GLOBAL_LOGGING_LEVEL = process.env.GLOBAL_LOGGING_LEVEL || 'info'
