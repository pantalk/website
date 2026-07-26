import '@/styles/global.css'

/**
 * @typedef {import('next/app').AppProps & {
 *   Component: import('next/app').AppProps['Component'] & {
 *     getLayout?: (
 *       page: import('react').ReactNode,
 *       pageProps: import('next/app').AppProps['pageProps']
 *     ) => import('react').ReactNode
 *   }
 * }} AppPropsWithLayout
 */

/**
 * @param {AppPropsWithLayout} props
 */
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />, pageProps)
}
