// Al caricamento della pagina si visualizzano due colonne di associazioni immagine-concetto
document.addEventListener("DOMContentLoaded", () => {
  const associazioni = [
    { immagine: "./img/aquilone.jpg", concetto: "Vento" },
    { immagine: "./img/cestino.png", concetto: "Riciclo" },
    { immagine: "./img/chiavi.jpg", concetto: "Aprire" },
    { immagine: "./img/giraffa.jpg", concetto: "Collo lungo" },
    { immagine: "./img/impronte.jpg", concetto: "Animale" },
    { immagine: "./img/matita.jpg", concetto: "Temperamatite" },
    { immagine: "./img/nuvola.webp", concetto: "Pioggia" },
    { immagine: "./img/orologio.png", concetto: "Tempo" },
    { immagine: "./img/semaforo.png", concetto: "Regole" },
    { immagine: "./img/uova.jpg", concetto: "Gallina" }
  ];

  let selezioneImmagine = null; // memorizza l’immagine scelta dall’utente
  let selezioneConcetto = null; // memorizza il concetto scelto
  let associazioniUtente = {}; // salva le associazioni che ha fatto l’utente

  //Prendono gli elementi che servono dal HTML
  const imageColumn = document.getElementById("imageColumn");
  const labelColumn = document.getElementById("labelColumn");
  const checkButton = document.getElementById("checkButton");
  const resetButton = document.getElementById("resetButton");
  const scoreDisplay = document.getElementById("scoreDisplay");

  //Questa funzione prende un array e lo mischia in ordine casuale usando Lodash
  function shuffleArray(array) {
    return _.shuffle(array);
  }

  //Questa funzione rimuove tutti gli stili applicati alle card durante il gioco
  function clearAllStyles() {
    _.forEach(document.querySelectorAll(".img-card, .label-card"), card => {
      card.classList.remove("selected", "correct", "wrong", "matched", "disabled");
      card.style.borderColor = "";
      card.style.backgroundColor = "";
      card.style.color = "";
    });
  }

  //Questa funzione applica gli stili alle card durante il gioco
  function updateVisuals() {
    clearAllStyles();
    // Cicliamo tutte le associazioni fatte dall'utente
    _.forOwn(associazioniUtente, (concetto, imgSrc) => {
      // Troviamo la card dell'immagine corrispondente
      const imgCard = _.find([...imageColumn.children], c => c.dataset.src === imgSrc);
      // Troviamo la card del concetto corrispondente
      const labelCard = _.find([...labelColumn.children], c => c.textContent === concetto);

      // Se entrambe le card esistono (immagine e concetto)
      if (imgCard && labelCard) {
        // Aggiungiamo la classe "matched" per indicare che sono abbinate
        imgCard.classList.add("matched");
        labelCard.classList.add("matched");

        // Cambiamo il colore del bordo delle card abbinate 
        imgCard.style.borderColor = "#999";
        labelCard.style.borderColor = "#999";

        // Cambiamo il colore di sfondo delle card abbinate 
        imgCard.style.backgroundColor = "#eeeeee";
        labelCard.style.backgroundColor = "#eeeeee";

        // Cambiamo il colore del testo delle card abbinate 
        imgCard.style.color = "#333";
        labelCard.style.color = "#333";
      }
    });

    // Se è stata selezionata un'immagine (ma non ancora il concetto)
    if (selezioneImmagine) {
      const imgCard = _.find([...imageColumn.children], c => c.dataset.src === selezioneImmagine);
      if (imgCard) {
        imgCard.classList.add("selected");
        imgCard.style.borderColor = "#ff9933";
        imgCard.style.backgroundColor = "#fff2cc";
      }
    }

    // Se è stato selezionato un concetto
    if (selezioneConcetto) {
      selezioneConcetto.classList.add("selected");
      selezioneConcetto.style.borderColor = "#ff9933";
      selezioneConcetto.style.backgroundColor = "#fff2cc";
    }
  }

  function initGioco() {
    //Resetta lo stato del gioco
    selezioneImmagine = null;      
    selezioneConcetto = null;    
    associazioniUtente = {};       
    scoreDisplay.textContent = ""; // Pulisco il testo del punteggio
    imageColumn.innerHTML = "";    // Svuoto la colonna delle immagini
    labelColumn.innerHTML = "";    // Svuoto la colonna dei concetti 

    //Mischio gli array di associazioni per randomizzare l’ordine di immagini e concetti
    const immaginiMischiate = shuffleArray(associazioni);  
    const concettiMischiati = shuffleArray(associazioni);  

    // Creo le carte delle immagini:
    _.forEach(immaginiMischiate, item => {
      const imgCard = document.createElement("div");   // Creo un div per la carta immagine

      imgCard.classList.add("card", "p-2", "selectable", "img-card");
      imgCard.dataset.src = item.immagine;
      imgCard.style.display = "flex";
      imgCard.style.justifyContent = "center";
      imgCard.style.alignItems = "center";

      const img = document.createElement("img");
      img.src = item.immagine;           
      img.style.maxWidth = "100px";      
      img.style.maxHeight = "80px";      
      img.style.userSelect = "none";     

      imgCard.appendChild(img);           
      imageColumn.appendChild(imgCard);   

      // Aggiungo l’evento click per selezionare/deselezionare l’immagine
      imgCard.addEventListener("click", () => {
        if (imgCard.classList.contains("disabled")) return; 
        selezioneImmagine = selezioneImmagine === item.immagine ? null : item.immagine;
        selezioneConcetto = null;      
        updateVisuals();               
      });
    });

    // Creo le carte dei concetti:
    _.forEach(concettiMischiati, item => {
      const labelCard = document.createElement("div");  

      labelCard.classList.add("card", "p-2", "selectable", "label-card");
      labelCard.textContent = item.concetto;
      labelCard.style.display = "flex";
      labelCard.style.justifyContent = "center";
      labelCard.style.alignItems = "center";
      labelCard.style.userSelect = "none";  
      labelCard.style.cursor = "pointer";   
      labelCard.style.minHeight = "50px";   

      // Evento click sulla carta concetto:
      labelCard.addEventListener("click", () => {
        if (labelCard.classList.contains("disabled")) return;  
        if (!selezioneImmagine) return;                        

        associazioniUtente[selezioneImmagine] = labelCard.textContent;  
        selezioneImmagine = null;    
        selezioneConcetto = null;    
        updateVisuals();             
      });

      labelColumn.appendChild(labelCard);  
    });

    //Aggiorno l’interfaccia per riflettere lo stato attuale
    updateVisuals();
  }

  // Quando clicco sul bottone "Check"
  checkButton.addEventListener("click", () => {
    clearAllStyles();  
    let punteggio = 0; 

    _.forOwn(associazioniUtente, (concettoUtente, imgSrc) => {
      const corretta = _.find(associazioni, a => a.immagine === imgSrc)?.concetto === concettoUtente;

      const imgCard = _.find([...imageColumn.children], c => c.dataset.src === imgSrc);
      const labelCard = _.find([...labelColumn.children], c => c.textContent === concettoUtente);
      if (!imgCard || !labelCard) return;

      if (corretta) {
        punteggio++;                      
        imgCard.classList.add("correct"); 
        labelCard.classList.add("correct");
        imgCard.style.borderColor = "#28a745";        
        labelCard.style.borderColor = "#28a745";
        imgCard.style.backgroundColor = "#d4edda";    
        labelCard.style.backgroundColor = "#d4edda";
        imgCard.style.color = "#155724";               
        labelCard.style.color = "#155724";
      } else {
        imgCard.classList.add("wrong");
        labelCard.classList.add("wrong");
        imgCard.style.borderColor = "#dc3545";       
        labelCard.style.borderColor = "#dc3545";
        imgCard.style.backgroundColor = "#f8d7da";    
        labelCard.style.backgroundColor = "#f8d7da";
        imgCard.style.color = "#721c24";               
        labelCard.style.color = "#721c24";
      }
    });

    scoreDisplay.textContent = `Hai ottenuto ${punteggio} su ${associazioni.length} risposte corrette.`;

    _.forEach(document.querySelectorAll(".img-card, .label-card"), card => {
      card.classList.add("disabled");
    });
  });

  // Quando clicco sul bottone "Reset"
  resetButton.addEventListener("click", () => {
    initGioco();  
    window.scrollTo({ top: 0, behavior: "smooth" });  
  });

  // Avvio il gioco appena la pagina è caricata
  initGioco();
});
