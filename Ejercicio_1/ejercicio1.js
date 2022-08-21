/*Crea un arreglo en javascript con 10 numeros.
Itera sobre el arreglo e imprime el resultado.
Filtra los elementos que son menores a 20 (busca un funcion que haga esto) e imprimelos en pantall
Modifica todos los elementos del arreglo  original multiplicandolos x 2 e imprimelos en pantalla*/

//1.- elementos del arreglo
let numberList = [05,20,28,10,02,16,29,07,17,23];
lonjitudDelArreglo= numberList.length;
console.log(lonjitudDelArreglo);


for(inicio=0; inicio<lonjitudDelArreglo; inicio++){
    element=numberList[inicio];
    console.log(element);
}

//2.- Elementos menores a 20

numbersUnder20= numberList.filter(numberList => numberList <20);
console.log(numbersUnder20);

//3.- Elementos del arreglo original multiplicado por 2
numberListX2=numberList.map(x => x*2);
console.log(numberListX2);

//4.- Elementos del arreglo inicial usando For of
for (let elementsOf of numberList) {
    console.log(elementsOf);
}

//5.-Elementos del arreglo inicial usando Foreach
numberList.forEach(element => {
    console.log(element);
});




 






