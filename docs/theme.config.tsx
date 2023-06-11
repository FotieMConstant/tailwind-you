import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Tailwind You</span>,
  project: {
    link: 'https://github.com/FotieMConstant/tailwind-you',
  },
  chat: {
    link: 'https://discord.com',
  },
  // banner: {
  //   key: '1.0-release',
  //   text: (
  //     <a href="https://nextra.site" target="_blank">
  //       🎉 Tailwind-You 1.0 is released. Read more →
  //     </a>
  //   )
  // },
  docsRepositoryBase: 'https://github.com/FotieMConstant/tailwind-you/tree/main/docs',
  footer: {
    text: 'Tailwind-you docs',
  },
}

export default config
