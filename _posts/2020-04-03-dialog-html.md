---
title: 'O novo <dialog> Element'
excerpt: 'O novo elemento HTML `<dialog>` veio para ficar, e o que podemos falar sobre ele é que é muito mais semântico do que estamos acostumados, além disso ele trouxe uma nova propriedade CSS'
coverImage: '/assets/blog/dialog-html/cover.jpg'
date: '2020-02-13T05:35:07.322Z'
author:
  name: Lincon Kusunoki
  picture: '/assets/blog/authors/lkk.jpeg'
ogImage:
  url: '/assets/blog/dialog-html/cover.jpg'
---

A especificação HTML está em constante evolução, uma coisa que representa sua evolução é o novo elemento de diálogo introduzido na versão 5.2, então vamos ver como trabalhar com esse elemento e quais são as novidades para nós.

## Não apenas uma nova tag

O `<dialog>` não é apenas uma nova tag que você inclui em seu código e adiciona algum CSS para polyfill e tudo está feito. Em primeiro lugar, no momento em que escrevo este artigo, você precisará adicionar um polyfill fornecido pelo Google no seguinte repositório: <https://github.com/GoogleChrome/dialog-polyfill>

Além disso, traz um novo seletor CSS `::backdrop` que é usado para aplicar estilos ao plano de fundo da caixa de diálogo ou vídeos em modo de tela cheia. Então agora é possível estilizar aquela parte preta dos vídeos quando eles não correspondem à tela e têm espaços livres.

E, finalmente, agora podemos ter modais semânticos substituindo nossos `divs` existentes por um elemento que representa algo significativo no DOM.

## Basic implementation

```html
<dialog>
  HTML5 Dialog Example
</dialog>
```

Por padrão, a caixa de diálogo ficará oculta, precisamos adicionar um atributo _open_ via JavaScript à tag, para que o navegador mostre o modal.

```js
const modal = document.querySelector('dialog')

// faz a modal aparecer (adiciona o atributo `open`)
modal.showModal()

// esconde a modal (remove o atributo `open`)
modal.close()
```

Quando o elemento aparecer na tela, ele será centralizado com margens automáticas, linhas pretas grossas, dimensionado para o conteúdo. Todos esses estilos são aplicados por padrão pelo User-Agent (estilos de navegador) e é muito comum substituir esses estilos, por exemplo, o Chrome aplica esses estilos para caixas de diálogo:

```css
dialog {
  display: block;
  position: absolute;
  left: 0px;
  right: 0px;
  width: -webkit-fit-content;
  height: -webkit-fit-content;
  color: -internal-light-dark-color(black, white);
  margin: auto;
  border-width: initial;
  border-style: solid;
  border-color: initial;
  border-image: initial;
  padding: 1em;
  background: -internal-light-dark-color(white, black);
}
```

## Retornando valores `onclose`

Um cenário muito comum é quando precisamos que o usuário execute uma operação dentro do modal, então depois que ele terminar a operação podemos pegar o valor. Para isso, podemos simplesmente passar o valor desejado para o evento de fechamento, por exemplo:

```js
// retorna option1 como valor
modal.close('option1')

// fecha o dialog quando clicar no backdrop
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    // retorna canceled porque o user clicou no backdrop
    modal.close('cancelled')
  }
})

// exibe o valor retornado
modal.addEventListener('close', () => {
  result.innerHTML = modal.returnValue
})
```

## Exemplo

https://codepen.io/linconkusunoki/pen/poJmrvL
