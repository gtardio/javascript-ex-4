// creare una funzione per capire se una parola è Palindroma


var inputUser = prompt('Inserisci una parola');
document.writeln("La parola inserita è: " + inputUser + "<br>");

var reverse = inputUser.split('').reverse().join('');
// console.log(reverse);
document.writeln("La parola al contrario risulta: " + reverse);

function isPalindrome (inputUser) {
  return inputUser === inputUser.split('').reverse().join('');
}


var palindromeWord = isPalindrome(inputUser);
console.log(palindromeWord);
