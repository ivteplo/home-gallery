// Copyright (c) 2022 Ivan Teplov

import { Component } from "solid-js"

const GalleryIcon: Component = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_13_75)">
      <path
        d="M2.28571 0.75H13.7143C13.9634 0.75 14.3635 0.837068 14.6833 1.08501C14.9685 1.30616 15.25 1.69876 15.25 2.46154V13.5385C15.25 13.8394 15.1604 14.2995 14.9194 14.6601C14.7052 14.9804 14.3599 15.25 13.7143 15.25H2.28571C2.0366 15.25 1.63648 15.1629 1.31671 14.915C1.03149 14.6938 0.75 14.3012 0.75 13.5385V2.46154C0.75 2.16063 0.839579 1.70047 1.08063 1.33992C1.29478 1.01962 1.64011 0.75 2.28571 0.75Z"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <circle cx="5" cy="5" r="2.25" stroke="currentColor" stroke-width="1.5" />
      <path
        d="M16 12L12.1553 8.24364C11.4295 7.53457 10.2878 7.4813 9.49918 8.11971L1 15"
        stroke="currentColor"
        stroke-width="1.5"
      />
    </g>
    <defs>
      <clipPath id="clip0_13_75">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default GalleryIcon
