const EventEmitter = require("events")

class Evento extends EventEmitter {};
const meuEvento = new Evento();

meuEvento.addListener('seguranca', (x, y)=>{ 
        console.log(`Executando o evento 'seguranca': ${x} ${y}`); 
    });

meuEvento.emit('seguranca', 'userAdmin', 'Alterou salário');   



