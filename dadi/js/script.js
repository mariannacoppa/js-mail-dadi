// creo un generatore di numeri random compresi tra 1 e 6 (escludendo i decimali) da attribuire al computer
let pc_dice = Math.floor((Math.random() * 6 + 1));
console.log(pc_dice);
document.getElementById('pc_dice').innerText = pc_dice;
// creo un generatore di numeri random compresi tra 1 e 6 (escludendo i decimali) da attribuire all'utente
let human_dice = Math.floor((Math.random() * 6 + 1));