METODO INLINE -> mai corretto, a meno che la libreria che stiamo utilizzando lo fa di default
METODO INTERNO -> situazionale -> mi modifica la dinamicità solo su quella specifica pagina html dove vado ad utilizzarlo
METODO ESTERNO -> sempre corretto -> funzione globale -> mi modifica tutte le pagine html, dove vado a linkarlo

il nostro primo metodo (funzione) -> come riconosco un metodo? vuole le tonde
console.log()
log è un metodo della console che si trova nel browser
è un metodo creato dagli sviluppatori per gli sviluppatori e serve a fare dei test -> a verificare che il codice funzioni
quando ho finito di testare, i console.log() devono sparire dal mio codice

Locazioni di memoria
- Variabili -> la variabile è un dato che può cambiare nel tempo
- Costanti -> la costante è un dato che non può cambiare nel tempo

MA ATTENZIONE ESISTONO TIPI DI DATO CHE POSSONO TRASFORMARSI (POSSONO MUTARE)

let e var, vengono chiamate keyword
var -> per inizializzare una variabile (usato fino al 2015)
let -> per inizializzare una variabile

come si dichiara una variabile?
let + nome variabile = dato ;
; -> il ; chiude il mio statement

regole del nome della variabile:
- il nome di una variabile non può avere spazi
let numero di telefono -> NO

- il nome di una variabile non può contenere simboli strani all'infuori di $ e di _
let ilMioNumero! -> NO
let il_mio_numero -> Sì

- il nome di una variabile non può mai iniziare con un numero
let numero1 -> Sì
let 1numero -> NO

- se vogliamo dare al nome di una variabile più parole, sfrutto il camelCase
let numeroDiTelefono -> Sì

Come si dichiara una costante?
Per il nome, valgono le stesse regole della variabile ma per convenzione globalmente accettata, si usa il nome tutto in MAIUSCOLO

- inoltre, devo usare la keyword const
const NUMERODITELEFONO = 33333;


prompt() -> fa comparire una finestra nel browser per far inserire dati all'utente

alert() -> fa comparire una finestra nel browser che mostra dati all'utente

TIPI DI DATO
In JavaScript esistono 2 macrotipi di dato:

- Primitivi: sono IMMUTABILI (non possono trasformarsi), inoltre sono leggeri -> la trasmissione è istantanea

- Non primitivi, detti anche Strutturali: sono MUTABILI (possono trasformarsi), inoltre sono pesanti -> la trasmissione è lenta

QUALI SONO I DATI PRIMITIVI?
- number (in JS i number comprendono tutti i numeri, sia quelli interi, che quelli a virgola mobile)
- string (la parola 'ciao' contornata da apicetti è una stringa)
- booleani (true o false) -> il risultato di una condizione e/o confronto
- undefined (dichiarazione di una variabile senza l'assegnazione di valore)
let nome;
- null (assenza di oggetto)

QUALI SONO I TIPI DI DATO NON PRIMITIVO?
- gli oggetti

per verificare il tipo di dato che ho in output, posso sfruttare l'operatore typeof
che fa parte degli operatori unari

OPERATORI MATEMATICI
+ -> addizione
- -> sottrazione
* -> moltiplicazione
/ -> divisione
** -> elevazione a potenza
% -> modulo -> cioè il resto della divisione -> i possibili risultati sono sempre 0 o 1. Se è 0 il numero è pari. Se è 1 il numero è dispari

quando in output ho un NaN (Not a Number), lo devo risolvere subito! Perché qualsiasi operazione aggiungo, mi tornerà sempre NaN

+ -> overloading operator -> viene usato sia per le operazioni matematiche, sia per la concatenazione tra stringhe

TYPE COERCION -> è la capacità che possiede javascript di riconoscere che due operandi, quando c'è il simbolo + in mezzo, se sono di tipi diversi, prova comunque a vedere se riesce a convertire nella concatenazione un tipo di dato nell'altro
se ci riesce mi restituirà un valore (che dobbiamo comunque controllare se era quello che volevamo ottenre), se non dovesse riuscire a fare la type coercion, riceveremo in output un bel NaN