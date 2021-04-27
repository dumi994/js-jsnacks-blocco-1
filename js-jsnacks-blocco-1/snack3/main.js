//Snack 3:
//Il software deve chiedere per 10 volte all’utente di inserire un numero.
var numero= Number(prompt('inserisci un numero'));

var somma = 0;

for( var i = 0; i < 10; i++){
    var numeroUtente = Number(prompt('inserisci un numero'))
    somma += numeroUtente;
}
console.log(somma);
