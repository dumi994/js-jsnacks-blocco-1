//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
    var utenti = ['mario', 'gigi', 'paolo', 'maura', 'alfonsina'];
    var tuoNome = prompt('Come ti chiami?')
    console.log(tuoNome);
    var invitato = false;
    var message;

    for (var i = 0; i < utenti.length; i++ ){
        var accettato = utenti[i];
        if ( utenti [i] == tuoNome) {
            invitato = true;}
        }
    

    console.log(invitato);

    if (invitato == true){
        message = 'benvenuto alla festa';
    } else {
        message = 'mi dispiace, non sei sulla lista'
    }

    document.getElementById('titolo').innerHTML = message;
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa