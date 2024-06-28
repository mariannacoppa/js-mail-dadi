// al click sul pulsante, vengono generati i due numeri random
const button = document.getElementById('lancia');
button.addEventListener('click', function () {
    // creo un generatore di numeri random compresi tra 1 e 6 (escludendo i decimali) da attribuire al computer
    let pc_dice = Math.floor((Math.random() * 6 + 1));
    document.getElementById('pc_dice').innerText = pc_dice;
    // creo un generatore di numeri random compresi tra 1 e 6 (escludendo i decimali) da attribuire all'utente
    let human_dice = Math.floor((Math.random() * 6 + 1));
    document.getElementById('human_dice').innerText = human_dice;
    // assegno istruzioni condizionali
    if (human_dice > pc_dice) {
        // SE il numero utente è maggiore del numero computer, appare un messaggio contenente la scritta "hai vinto"
        document.getElementById('result').innerText = "Hai vinto!";
    }
    else if (human_dice < pc_dice) {
        // SE il numero utente è minore del numero computer, appare un messaggio contenente la scritta "ritenta"
        document.getElementById('result').innerText = "Ritenta";
    }
    // ALTRIMENTI appare un messaggio con la scritta "pareggio"
    else {
        document.getElementById('result').innerText = "Pareggio";
    }
})