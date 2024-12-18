// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


//1 Chiedere all'utente il numero di chilometri che deve effettuare
    const km = parseInt(prompt("Inserire numero di km da effettuare"));
    console.log("Km da effettuare: " + km );

//2 Chiedere all'utente la sua età
    const età = parseInt(prompt("Inserire età dell'utente"));
    console.log("Età dell'utente è: " + età + " " + "anni" );


//-- Calcolare il prezzo totale del viaggio --

    //1 Definire il prezzo del biglietto in base ai km (0.21 € al km)
        
        let prezzoAlkm = 0.21;
        let prezzoBase = km*prezzoAlkm;
        
        


    // 2 Applicare uno sconto del 20% per i minorenni
        let prezzoSconto = 0;
        if (età < 18) {
            prezzoSconto = prezzoBase * 0.20; // Sottrai il 20% dal totale
        }

    // 3 applicare uno sconto del 40% per gli over 65
        
        else if (età > 65) {
            prezzoSconto = prezzoBase * 0.40; // Sottrai il 40% dal totale
        }


//      

    // // Prezzo intero per chi non usufruisce lo sconto



// OUTPUT PREZZO FINALE
        let prezzoFinale = prezzoBase - prezzoSconto;

        console.log ("Il prezzo finale sarà:" + prezzoFinale.toFixed(2) + "€")




