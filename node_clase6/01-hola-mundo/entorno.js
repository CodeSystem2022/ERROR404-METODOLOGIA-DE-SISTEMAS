// let saludo = 'hola'
// let nombre = process.env.NOMBRE

// Para asignarle un valor por defecto, ais no tengo undefined:
let nombre = process.env.NOMBRE || 'Sin nombre'
console.log(`Hola ${saludo}`)

// Para ejecutar el archivo con un valor, por consola, en la variable de entorno: $env:NOMBRE="Carlos"; node entorno.js

// Creo otra variable de entorno
let web = process.env.WEB || 'No tengo web'
console.log(`Mi web es: ${web}`)
// Para ejecutar el archivo con un valor, por consola, en la variable de entorno: 
// $env:WEB="vamosair.com"; node entorno.js

// Para declarar las variables de entorno van en el archivo .env no en uno js como hace aca
// Y cuando se trabajo con mas d eun ambiente tenemos mas de un archivo .env.desa .env.test .env.prod
// Además se escriben ciempre en mayuscula y si son mas de una palabra se separan con _