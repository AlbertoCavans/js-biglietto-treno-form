# Form per calcolare il prezzo del biglietto di un treno

## Obiettivo

L'esercizio consiste nel preparare un form che chieda all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni il form dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65

Prima elaboriamo l'output di prezzo in console (con massimo due decimali, per indicare centesimi sul prezzo), poi elaboriamo il form in modo più articolato e (bonus) visualizziamo il prezzo in un fac-simile di un biglietto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)

## Svolgimento

- Elaborare un input che chieda il n.o di km all'utente
- Elaborare un input che chieda il n.o di di anni dell'utente
- Elaborare un bottone che attivi il calcolo del prezzo
  - SE l'età inserita dall'utente è minore di 18 anni
    - ALLORA applicare uno sconto del 20%
  - SE l'età inserita dall'utente è maggiore di 65 anni
    - ALLORA applicare uno sconto del 40%
  - ALTRIMENTI non si applicano sconti/lo sconto applicato è pari a zero
- Stampare in prezzo finale sulla console
- Elaborare il form in modo più articolato, purché vengano preservati i punti cardine già descritti e stampare il prezzo finale in forma umana
- Bonus: inserire il prezzo finale in forma umana in un fac-simile di biglietto
