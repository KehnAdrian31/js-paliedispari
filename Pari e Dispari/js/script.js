//definizione funzione
function randomNumber(){
  return Math.floor(Math.random() * 5) +1;
}

//definizione variabili
const choice = prompt('Inserisci pari o dispari');
const userNumber = parseInt(prompt('Inserisci in numero tra 1 e 5'));
const pcNumber = randomNumber();

const sum = userNumber + pcNumber;