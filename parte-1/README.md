# Objetivo

Você deve responder a seguinte questão:

> Escreva um algoritmo que inverte uma string qualquer, use a sua lógica para escrever o
algoritmo, você pode utilizar pseudocódigo ou qualquer linguagem que prefira, desde que não 
utilize funções prontas da linguagem.

## Observações e dicas

- É fundamental que ao final você descreva com as suas palavras 
a lógica utilizada e o passo a passo para a construção do algoritmo 
implementado;

- Apenas o envio da resposta, sem a explicação detalhada sobre a 
lógica utilizada, NÃO será suficiente para que o desafio seja considerado 
válido!

## Resposta

```js
const getInvertedString = string => {
  const lastIndex = string.length - 1
  let invertedString = ''

  for (let index = lastIndex; index >= 0; index--) {
    const character = string[index]
    invertedString += character
  }

  return invertedString
}
```

A função `getInvertedString` espera receber como argumento, uma string.
Essa string terá cada caractere iterado de forma **decrescente** por
meio de um for-loop. Em cada iteração, o caractere iterado, será
contatenado em uma nova string, chamada `revertedString`. No final do
loop. a string `revertedString` conterá todos os caracteres da string recebida
como argumento, porém com a ordem invertida. A `revertedString` é retornada.

Obervações:

- A string original não é alterada.
- Não foi usado nenhum método nativo da lingaugem.