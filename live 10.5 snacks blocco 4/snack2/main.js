//Blocco 4 - Sanck 2
//Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
var triangoloRett = {
    base: 20,
    altezza: 16, 
};
console.log(triangoloRett);

//Calcolare perimetro e area.
var area = triangoloRett.base * triangoloRett.altezza / 2;
console.log("l'area del rettangolo è " + area);
var ipotenusa = ((area * 2) / triangoloRett.altezza);
console.log('l ipotenusa è ' + ipotenusa);

var perimetro = triangoloRett.base + triangoloRett.altezza + ipotenusa;
console.log("il perimetro del rettangolo è " + perimetro);


