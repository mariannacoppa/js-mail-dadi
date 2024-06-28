// definisco elenco di iscritti
const iscritti = ["densimetra@gmail.com", "prova@gmail.com", "brugola@gmail.com", "mare@gmail.com"];
console.log(iscritti);
// recupero il pulsante dal dom
const button = document.getElementById("submit");

button.addEventListener('click', function () {
    // recupero il valore inserito nel campo input
    let email = document.getElementById('email').value.toLowerCase();
    console.log(email);
    // inserisco la variabile di controllo (flag)
    let found_iscritti = false;
    // ciclo l'array e confronto l'elemento da cercare con la mail inserita nel form
    for (let i = 0; i < iscritti.length; i++) {
        if(iscritti[i].toLowerCase() === email) {
            // se la condizione è vera, imposto la variabile di controllo true
            found_iscritti = true;
        }
    }
});
