// @ts-check
import React from 'react'

import {
  GoogleAnalytics,
  GoogleTagManager,
  sendGTMEvent,
} from '@next/third-parties/google'

export const GTAG_ID = process.env.NEXT_PUBLIC_GTAG_ID

/**
 * @param {object} options
 * @param {string} options.event
 * @param {string} options.action
 * @param {string} options.category
 * @param {string} options.label
 * @param {number} options.value
 * @returns {void}
 */
export function event({ event, action, category, label, value }) {
  if (!GTAG_ID) {
    return
  }

  sendGTMEvent({ event, action, category, label, value })
}

/**
 *
 * @param {string} event
 * @param {Record<string,any>} parameters
 * @returns {void}
 */
export function customEvent(event, parameters) {
  if (!GTAG_ID) {
    return
  }

  sendGTMEvent({ ...parameters, event })
}

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element|React.ReactNode}
 */
export default function GTag({ children }) {
  if (GTAG_ID) {
    if (GTAG_ID.startsWith('GTM-')) {
      return <GoogleTagManager gtmId={GTAG_ID} />
    } else {
      return <GoogleAnalytics gaId={GTAG_ID} />
    }
  } else {
    return children
  }
}
