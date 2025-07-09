//funzione per verifare se la parola è palindroma
function isPalindroma(string){
  //definizione variabili
  const reversed = string.split("").reversed().join('').toLowerCase();


  //controllo se la parola inserita è uguale al suo inverso
  if(string === reversed){
    return true;
  }
    // se non è uguale
  else{
    return false;
  }
}

