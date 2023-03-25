/*
olaMundo()
oiMundo()

function olaMundo() {
    console.log("Olá, mundo!")
}

const oiMundo = function () {      // é possível perceber que não passamos o nome da função aqui
    console.log("Oi, mundo")
}

*/

// acontece o erro: Cannot acess 'oiMundo' before initialization.
// Assim como variaveis criadas com o VAR uma FUNCTION "NOMEADA" é jogada lá para o início do arquivo e quando o arquivo é carregado a nossa FUNCTION já existe (independente do código).
// as funções anonimas só passa a ser disponível após a inicialização da variável

olaMundo()

function olaMundo() {
    console.log("Olá, mundo!")
}

const oiMundo = function () {      // é possível perceber que não passamos o nome da função aqui
    console.log("Oi, mundo")
}

oiMundo()