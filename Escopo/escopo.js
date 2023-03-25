let pokemon = "Charmander" // A variável Pokemon tem escopo externo. 

function evoluir() {
    pokemon = "Charmeleon" 
}

console.log(pokemon)
evoluir()
console.log(pokemon)

// Escopo é o contexto onde a variável foi declarada. É o bloco do código onde a variável foi declarada. Podendo ser mais interno ou externo.


// Variáveis declaradas no escopo mais externo pode ser utilizadas no escopo mais interno, mas o contrário não é verdadeiro. 


function criarAnimal() {
    let animal = 'Gato'
}

criarAnimal()
console.log(animal)

// Variáveis criadas com var ficam disponível no escopo externo


