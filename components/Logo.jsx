import React from "react";

import { cn } from "@/lib/utils";

export default function Logo({ className }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-8", className)}
    >
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        rx="0"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 12.5C9 9.73858 11.2386 7.5 14 7.5H26C28.7614 7.5 31 9.73858 31 12.5V18.5C31 21.2614 28.7614 23.5 26 23.5H20.4L15 28V23.5H14C11.2386 23.5 9 21.2614 9 18.5V12.5Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14.5" cy="15.5" r="1.25" fill="currentColor" />
      <circle cx="20" cy="15.5" r="1.25" fill="currentColor" />
      <circle cx="25.5" cy="15.5" r="1.25" fill="currentColor" />
    </svg>
  );
}
