/*
Ejercicio 2

Crea una pagina HTML sencilla con un HTML y javascript.
La pagina debe de tener inputs para pedir nombre, el anio de nacimiento del usuario y un boton para disparar una accion.
Cuando el usuario presione el boton imprime en consola "Hola <nombre> tienes <X anios>".
Bonus: muestra en HTML el mismo mensaje, no solo en consola.*/

function myFunction() { 
    let name= document.getElementById("name").value;
    let age=  document.getElementById("age").value;
    console.log(name);
    console.log("Hi your name is: " + name + " and you are "+ age + " years old");

    const newParagraph= document.createElement("p");
    let gretting= document.createTextNode ("Hi your name is: " + name + " and you are " + age + " years old.");

    newParagraph.appendChild(gretting);

    const element= document.getElementById("div1");
    element.appendChild(newParagraph)



}






