# #Backend Calculadora
Backend simples para funcionamento de uma calculadora em node js utilizando type script.

## Rotas
- `GET /soma`: Responsável pela soma
```js
// Request(Query):
{
  numeroAtual: 0,
  numeroDigitado: 0
}
// Response: StatusCode: 200 (OK)
{
  resultado: 0
}
```

- `GET /sub`: Responsável pela subtração
```js
// Request(Query):
{
  numeroAtual: 0,
  numeroDigitado: 0
}
// Response: StatusCode: 200 (OK)
{
  resultado: 0
}
```

- `GET /div`: Responsável pela divisão
```js
// Request(Query):
{
  numeroAtual: 0,
  numeroDigitado: 0
}
// Response: StatusCode: 200 (OK)
{
  resultado: 0
}
```

- `GET /mult`: Responsável pela multiplicação
```js
// Request(Query):
{
  numeroAtual: 0,
  numeroDigitado: 0
}
// Response: StatusCode: 200 (OK)
{
  resultado: 0
}
```

## Execução
Para executar o projeto use:(Projeto rodando na porta http://localhost:3333)
```js
npm run start
```
Para executar os testes use:
```js
npm run test
```
