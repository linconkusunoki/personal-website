---
title: 'CRUD no MongoDB '
excerpt: 'Como estou começando a aprender algumas coisas de backend e MongoDB é uma dessas coisas, é muito importante ter uma base sólida sabendo como executar operações CRUD (Criar, Ler, Atualizar e Excluir).'
coverImage: '/assets/blog/mongodb-crud/cover.jpg'
date: '2020-04-30T05:35:07.322Z'
author:
  name: Lincon Kusunoki
  picture: '/assets/blog/authors/lkk.jpeg'
ogImage:
  url: '/assets/blog/mongodb-crud/cover.jpg'
---

Como estou começando a aprender algumas coisas de backend e MongoDB é uma dessas coisas, é muito importante ter uma base sólida sabendo como executar operações CRUD (Criar, Ler, Atualizar e Excluir).

Portanto, apenas para ter minha própria "cheat-sheet" para iniciar no mundo MongoDB, estou compartilhando como realizar essas operações básicas. Então vamos começar a criar algo no banco de dados.

A primeira coisa que queremos fazer é acessar nosso Mongo Shell, para ter certeza que você tem o MongoDB instalado em sua máquina, se tiver, digite `mongo` em seu terminal e você entrará no Mongo Shell. Então vamos criar um novo banco de dados para realizar nossas operações, basta digitar:

```
use test
```

## Create

MongoDB guarda os documentos no formato BSON, uma forma binária de JSON (JavaScript Object Notation). Os documentos são guardados no que chamaos de "coleções", sabendo disso podemos então adicionar nosso primeiro documento.

```js
db.users.insertOne({
  name: 'Lincon',
  age: 25,
})
```

## Read

Para recuperar o dado do nosso banco de dados nós podemos simplemente rodar o seguinte comando

```js
db.users.find().pretty()
```

Este comando vai retornar todos os usuários do nosso banco dados, também nós estamos executando a função `pretty` que realiza a formatação do resultado ajudando a visializar de forma mais fácil no Shell.

## Update

Para modificar o valor de um campo, o MongoDB fornece alguns operadores. Para modificar apenas um documento nós podemos fazer o uso do operador `updateOne`, para este operador funcionar temos que passar dois parâmetros, o primeiro é o filtro de busca e o segundo é a propriedade que nós queremos atualizar.

```js
db.users.updateOne({ age: 25 }, { age: 30 })
```

Neste caso nós estamos usando uma propriedade que sabemos existe apenas um no banco de dados, que vai retornar o primeiro registo que atende nosso filtro de busca.

Se você quer fazer uma atualização de um documento específico, você pode buscar por documentos utilizando a propriedade `_id`, que geralmente é única e gerada automaticamente pelo MongoDB.

## Delete

Para remover um documento é muito similar a quando fazemos a atualização, nós precisamos apenas chamar o operador `deleteOne`, mas nós apenas precisamos passar o filtro inicial que indica qual documento nós queremos remover.

```js
db.users.deleteOne({ age: 25 })
```

### Thats all folks

Como podemos ver é muito simples realizar operações no MongoDB usando Mongo Shell, eu sei que existem um monte de operadores que são relacionados à CRUD, como `insertMany`, `updateMany` e `deleteMany`, mas eu quero cobrir estes operadores em um outro post. Por enquanto é só isto, como eu disse este post vai funcionar como um "cheat-sheet" para mim, mas eu acho que também pode ajudar alguém algum dia. :)
