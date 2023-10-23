// let saludo = 'hola'
// let nombre = process.env.NOMBRE

// Para asignarle un valor por defecto, ais no tengo undefined:
let nombre = process.env.NOMBRE || 'Sin nombre'
console.log(`Hola ${nombre}`)

// Para ejecutar el archivo con un valor, por consola, en la variable de entorno: $env:NOMBRE="Carlos"; node entorno.js

// Creo otra variable de entorno
let web = process.env.WEB || 'No tengo web'
console.log(`Mi web es: ${web}`)
// Para ejecutar el archivo con un valor, por consola, en la variable de entorno: 
// $env:WEB="vamosair.com"; node entorno.js

// Para declarar las variables de entorno van en el archivo .env no en uno js como hace aca
// Y cuando se trabajo con mas d eun ambiente tenemos mas de un archivo .env.desa .env.test .env.prod
// Además se escriben ciempre en mayuscula y si son mas de una palabra se separan con _

//Nodemon es un administrador de tareas que se utiliza para iniciar automáticamente un servidor Node.js 
//cada vez que se realiza un cambio en el código fuente
//instalacion global. En terminal: npm install -g nodemon
//ejecutando nodemon, en terminal: nodemon miArchivo.js
//en caso de error al ejecutar nodemon en windows: https://www.cdmon.com/es/blog/la-ejecucion-de-scripts-esta-deshabilitada-en-este-sistema-te-contamos-como-actuar
console.log('Ultima ejecución');

/* PM2 es un administrador de procesos para aplicaciones Node.js que se utiliza para administrar 
y monitorear aplicaciones Node.js en un entorno de producción. No usar en desarrollo, para eso usamos Nodemon
- Instalacion global por terminal: npm install -g pm2
- uso de pm2, en terminal: pm2 start miArchivo.js (o id si es que lo tuviera)
    ej: pm2 start monohilo.js
- en terminal:
    pm2 monitor -> muestra un monitor de procesos en tiempo real para los procesos de Node.js que se están ejecutando actualmente. Este comando muestra información detallada sobre el uso de recursos de los procesos, como el uso de CPU, memoria y red... nos redirige a una pagina e iniciar sesion.
    pm2 status -> muestra el estado actual de los procesos de PM2 en ejecución. También muestra los registros de los procesos, como la salida estándar y la salida de error.
    pm2 logs -> muestra los registros de los procesos de Node.js que se están ejecutando actualmente(ctrl +c , dejar de ver logs pero la aplicación seguira ejecutandose)
    pm2 stop id -> detiene un proceso de PM2 en ejecución. También puede utilizarse para detener todos los procesos de PM2 en ejecución. Al detener un proceso, se puede especificar el nombre o el ID del proceso para detenerlo específicamente. Además, se puede utilizar la opción --all para detener todos los procesos de PM2 en ejecución.
*/