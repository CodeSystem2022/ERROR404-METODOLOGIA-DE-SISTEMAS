console.log('Hola a toda la cohorte 2022')

// var ya no se usa más, esta deprecado, o usamos LET o CONST
let i = 0 

setInterval(function() {
    console.log(i);
    i++; 
}, 1000)

console.log('Ultima instrucción') // es asíncrono

/* PM2 es un administrador de procesos para aplicaciones Node.js que se utiliza para administrar 
y monitorear aplicaciones Node.js en un entorno de producción. No usar en desarrollo, para eso usamos Nodemon
- Instalacion global por terminal: npm install -g pm2
- uso de pm2, en terminal: pm2 start miArchivo.js (o id si es que lo tuviera)
    ej: pm2 start monohilo.js
- en terminal:
    pm2 monitor -> para ver las metricas que suceden dentro de pm2.. nos redirige a una pagina e iniciar sesion.
    pm2 status -> muestra el estado actual de los procesos de PM2 en ejecución. También muestra los registros de los procesos, como la salida estándar y la salida de error.
    pm2 logs -> muestra los registros de los procesos de Node.js que se están ejecutando actualmente(ctrl +c , dejar de ver logs pero la aplicación seguira ejecutandose)
    pm2 stop id -> detiene un proceso de PM2 en ejecución. También puede utilizarse para detener todos los procesos de PM2 en ejecución. Al detener un proceso, se puede especificar el nombre o el ID del proceso para detenerlo específicamente. Además, se puede utilizar la opción --all para detener todos los procesos de PM2 en ejecución.
*/