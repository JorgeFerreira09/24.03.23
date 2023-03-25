function dobro(x) {      // X é um parametro dessa função. Quais vão ser as entradas? podemos definir quantas quisermos.
    alert("O dobro de " + x + "é " + (x * 2))
}

// dobro(5) // é preciso indicar qual é a entrada. 

// Os parâmetros da função são listrados entre parênteses () na definição de função. 

// Os parenteses podem incluir nomes de parâmetros separados por vírgula. por ex: ( parametro1, parametro 2, parametro 3, ...)

// Parametro é como se fosse uma variavel que fica disponível dentro da função, mas que é informada quando chamamos a função.

function dizerOla(nome = "valor padrão do parâmetro"){
    console.log("Olá, " + nome + "!")
}

dizerOla("Jorge")
dizerOla() 

// Os parametros da função podem ter valor padrão. Qquando o nome n for informado, o JS não irá usar o UNDEFINED e sim o valor padrão informado.

