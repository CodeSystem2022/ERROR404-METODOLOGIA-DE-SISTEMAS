console.log('Hola a toda la cohorte 2022')

// var ya no se usa más, esta deprecado, o usamos LET o CONST
let i = 0 

setInterval(function() {
    console.log(i);
    i++; 
}, 1000)

console.log('Segunda instrucción') // es asíncrono