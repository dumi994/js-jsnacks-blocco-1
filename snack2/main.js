//L’utente inserisce due parole in successione, con due prompt.
var parola_1 = prompt('Inserisci una parola')
var parola_2 = prompt('Inserisci una seconda parola')
console.log(parola_1, parola_2);



if(parola_1.length === parola_2.length ){
    console.log('try again')
}else if (parola_1.length > parola_2.length){
    console.log(parola_1 + 'è più lunga di ' + parola_2)
}else{

}


