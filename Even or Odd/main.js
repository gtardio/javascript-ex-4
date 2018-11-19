// L’utente sceglie pari o dispari e un numero da
// 1 a 5. Generiamo un numero random (sempre
// da 1 a 5) per il computer e dichiariamo chi ha
// vinto.


var userEvenOdd = prompt("Scegli pari o dispari");

var inputNumber = parseInt(prompt("Scegli un numero tra 1 e 5"));
document.writeln( "Il numero inserito dal giocatore è: " + inputNumber + "<br>");

//  creo una funzione che genera un numero casuale tra un input minimo e uno massimo
function generatoreRandom(minValue, maxValue) {

  return Math.floor(Math.random () * (maxValue-minValue +1) + minValue );

}

// funzione che restituisce il valore booleano true se il numero analizzato è pari altrimenti false se dispari
function evenOrOdd(number) {
  var pari = true;
  if (number %2 != 0) {
    var pari = false;
  }
  return pari;
}

// stampo a schermo la scelta dell'utente tra pari e dispari
if (userEvenOdd === "pari") {
  var pari = true;
  document.writeln("Il giocatore ha scelto: Pari" + "<br>")
}
else if (userEvenOdd === "dispari"){
  var dispari = false;
  document.writeln("Il giocatore ha scelto: Dispari" + "<br>")
}
else {
  document.writeln("Non hai inserito corretamente i dati" + "<br>");
}

// uso la funzione per scegliere a caso un numero da 1 a 5 per il cpu
var cpuNumber = generatoreRandom(1,5);
document.writeln('Il numero Random della CPU è: ' + cpuNumber + "<br>");

// sommo il numero inserito dall'utente con il numero generato random dal computer
var sum = inputNumber +cpuNumber;

// controllo se la somma sia pari o dispari
var sumcheck = evenOrOdd(sum);

if (sumcheck === true) {
  alert("Complimenti, hai vinto!");
  document.writeln("HAI VINTO!");

}
else {
  alert("Peccato, hai perso!");
  document.writeln("HAI PERSO!");
}
