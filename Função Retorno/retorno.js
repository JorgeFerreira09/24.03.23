/* function calcularMedia (a, b){
    const media = ( a + b) / 2
}

const resultado = calcularMedia(7, 2)

console.log(resultado)

*/

function calcularMedia (a, b){
    const media = ( a + b) / 2
    return media
}

const resultado = calcularMedia(7, 2)

console.log(resultado)

function criarProduto(nome, preco) {
    const produto = {
        nome, // nome: nome
        preco, //preco: preco
        estoque: 1
    }
    return produto
}

/*
const notebook = criarProduto("Notebook Intel Core i3 8GB", 2500)

console.log(notebook)

*/

// Podemos abreviar esse trecho acima dessa forma

//console.log(criarProduto("Notebook Intel Core i3 8GB", 2500))

function areaRetangulo(base, altura) {
    return base * altura  // O retorno pode conter uma expressão tranquilamente, não precisa ser necesariamente uma variável.
}

function areaQuadrada(lado) {
    return areaRetangulo(lado, lado)
}

console.log(areaRetangulo(3, 5))

console.log(areaQuadrada(9))

