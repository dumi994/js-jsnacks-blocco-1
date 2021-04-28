//Crea un array vuoto.
var array_numbers = [];
//Chiedi per 6 volte all’utente di inserire un numero,
/* var numeri = Number(prompt='inserisci un numero'); */

for (var i = 0; i < 6; i++){
    var userNumber = Number(prompt('inserisci un numero'))
    if (userNumber % 2 !== 0){
        array_numbers.push(userNumber);
    }
}

console.log(array_numbers);
//se è dispari inseriscilo nell’array. 