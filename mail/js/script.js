// definisco elenco di iscritti
const iscritti = ["densimetra@gmail.com", "prova@gmail.com", "brugola@gmail.com", "mare@gmail.com"];
// recupero il pulsante dal dom
const button = document.getElementById("submit");

button.addEventListener('click', function () {
    // recupero il valore inserito nel campo input
    let email = document.getElementById('email').value.toLowerCase();
    console.log(email);

});
