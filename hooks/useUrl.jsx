import { useRouter } from 'next/router'

import { url } from '@/lib/url.js'

/**
 * @param {string} [baseUrl]
 * @param {string} [thisUrl]
 * @param {import('@/lib/url.js').UrlTransformationOptions} [options]
 * @returns {string}
 */
export default function useUrl(baseUrl, thisUrl, options = {}) {
  const router = useRouter()

  const u = url(thisUrl || router.asPath, baseUrl, options)
    // For some reason /index appears so remove it.
    // @todo this may no longer be necessary
    .replace(/\/index$/, '/')
    // This hook is used for the Meta component. One caveat is that the landing
    // page is hosted in /landing but this is not the canonical URL. Therefore
    // we need to remove /landing from the URL.
    // @todo this is a hack and should be removed if we can find a better way
    .replace(/^\/landing/, '/')

  return u
}
