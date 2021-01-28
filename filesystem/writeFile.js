const {writeFile} = require("fs");

writeFile("arquivo.txt", "Criando arquivo texto com writeFile", err => {
    if (err) throw err;
    console.log("Arquivo criado com sucesso!");
})