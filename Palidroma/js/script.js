//funzione per verifare se la parola è palindroma
function isPalindroma(string){
  //definizione variabili
  const reversed = string.split("").reverse().join('').toLowerCase();


  //controllo se la parola inserita è uguale al suo inverso
  if(string === reversed){
    return true;
  }
    // se non è uguale
  else{
    return false;
  }
}

// definizione delle variabili
const word = prompt('Inserisci la parola');


//chiamo la funzione
if(isPalindroma(word) === true){
  console.log(`La parola ${word} è palindroma`)
}
else{
  console.log(`La parola ${word} non è palindroma`)
}