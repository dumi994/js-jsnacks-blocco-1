var numUtente = Number(prompt('Inserisci un numero'));
var numPow = Math.pow(numUtente, 3);
console.log(numPow);
document.getElementById('risultato').innerHTML = numPow;
document.getElementById('testo').innerHTML = 'il risultato del tuo quadrato è : ';