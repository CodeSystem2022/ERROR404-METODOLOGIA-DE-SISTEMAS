console.log('Hola a toda la cohorte 2022');

var i = 0;
setInterval(function() {//recibe 2 argumentos
    console.log(i);
    i++; // Ctrol C para detener la consola
    //Creamos error:
    //if (i ===5){
    //    console.log('Forzamos un error');
    //    var a = 3 + z;
    //}
}, 1000);
console.log('Segunda instrucción'); //es asíncrono