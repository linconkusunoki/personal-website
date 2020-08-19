---
title: 'Mudando para React Hooks'
excerpt: 'Hooks resolvem uma grande variedade de problemas aparentemente desconectados no React, que encontramos ao longo de cinco anos escrevendo e mantendo dezenas de milhares de componentes. Esteja você aprendendo React, use-o diariamente ou até mesmo prefira uma biblioteca diferente com um modelo de componente semelhante, você pode reconhecer alguns desses problemas.'
coverImage: '/assets/blog/lifecycle-hooks/cover.jpg'
date: '2020-02-13T05:35:07.322Z'
author:
  name: Lincon Kusunoki
  picture: '/assets/blog/authors/lkk.jpeg'
ogImage:
  url: '/assets/blog/lifecycle-hooks/cover.jpg'
---

Os três mais comuns ciclos de vida de um componente no React, mas agora usando Hooks, apenas um simples "cheat-shee"

## componentDidMount

before

```js
class Example extends React.Component {
  componentDidMount() {
    console.log('I am mounted!')
  }
  render() {
    return null
  }
}
```

after

```js
function Example() {
  useEffect(() => {
    console.log('mounted')
  }, [])
}
```

## componentDidUpdate

before

```js
class Example extends React.Component {
  componentDidMount() {
    console.log('mounted or updated')
  }
}
```

also

```js
class Example extends React.Component {
  componentDidUpdate() {
    console.log('mounted or updated')
  }
}
```

after

```js
function Example() {
  useEffect(() => {
    console.log('mounted or updated')
  })
}
```

## componentWillUnmount

before

```js
class Example extends React.Component {
  componentWillUnmount() {
    console.log('will unmount')
  }
}
```

after

```js
function Example() {
  useEffect(() => {
    return () => {
      console.log('will unmount')
    }
  }, [])
}
```
