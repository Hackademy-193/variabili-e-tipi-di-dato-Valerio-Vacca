// qui scriverò js

// console.log(10);
// console.log('ciao');
// console.log(5 + 2);


// let numeroDiTelefono = 333222111222;
// console.log(numeroDiTelefono);

// numeroDiTelefono = 'Donato';
// console.log(numeroDiTelefono);


// let numeroDiTelefono = "Madooo Madooo";
// console.log(numeroDiTelefono);

// const NUMERO = 5;
// NUMERO = "Donato";
// console.log(NUMERO);

// let nome;
// nome = 'Valerio';
// console.log(nome);

// let numerone = 10;
// console.log(typeof numerone);

// let parola = "Donato";
// console.log(typeof parola);

// let numeraccio = 5.5;
// console.log(typeof numeraccio);

// let numerone = 10;
// console.log(numerone);

// let parola = "Donato";
// console.log(parola);

// ATTENZIONE! I prompt mi modificano i numeri in string. Tutti gli output di prompt saranno string.
// let numeraccio = prompt("Inserisci un numero");
// console.log(numeraccio);

// E se io volessi per forza un numero perché quello mi serve?
// posso usare il papà di tutti i numeri, nonché l'oggetto Number

// let numeraccio = Number(prompt("Inserisci un numero"));
// console.log(numeraccio);

// OPERAZIONI MATEMATICHE
// let numero1 = 10;
// let numero2 = 20;
// let somma = numero1 + numero2;
// console.log(somma);

// let media = somma / 2;
// console.log(media);


// let numero = 'Ciao';
// let numero2 = 5;

// let sottrazione = numero - numero2;
// console.log(sottrazione);

// let numero = 10.1;
// let intero = Math.ceil(numero);

// console.log(intero);

// let numeroRandom = Math.random();
// console.log(numeroRandom);


// let max = 100;
// let min = 1;

// let numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);

// console.log(numeroRandom);

// let age = 35;
// let sayHello = 'Ciao a tutti, mi chiamo Valerio ed ho ' + age + ' anni e mi piace l\'aurora boreale';
// let sayHello = "Ciao a tutti, mi chiamo Valerio ed ho " + age + " anni e mi piace l'aurora boreale";

// let sayHello = `Ciao a tutti, mi chiamo Valerio ed ho ${age} anni e mi piace l'aurora boreale`;
// console.log(sayHello);



// let nome = "Valerio";
// let age = 35;
// let frase1 = "Ciao a tutti, mi chiamo"
// let frase2 = "e mi piace l'aurora boreale"

// let fraseCompleta = frase1 + ' ' + nome + ` ed ho ${age} anni ` + frase2;

// console.log(fraseCompleta);


// let numero1 = 10;
// let numero2 = 20;
// let somma = numero1 + numero2;
// let risultato =`La somma tra ${numero1} e ${numero2} è ${somma}.`
// console.log(risultato);

// Vado in pizzeria. 
// La pizza costa 8
// La bibita costa 2
// Un dolce costa 4
// Quanto ho pagato?

// let pizza = 8;
// let drink = 2;
// let dessert = 4;

// let bill = pizza + drink + dessert;

// console.log(`Il totale è di ${bill} EURO `);

// Operatori di confronto

// console.log(10 !== '10');

// login dell'utente

// let username = "admin";
// let password = 1234;

// let loginCorretto = username == "admin" && password == 1234;

// console.log(loginCorretto);

// Stipendio
// ricevi uno stipendio mensile di 2000 euro
// Calcola quanto guadagni ogni 6 mesi
// Calcola quanto guadagni in un anno

// let pecunia = 2000;
// let sixMonths = pecunia * 6;
// let oneYear = pecunia * 12;

// console.log(`In 6 mesi ho guadagnato ${sixMonths} euro.`);
// console.log(`In un anno ho guadagnato ${oneYear} euro.`);

// Due Pokémon si stanno sfidando.

// All'angolo sinistro abbiamo Pikachu.
// punti vita: 100
// attacco: 25
// difesa: 10

// All'angolo destro abbiamo Donato.
// punti vita: 90
// attacco: 30
// difesa 8

// calcolare il danno che fa pikachu a donato - fatto
// e calcola quanti punti vita restano a donato dopo l'attacco di Pikachu - fatto
// infine controlla se donato è ancora vivo (se i suoi punti vita sono maggiori di 0)

let nomePokemon1 = "Pikachu"; 
let vitaPikachu = 100;
let attaccoPikachu = Math.floor(Math.random() * (200 - 20 + 1) + 20);
let difesaPikachu = 10;

let nomePokemon2 = "Donatomon";
let vitaDonatomon = 90;
let attaccoDonatomon = 30;
let difesaDonatomon = 8;


let dannoPikachu = attaccoPikachu - difesaDonatomon;

vitaDonatomon = vitaDonatomon - dannoPikachu;

let donatomonVivo = vitaDonatomon > 0;

console.log(nomePokemon1 + " attacca " + nomePokemon2);
console.log(`L'attacco di ${nomePokemon1} in questo turno è di ${attaccoPikachu}`);
console.log(`Danno inflitto: ${dannoPikachu}`);
console.log(`Vita restante di ${nomePokemon2}: ${vitaDonatomon}`);
console.log(`${nomePokemon2} è ancora vivo? ${donatomonVivo}`);