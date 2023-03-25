function somar (a, b) {
    return a + b
}

let operacao = somar 

console.log(operacao(4, 5))

operacao = function (a, b) {
    return a - b
}

console.log(operacao(4, 5))

// Funções anonimas são funções que não tem nome

//  const operacao = somar () 
//  Esse () significa que a variavel operação será "igual" ao resultado de somar. 
//  Não usando () significa que a variavel operação é "igual" a função somar. 

// Funções anonimas servem para armazenar funções dentro de variáveis de uma forma mais simples.

// Poderiamos usar as funções anonimas quando queremos mudar o comportamento de uma função. 

