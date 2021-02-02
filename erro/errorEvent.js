const { EventEmitter } = require("events");
const emitter = new EventEmitter();

const validaObjeto = (a) => {

    if( typeof a !== "object" ) {

        emitter.emit("erro", new Error("Objeto Inválido!"));

    } else {

        console.log("Objeto válido!");

    }
}

emitter.on("erro", (err) => {
    console.log(`Evento: ${err.name} / ${err.message}`);
})

//let dados = { nome: "Marcos", idade: 90, vacinado: "true"}
let dados = 123;

validaObjeto(dados);