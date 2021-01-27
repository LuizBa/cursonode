function sum(x) {

    return new Promise((resolve, reject) => { 
            //receber algo não numérico
            if (Number(x) == NaN  || Number(x) == undefined || typeof x != "number") {
                reject("Merda");
            }
            setTimeout(() => {
            resolve(x + 5000);
        }, 3000);
    });

}
 
async function main() { 
    try {
        const resultado = await sum(230);
        console.log(`Resultado async/await: ${resultado}`);
    } catch (error) {
        console.log(`Temos problemas: ${error}`);
        console.log(process.env.USERNAME);
    }
}

main();
