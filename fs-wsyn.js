// Uso de método não-bloqueante readFile

const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5));
console.log('Antes de ler o arquivo');

const dados = fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    console.log("Terminei a leitura do arquivo");
} );

console.log('Executando após a leitura do arquivo');
console.log((process.hrtime()[0]/60).toFixed(5));
