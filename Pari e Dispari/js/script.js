//definizione funzione
function randomNumber(){
  return Math.floor(Math.random() * 5) +1;
}

//definizione della funzione che stabilisce se la somma dei numeri è pari o dispari
function evenOrOdd(sum){
  if(sum % 2 === 0){
    return 'pari'
  }
  else{
    return 'dispari'
  }
}

//definizione variabili
const choice = prompt('Inserisci pari o dispari');
const userNumber = parseInt(prompt('Inserisci in numero tra 1 e 5'));
const pcNumber = randomNumber();

const sum = userNumber + pcNumber;
