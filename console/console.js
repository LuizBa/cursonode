console.log("Exibindo mensagem do console");

console.error(new Error("Exibindo mensagem de erro. Temos problemas!"));

const carros = ['GM', 'JAC', 'Ford', 'BMW', 'Mercedez', 'Bentley'];

console.table(carros);

const dados = { nome: "Luiz", empresa: "Company"};

console.table(dados);

console.count("processo");
console.count("processo");
console.count("processo");
console.count("processo");
console.count("processo 2");

console.count("processo");

console.log("Resetando o processo");
console.countReset("processo");

console.count("processo");

console.time("contador");
for (let index = 0; index < 10; index++) {
    console.log("***");  
}

console.timeEnd("contador");

console.assert(true, "faça alguma coisa");

console.assert(false, "%s , deu pau ", "Lucas");

// console.clear;