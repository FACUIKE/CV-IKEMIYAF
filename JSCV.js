


function BotonIluminacion() {
    let theme = document.getElementById("theme");
    console.log("ingreso")
    if (theme.getAttribute("href") == "modoDia.css") {
      theme.href = "modoNoche.css"; 
      console.log("noche")
    } else {
      theme.href = "modoDia.css";
      console.log("dia")
    }
}





// TERCIARIO

var words1 = ['COMPLETADO', 'RECIBIDO', 'TECNICO', 'SUPERIOR', 'COMERCIO', 'INTERNACIONAL','Y', 'ADUANAS'],
    wordWrapper = document.getElementById('cambiarPalabra2'),
    wordWrapperContent = wordWrapper.innerHTML,
    addingWord = false,
    counter = 1;

setInterval(function(){

  if(wordWrapperContent.length > 0 && !addingWord ) {
    wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
    wordWrapperContent = wordWrapper.innerHTML;
  } else {
    addingWord = true;
  }

  if( addingWord ){
    if( wordWrapperContent.length < words1[counter].length  ) {
      wordWrapper.innerHTML = words1[counter].slice(0, wordWrapperContent.length + 1);
      wordWrapperContent = wordWrapper.innerHTML;
    } else {
      if( counter < words1.length) {
        counter ++
      }
      addingWord = false;
    }
  }

  if( counter == words1.length) {
    counter = 0;
  }

}, 250);


