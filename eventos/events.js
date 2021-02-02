// Destructuring assignment: pegando do pacote events apenas o EventEmitter
const {EventEmitter} = require("events")

class Evento extends EventEmitter {};
const meuEvento = new Evento();

//subscriber
meuEvento.addListener('seguranca', (x, y)=>{ 
        console.log(`Executando o evento 'seguranca': ${x} ${y}`); 
    });

//publisher
meuEvento.emit('seguranca', 'userAdmin', 'Alterou salário');   

meuEvento.on('encerrar', (dados) => {
    console.log(`Assinante: ${dados}`);
})

meuEvento.emit('encerrar', 'Encerrando a execução de dados');


