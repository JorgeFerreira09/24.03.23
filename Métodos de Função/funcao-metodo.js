let pessoa = {
    nome: "Issac",
    idade: 26,
    dizerOla() {
        console.log("Olá, mundo! Meu nome é " + this.nome )
    }
}

console.log(pessoa)

pessoa.dizerOla()

// pessoa é um objeto.
// Método de uma função é uma função dentro de um objeto. Não precisamos da palavra-chave: function. 

//Os métodos são formas de deixar os objetos mais poderosos e com mais funcionalidades.

// A palavras this serve para fazer referência ao próprio objeto. 
