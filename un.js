// Misturando método bloqueante com não-bloqueante (anomalia, onde a exclusão do arquivo foi durante a leitura)
/*const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.unlinkSync("file.txt");*/

//Usando apenas método não-bloqueante ou apenas bloqueante( boa prática )
const fs = require("fs");

fs.readFile("file.txt", (err,data) => {
    if (err) throw err;
    console.log(data);
    fs.unlink("file.txt", (unlinkErr) => {
        if (unlinkErr) throw unlinkErr; 
        console.log("Arquivo excluído com sucesso!");
    });
});