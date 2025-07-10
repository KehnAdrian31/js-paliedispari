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
const userNumber = parseInt(prompt('Inserisci un numero tra 1 e 5'));
const pcNumber = randomNumber();

const sum = userNumber + pcNumber;

console.log(`il numero generato dal pc è ${pcNumber}`)
console.log(`il numero del utente è ${userNumber}`)
console.log(`la scelta del utente è ${choice}`)
//stabilisco il vincitore
if(evenOrOdd(sum)=== choice){
  console.log(`il valore della somma è ${sum}. L' utente ha vinto`)
}
else{
  console.log(`il valore della somma e ${sum}. L' utente ha perso`)
}