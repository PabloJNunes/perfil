function send() {

  var name = document.getElementById('nomeDigitado');

  if (name.value != "") {
    alert("Hi dear Mr(s) "+name.value+", Done.");
  } else {
    alert("Please enter a valid name");
  }

}
