# Clip-planet-extension

## Summary
- api key를 통해 유저 정보 식별
- Chrome extension API를 활용하여 현재 chrome tab의 사이트 정보 추출
- 사이트 meta 데이터를 통한 사이트 정보 저장

## 아이콘
![icon128](https://user-images.githubusercontent.com/71929440/229496319-c39449e7-d404-486c-b4c7-be3dd9b2fd05.png)

## 사용 이미지
<img width="364" alt="clip-planet2" src="https://user-images.githubusercontent.com/71929440/229493057-c0dfe2c3-544e-40ab-92a3-45eedeb97348.png">
<img width="364" alt="Snipaste_2023-03-30_20-39-26" src="https://user-images.githubusercontent.com/71929440/229493061-a177cf69-ce2d-403c-99ec-50f275b38807.png">


## Chrome Extension TypeScript Starter를 활용하였습니다.

![build](https://github.com/chibat/chrome-extension-typescript-starter/workflows/build/badge.svg)

Chrome Extension, TypeScript and Visual Studio Code

## Tech Stack

Boilerplate: chrome-extension-typescript-starter with React
CSS: SCSS
Bundling tool: Webpack

## Project Structure

* src/typescript: TypeScript source files
* src/assets: static files
* dist: Chrome Extension directory
* dist/js: Generated JavaScript files

## Setup

```
npm install
```

## Import as Visual Studio Code project

...

## Build

```
npm run build
```

## Build in watch mode

### terminal

```
npm run watch
```

### Visual Studio Code

Run watch mode.

type `Ctrl + Shift + B`

## Load extension to chrome

Load `dist` directory

## Test
`npx jest` or `npm run test`
