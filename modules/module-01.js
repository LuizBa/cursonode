console.log("Executando module-01.js");

/* const oculta = () => {
    console.log("Executando função oculta");
} */

module.exports.oculta = () => {
    console.log("Executando função oculta");
}

module.exports.executa = () => {
    console.log("Executando a função executa");
}

module.exports.welcome = "Bem-vindo ao module-01.js"

//REPL