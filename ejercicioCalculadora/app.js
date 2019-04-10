console.log("MiCalculadora")
console.log("Sumando 2 + 3 + 4 + 5 : " + sumar(2,3,4,5));
var display = 0;
console.log("Pulso el 1 y sumo, y devuelve : " + sumar(1))
console.log("Pulso el 2 y sumo, y devuelve : " + sumar(2))
console.log("Pulso el 3 y sumo, y devuelve : " + sumar(3))
console.log("Pulso el 4 y sumo, y devuelve : " + sumar(4))

function operar(operador,valor){
    display = eval(display + " " + operador + " " + valor); 
    return display;
}
console.log(operar("+",1));
function sumar(primero , segundo){
    if(arguments.callee.length == arguments.length){
        return primero + segundo;
    }else if(arguments.callee.length < arguments.length) {
        var resultado = sumar(arguments[0],arguments[1]);
        for(let i = 2; i < arguments.length; i++){
            resultado = sumar(resultado,arguments[i]);
        }
        return resultado;
    }else if(arguments.length == 1){
        display = sumar(display,primero);
        return display;
    }
}
function restar(primero, segundo){
    if(arguments.callee.length == arguments.length){
        return primero - segundo;
    }
}
function multiplicar(primero, segundo){
    if(arguments.callee.length == arguments.length){
        return primero * segundo;
    }
}
function dividir(primero,segundo){
    if(arguments.callee.length == arguments.length){
        return primero / segundo;
    }
}

function CalculadoraDeLaMuerte(){
    this.__display = 0;
    
}
CalculadoraDeLaMuerte.prototype.operar = function (operador,valor){
    this.__display = eval(this.__display + " " + operador + " " + valor); 
}
CalculadoraDeLaMuerte.prototype.display = function (){
    return this.__display; 
}
var calculadora = new CalculadoraDeLaMuerte();
console.log("Pulso el 1 y luego + ")
calculadora.operar("+",1);
console.log(calculadora.display());
console.log("Pulso el 2 y luego - ")
calculadora.operar("-",2);
console.log(calculadora.display());
console.log("Pulso el 3 y luego * ")
calculadora.operar("*",3);
console.log(calculadora.display());
console.log("Pulso el 3 y luego / ")
calculadora.operar("/",3);
console.log(calculadora.display());