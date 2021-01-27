require('./subdiretorio/sub.js');
console.log("-------------------------------------");
console.log('Nome do Arquivo: ', __filename);
console.log('Diretório do arquivo: ', __dirname);
console.log('Diretório em que foi invocado: ', process.cwd());

//console.log('Parâmetros de execução: ', process.env);
console.log('Sistema Operacional: ', process.env.OS);
console.log('Usuário: ', process.env.USERNAME);
console.log('Idioma: ', process.env.LANG);
console.log('Nome do Computador: ', process.env.COMPUTERNAME);
console.log('Porta: ', process.env.PORT);
console.log('************************************');
console.log('Parâmetros de execução: ', process.argv);

switch(process.argv[2]) {

    case '-a': 
        console.log('Execute rotina principal');
        break;
    case '-i': 
        console.log('Execute Instalação');
        break;
    case '-q': 
        console.log('Encerrando aplicação');
        process.exit();
        break;
    default :
       console.log('Parâmetro Inválido');

}

console.log('Ambiente do Servidor: ', process.platform);
