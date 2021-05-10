//1a:
//Creare un oggetto palla che abbia le seguenti proprietà.

var palla = {
    'nome':'palla',
    peso: 10,
}
for (var key in palla){
    console.log(palla[key]);
}

//Snack 1B
//Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
var modificaPeso = prompt('Definisci il nuovo peso della palla')
palla.peso = modificaPeso;
console.log('il nuovo peso è ' + palla.peso);