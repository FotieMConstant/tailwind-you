<h1><p align="center">Tailwind You</p></h1>
<p align="center">Tailwindcss and Material You design with the logic covered</p>

A frontend UI Component framework supporting most of the major frontend UI frameworks including React, Vue

Tailwind You is [tailwindcss](https://tailwindcss.com/) based. It gives the full power to styling. Also creating unique styles in tailwind you is unbelievably easy using global **StyleObjects**. Giving full power to modifying the style of the components in any state. Also because its tailwindcss based thus gives out of the box modularity

## Project structure

| name                                                                                                                         | description                                                               |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [@tailwind-you/react](https://github.com/FotieMConstant/tailwind-you/tree/master/packages/react)                                         | react components                                                          |
| [@tailwind-you/vue](https://github.com/FotieMConstant/tailwind-you/tree/master/packages/vue)                                             | vue components                                                            |
| [@tailwind-you/styles](https://github.com/FotieMConstant/tailwind-you/tree/master/packages/styles)                                       | default style objects                                                     |
| [@tailwind-you/tailwindcss-preset-tailwind-you](https://github.com/FotieMConstant/tailwind-you/tree/master/packages/tailwindcss-preset-tailwind-you) | framework specific tailwindcss configuration                              |
| [@tailwind-you/types](https://github.com/FotieMConstant/tailwind-you/tree/master/packages/types)                                         | cross framework component specific props & style-object type declarations |

## Installation

Make sure [Nodejs](https://nodejs.org/) v12+, [tailwindcss](https://tailwindcss.com/docs/installation) is installed & configured
**React:**

```bash
$ npm i @tailwind-you/react @tailwind-you/styles && npm i -D @tailwind-you/tailwindcss-preset-tailwind-you
```

using yarn

```bash
$ yarn add @tailwind-you/react @tailwind-you/styles && yarn add -D @tailwind-you/tailwindcss-preset-tailwind-you
```

**Vue:**

```bash
$ npm i @tailwind-you/vue @tailwind-you/styles && npm i -D @tailwind-you/tailwindcss-preset-tailwind-you
```

using yarn

```bash
$ yarn add @tailwind-you/vue @tailwind-you/styles && yarn add -D @tailwind-you/tailwindcss-preset-tailwind-you
```

## Docs

Docs are located in [tailwind-you-sooty.vercel.app](https://tailwind-you-sooty.vercel.app). Visit it to learn more about tailwind you

## Contribution

**Contributors needed!**
Any kind contribution related to this project & following all the instructions/rules defined in [CONTRIBUTION.md](/CONTRIBUTION.md) are warmly accepted

Currently this projects needs your support. We need some **reactjs, vuejs** developers who can willingly contribute to this Open-Source project

## Running locally
Make sure you have `nodejs@^12` & `npm@^7` installed. Then git clone the repository & in the project root directory run:
```bash
$ npm install
```

To run the React project:

```bash
$ cd ./packages/react/ && npm start 
```

To run the Vue project:

```bash
$ cd ./packages/vue/ && npm start 
```

This will start the storybook dev-server & will show the link where it got served
