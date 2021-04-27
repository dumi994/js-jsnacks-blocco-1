// inserisci 2 numeri in successione con 2 prompt

var number_1 = Number(prompt('inserisci un numero'));
var number_2 = Number(prompt('inserisci un altro numero'));

console.log(number_1, number_2);


if(number_1 === number_2){
    console.log('i numeri sono uguali, rirpova');
} else if (number_1 > number_2) {
    console.log(number_1);
} else {
    console.log(number_2);
}