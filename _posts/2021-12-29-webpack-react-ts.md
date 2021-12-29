---
title: 'Configurando um projeto React + TypeScript do zero'
excerpt: 'A importância de saber configurar uma aplicação React do zero hoje, parece pouco relevante diante de frameworks famosos como Create React App(CRA), Remix, NextJS e etc, mas queria falar mais sobre isso e mostrar como podemos facilmente configurar uma aplaicação React com Typescript usando Webpack'
coverImage: '/assets/blog/webpack-react-ts/cover.jpg'
date: '2021-12-29T05:35:07.322Z'
author:
  name: Lincon Kusunoki
  picture: '/assets/blog/authors/lkk.jpeg'
ogImage:
  url: '/assets/blog/webpack-react-ts/cover.jpg'
---

## TLDR;

Mas afinal, por que devemos saber configurar uma aplicação do zero? Aprender sobre webpack, esbuild, rollup... quando posso simplemente começar uma aplicação com tudo que eu quero, executando apenas um comando no terminal?

A resposta é muito simples. Você enquanto desenvolvedor deve ter o maior controle possível do projeto que está desenvolvendo, e isto é puramente responsabilidade sua. Um PO ou o dono da empresa, não tem que saber como fazer este tipo de coisa, mas eles devem estar cientes sobre isso e sobre a importância disso.

E este tipo de conhecimento valoriza não somente você como desenvolvedor, mas também seu trabalho, digo isto porque quando delegamos essa responsabilidade a um framework estamos também delegando em partes a importância do nosso trabalho. Não precisamos mais saber o porquê aquele framework surgiu ou qual problema ele resolve, precisamos saber somente como usar-lo e se em determinado momento lançarem outro (e isso sempre vai acontecer), e este framework novo tem features novas que o que você está usando não tem, possui uma melhor performance, e mais um monte de outras coisas, você será obrigado em determinado momento adaptar todo seu projeto ao framework novo, e isso custa, e custa muito!

Foi com este pensamento e visão que considerei rever novamente como configurar um projeto do zero, definindo eu mesmo as features que queria e que faziam mais sentido para o negócio. Com isto vi que as coisas não mudaram muito de uns anos pra cá, mas algumas coisas estão mais fáceis também, mas chega de falar e bora botar a mão no código.

## Estrutura do projeto

Bom vamos começar a estrutura, é muito simples e também muito parecida com a estrutura do CRA. Basicamente vamos ter uma pasta `src` onde vamos colocar o código fonte do projeto, uma pasta `public` onde irá inicialmente o nosso `index.html` e o restante são os arquivos de configuração.

Então a estrutura ficou da seguinte forma:

```css
project
│   package.json
│   tsconfig.json
│   webpack.config.js
│
└───public
│   │   index.html
│
└───src
│   │   index.tsx
│   │   App.tsx
```

## package.json

Dentro do `package.json` vamos ter a seguinte configuração

```json
{
  "name": "react-webpack-typescript",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "build": "webpack",
    "start": "webpack serve --config ./webpack.config.js"
  },
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "@types/react": "^17.0.38",
    "@types/react-dom": "^17.0.11",
    "css-loader": "^6.5.1",
    "sass-loader": "^12.4.0",
    "style-loader": "^3.3.1",
    "ts-loader": "^9.2.6",
    "typescript": "^4.5.4",
    "webpack": "^5.65.0",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.7.1"
  }
}
```

Sobre os scripts, temos de momento somente dois `build` e `start`. O script de build vai gerar o bundle da nossa aplicação enquanto o start vai abrir nossa aplicação localmente para desenvolvimento.

Já vamos deixar configurado também para que o projeto aceite trabalhar com Sass, por isso temos três dependências de css que são `css-loader`, `sass-load` e o `style-loader`.

Como vamos iniciar nossa aplicação já com TypeScript, instalamos inicialmente os `@types` do React e React-DOM, mas também o principal que é `typescript` e o `ts-loader`, este último é que fará a leitura de nossos arquivos e despois a transpilação a ECMAScript 2015.

## tsconfig.json

Dentro do `tsconfig.json` vamos ter a seguinte configuração

```json
{
  "compilerOptions": {
    "outDir": "./public",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}
```

Aqui não temos muito do que falar, mas gostaria de destacar somente o target do build a `es5` e também o formato final do bundle para nodejs usando `commonjs`.

O diretório de destino bundle é a pasta `public` que é onde está o `index.html` que aponta diretamente ao script `bundle.js`.

## webpack.config.js

E por final a configuração do Webpack para rodar tudo isso que precisamos

```js
const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    open: true,
    hot: true,
  },
}
```

Inicialmente esta configuração é apenas para o ambiente de desenvolvimento. Por isso consideramos por exemplo os `source-maps` e temos também a configuração do `devServer`.

Definimos também nosso arquivo inicial, que é o `src/index.tsx`. E definimos onde queremos que sejam colocamos nossos arquivos já compilados do nosso bundle.

Temos resolução de arquivos `ts` e `tsx` usando o `ts-loader` e para arquivos `scss` usamos o `sass-loader`.

## Fin

Link para o repositório:  
[https://github.com/linconkusunoki/webpack-react-typescript](https://github.com/linconkusunoki/webpack-react-typescript)
