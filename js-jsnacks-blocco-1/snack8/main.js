//Chiedi un numero di 4 cifre all’utente
var nrUtente = Number(prompt('Inserisci un numero di 4 cifre'))
console.log(nrUtente);

//calcola la somma di tutte le cifre che compongono il numero. (modificato) 

var valore = nrUtente;
    sum = 0;

while (valore) {
    sum += valore % 10;
    valore = Math.floor(valore / 10);
}

console.log(sum);