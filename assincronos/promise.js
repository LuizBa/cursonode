function soma(x) {

    return new Promise((resolve, reject) => { 
            setTimeout(() => {
            resolve(x + 5000);
        }, 3000);
    });

}

soma(400)
.then((resultado)=>{ 
    console.log(`A soma deu ${resultado}`);
})
.catch(console.log("Deu merda"));
