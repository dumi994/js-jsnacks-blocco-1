//stampa la potenza di 2 fino a 1000s

var counter = 0;
while(Math.pow(2, counter) < 1000){
    console.log(Math.pow(2, counter));
    counter++
}