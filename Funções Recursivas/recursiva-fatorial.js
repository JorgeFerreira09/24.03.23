function fatorial(num) {
    console.log("Número: " + num)
    if (num === 0) {  //caso base
    return 1
 } else if (num === 1) {
    return 1
 } else {
    console.log(num + " * !" + (num - 1))
    return num * fatorial(num - 1)
 }
}

console.log(fatorial(5))

// O fatorial de 0 é igual a 1.  
// 0! === 1 

// O fatorial de 1 é igual a 1.
// 1! === 1

// 5! = 5 * 4 * 3 * 2 * 1 === 5 * 4!