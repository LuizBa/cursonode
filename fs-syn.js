// Uso de método bloqueante com sufixo sync readFileSync

const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5));
console.log('Antes de ler o arquivo');

const dados = fs.readFileSync("file.txt");

console.log('Depois de ler o arquivo');
console.log((process.hrtime()[0]/60).toFixed(5));
