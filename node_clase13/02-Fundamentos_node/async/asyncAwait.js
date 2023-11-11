//La palabra async no es necesaria en las funciones, porque ya son asincronas
//Igual proyectan una sincronia visual
async function hola(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hola '+nombre);
            resolve(nombre);
        },1000);
    });
}

async function hablar(nombre){
    return new Promise((resolve, reject) => { // Usamos la sintaxis ES6
    setTimeout( () => {
        console.log('bla bla bla bla ');
        resolve(nombre);
    },1000)
});
}

async function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout( function () {
            //validamos el error o aprobacion
            console.log('Adios ' + nombre);
            //if(err) reject('Hay un error')
            resolve();
        }, 1000);
    });
}

//await hola('Ariel'); // esto es una mala sintaxis
//await solo es valido dentro de una funcion asyncrona
async function main(){
   let nombre = await hola('Ariel');
   await hablar();
   await hablar();
   await hablar();
   await adios(nombre);
   console.log('Termino el proceso..');
}

//console.log('Empezamos el proceso...');
//main();
//console.log('Esta es la segunda instruccion');

//codigo en ingles
//Es asincrono y retorna una promesa
async function sayHello(name){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log('Hello '+name);
            resolve(name);
        },1000);
    });
}

async function talk(name){
    return new Promise((resolve, reject) => { // Usamos la sintaxis ES6
    setTimeout( () => {
        console.log('bla bla bla bla ');
        resolve(name);
    },1000)
});
}

async function sayBye(name){
    return new Promise((resolve, reject) => {
        setTimeout( function () {
            //validamos el error o aprobacion
            console.log('Goodbye ' + name);
            //if(err) reject('Hay un error')
            resolve();
        }, 1000);
    });
}
async function conversation (name){
    console.log("Code in english");
    console.log("Starning async process...");
    await sayHello(name);
    await talk();
    await talk();
    await talk();
    await sayBye(name);
    console.log('Process completed');
 }

 conversation("Ariel");