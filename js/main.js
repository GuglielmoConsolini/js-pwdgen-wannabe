alert("Imposta una password super sicura LOL");

const firstName = prompt ( "Il tuo Nome" );

const secondName = prompt ("il tuo secondo Nome");

const color = prompt ("Colore preferito");

let finePassword = "#24";

let passWord = firstName + secondName + color + finePassword ;

alert("La tua password è :" + passWord);

document.getElementById("psswrd").innerHTML = `La tua Password é : ${passWord}`;

