export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://pantalk.chatbotkit.com'

export const isDevelopment = process && process.env.NODE_ENV === 'development'
export const isProduction = process && process.env.NODE_ENV === 'production'
