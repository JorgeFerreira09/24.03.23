/*
function ola() {
    let texto = "..."
    return texto
    texto = "Olá, mundo" // NÃO podemos colocar código após o RETURN !!! 
    console.log(texto)
}

console.log(ola())
*/

function ola() {
    let texto = "..."
    texto = "Olá, mundo"
    console.log(texto)
    return texto
}

//console.log(ola())



function maioridade(idade) {
    if(idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

console.log(maioridade(29))
console.log(maioridade(13))

// RETURN pode existir uma única vez dentro da função!!! 
// Cuidado pq se a função tiver várias ramificações, pode existir um RETURN em cada ramificação. 

