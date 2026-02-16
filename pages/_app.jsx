import '@/styles/global.css'

import { ThemeProvider } from 'next-themes'

import GTag from '@/components/GTag'
import Notifications from '@/components/Notifications'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <GTag />
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Notifications />
        {getLayout(<Component {...pageProps} />, pageProps)}
      </ThemeProvider>
    </>
  )
}
