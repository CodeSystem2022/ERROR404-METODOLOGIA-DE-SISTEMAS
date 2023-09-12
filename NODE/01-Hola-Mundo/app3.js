console.log('Inicio del programa');//1

//Las funciones se leen luego se ejecutan. instrucciones no bloqueantes en sincrono
setTimeout(()=>{
    console.log('primer Timeout');//5
},3000);

setTimeout(()=>{
    console.log('segundo Timeout');//3
},0);

setTimeout(()=>{
    console.log('tercero Timeout');//4
},0);

console.log('Fin de programa');//2