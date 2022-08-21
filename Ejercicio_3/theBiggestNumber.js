

listLength= prompt ("How many numbers do you have ?");

numberList=[];


for (let i=0; i <=listLength-1; i++){
    newNumber=prompt ("introduzca un numero: ");
    numberList.push(parseInt(newNumber));
}
console.log(numberList);
/* 
function introduceNumbers (){
    for (let i=0; i=listLength; i++){
        newNumber=prompt ("introduzca un numero: ");
        numberList.push(newNumber);
    }
} */

////////////////////////////////

theBiggestnumber=null;

numberList.forEach((element) => {
    if(theBiggestnumber === null) {
        theBiggestnumber = element;
    }
    else {
        if (theBiggestnumber < element){
            theBiggestnumber=element;
        }
    }
    console.log(theBiggestnumber);

});

console.log("El numero mas grande es: " + theBiggestnumber);