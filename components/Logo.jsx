import React from 'react'

import { cn } from '@/lib/utils'

/**
 * @param {{className?: string}} props
 */
export default function Logo({ className }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-8', className)}
    >
      {/* Body: dome top, signal-wave bottom */}
      <path
        d="M115.199 384V204.8C115.199 127.04 178.239 64 255.999 64C333.759 64 396.799 127.04 396.799 204.8V384C375.466 358.4 354.133 358.4 332.799 384C311.466 409.6 290.133 409.6 268.799 384C247.466 358.4 226.133 358.4 204.799 384C183.466 409.6 162.133 409.6 140.799 384C132.266 375.467 123.733 375.467 115.199 384Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="19.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Headphone band */}
      <path
        d="M115.199 217.6C115.199 140.8 162.133 102.4 255.999 102.4C349.866 102.4 396.799 140.8 396.799 217.6"
        stroke="currentColor"
        strokeWidth="19.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      {/* Left earpiece */}
      <path
        d="M115.5 210C115.5 192.327 113.673 192 96 192C78.3269 192 64 206.327 64 224V262.4C64 280.073 78.3269 294.4 96 294.4C113.673 294.4 115.5 298.673 115.5 281V210Z"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="currentColor"
        strokeWidth="15.36"
      />
      {/* Right earpiece */}
      <path
        d="M397 210C397 192.327 398.827 192 416.5 192C434.173 192 448.5 206.327 448.5 224V262.4C448.5 280.073 434.173 294.4 416.5 294.4C398.827 294.4 397 298.673 397 281V210Z"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="currentColor"
        strokeWidth="15.36"
      />
      {/* Eyes */}
      <circle cx="204.799" cy="204.8" r="25.6" fill="currentColor" />
      <circle cx="307.202" cy="204.8" r="25.6" fill="currentColor" />
      {/* Smile */}
      <path
        d="M204.801 281.6C238.934 311.466 273.067 311.466 307.201 281.6"
        stroke="currentColor"
        strokeWidth="19.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
