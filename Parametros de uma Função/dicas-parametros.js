// A ordem dos parametros é importante !
 //Os parametros que tem valor padrão, devem ficar no final !

 

 /*
                                            DICA 1


function criarUsuario(nome, email, senha, tipo = "admin") { //Temos que escolher valores padrão e colocar no final.
    const usuario = {           //objeto
     nome,           // propriedade do objeto com valor nome. 
     email,          // Objeto com o nome da chave igual ao valor, podemos abreviar. por ex: email: email é igual email.
     senha,
     tipo
 }

  console.log(usuario)
}

criarUsuario("Jorge", "jorge@gmail.com", "1234")
*/

//Os parametros que tem valor padrão, devem ficar no final !

/*

                                DICA 2

function novoUsuario(nome, tipo = "admin", email, senha){   //Ordem dos parametros é importante. 
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

novoUsuario("Jorge", "jorge@gmail.com", "1234")

                            DICA 3 
                            DICA 3
                            DICA 3

*/



                                    
function novoUsuario(nome, email, senha = "senha", tipo = "admin") {  
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

novoUsuario("Jorge", "jorge@gmail.com", "1234")



