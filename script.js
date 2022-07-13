//Este programa sirve para sumar un numero y se va guardando en la memoria el numero sumado
// Tambien si tecleas "0" se para el programa

let num = parseInt(prompt("Ingrese un numero mayor a cero, si desea parar el ciclo escriba 0"));

if(num > 0){
for (let i = 0; i < 5; i++ ){
    let numDos = parseInt(prompt("Ingrese otro numero"));
    if (numDos >= 1){
        num = numDos + num;
        alert("El resultado del numero sumado es: "+num);
    }else{
        alert("Usted escribio 0");
        break;
    }
}
}else{
    alert("Usted escribio 0");
}