//Chiedi un numero di 4 cifre all’utente


//calcola la somma di tutte le cifre che compongono il numero. (modificato) 



//SPLIT


/* var userNumber = '1234';
var number_array = userNumber.split('');
var somma = 0;


for (var i = 0; i < number_array.length; i++){
    var el = number_array[i];
    somma +=Number(el);
}

console.log(somma);
 */
var userNumber = prompt('inserisci un numero di 4 cifre');
var number_array = userNumber.split('');

var somma2 = 0;
for (var i = 0; i < userNumber.length; i++){
    var el = userNumber[i];
    somma2 += Number(el);
}
console.log(somma2);