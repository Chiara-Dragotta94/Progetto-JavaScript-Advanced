// Al caricamento della pagina si visualizzano due colonne di associazioni immagine-concetto//
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

  let selezioneImmagine = null; // memorizza l’immagine scelta dall’utente//
  let selezioneConcetto = null; // memorizza il concetto scelto//
  let associazioniUtente = {}; // salva le associazioni che ha fatto l’utente//

  //Prendono gli elementi che servono dal HTML//
  const imageColumn = document.getElementById("imageColumn");
  const labelColumn = document.getElementById("labelColumn");
  const checkButton = document.getElementById("checkButton");
  const resetButton = document.getElementById("resetButton");
  const scoreDisplay = document.getElementById("scoreDisplay");

  //Questa funzione prende un array e lo mischia in ordine casuale//
 function shuffle(array) {
  // Cicliamo partendo dalla fine dell'array verso l'inizio (escluso il primo elemento)
  for (let i = array.length - 1; i > 0; i--) {
    // Generiamo un numero casuale j compreso tra 0 e i (inclusi)
    const j = Math.floor(Math.random() * (i + 1));
    // Scambiamo l'elemento alla posizione i con quello alla posizione j
    [array[i], array[j]] = [array[j], array[i]];
  }
  // Alla fine restituiamo l'array mischiato
  return array;
}

//Questa funzione rimuove tutti gli stili applicati alle card durante il gioco//
  function clearAllStyles() {
    document.querySelectorAll(".img-card, .label-card").forEach(card => {
      card.classList.remove("selected", "correct", "wrong", "matched", "disabled");
      card.style.borderColor = "";
      card.style.backgroundColor = "";
      card.style.color = "";
    });
  }

//Questa funzione applica gli stili alle card durante il gioco//
 function updateVisuals() {
  clearAllStyles();
// Cicliamo tutte le associazioni fatte dall'utente
  for (const [imgSrc, concetto] of Object.entries(associazioniUtente)) {
    // Troviamo la card dell'immagine corrispondente
    const imgCard = [...imageColumn.children].find(c => c.dataset.src === imgSrc);
    // Troviamo la card del concetto corrispondente
    const labelCard = [...labelColumn.children].find(c => c.textContent === concetto);

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
  }

  // Se è stata selezionata un'immagine (ma non ancora il concetto)
  if (selezioneImmagine) {
    // Troviamo la card dell'immagine selezionata
    const imgCard = [...imageColumn.children].find(c => c.dataset.src === selezioneImmagine);
    if (imgCard) {
      // Evidenziamo l'immagine selezionata con bordo arancione e sfondo giallo chiaro
      imgCard.classList.add("selected");
      imgCard.style.borderColor = "#ff9933";
      imgCard.style.backgroundColor = "#fff2cc";
    }
  }

  // Se è stato selezionato un concetto
  if (selezioneConcetto) {
    // Evidenziamo il concetto selezionato con bordo arancione e sfondo giallo chiaro
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
  const immaginiMischiate = shuffle([...associazioni]);  
  const concettiMischiati = shuffle([...associazioni]);  

  // Creo le carte delle immagini:
  immaginiMischiate.forEach(item => {
    const imgCard = document.createElement("div");   // Creo un div per la carta immagine

    // Aggiungo classi CSS per stile e comportamento
    imgCard.classList.add("card", "p-2", "selectable", "img-card");

    // Memorizzo il percorso immagine dentro un attributo personalizzato per riconoscerla
    imgCard.dataset.src = item.immagine;

    // Imposto lo stile per centrare l'immagine dentro la card
    imgCard.style.display = "flex";
    imgCard.style.justifyContent = "center";
    imgCard.style.alignItems = "center";

    // Creo l’elemento immagine vero e proprio
    const img = document.createElement("img");
    img.src = item.immagine;           // Setto la fonte immagine
    img.style.maxWidth = "100px";      // Limito larghezza max
    img.style.maxHeight = "80px";      // Limito altezza max
    img.style.userSelect = "none";     // Evito che si possa selezionare con il mouse

    imgCard.appendChild(img);           // Inserisco l’immagine dentro la card
    imageColumn.appendChild(imgCard);   // Aggiungo la card immagine alla colonna immagini

    // Aggiungo l’evento click per selezionare/deselezionare l’immagine
    imgCard.addEventListener("click", () => {
      if (imgCard.classList.contains("disabled")) return; // Se la carta è disabilitata non fare niente

      // Se l’immagine cliccata è già selezionata la deseleziono altrimenti seleziono questa
      selezioneImmagine = selezioneImmagine === item.immagine ? null : item.immagine;
      selezioneConcetto = null;      // Resetta la selezione del concetto perché sto scegliendo immagine ora
      updateVisuals();               // Aggiorna l’interfaccia visiva (colori, bordi ecc.)
    });
  });

  // Creo le carte dei concetti:
  concettiMischiati.forEach(item => {
    const labelCard = document.createElement("div");  // Creo un div per la carta del concetto

    // Aggiungo classi CSS per stile e comportamento
    labelCard.classList.add("card", "p-2", "selectable", "label-card");

    // Imposto il testo del concetto dentro la carta
    labelCard.textContent = item.concetto;

    // Stile per centrare testo e rendere cliccabile la carta
    labelCard.style.display = "flex";
    labelCard.style.justifyContent = "center";
    labelCard.style.alignItems = "center";
    labelCard.style.userSelect = "none";  // Non selezionabile con il mouse
    labelCard.style.cursor = "pointer";   // Cursor a mano per indicare cliccabilità
    labelCard.style.minHeight = "50px";   // Altezza minima per uniformità

    // Evento click sulla carta concetto:
    labelCard.addEventListener("click", () => {
      if (labelCard.classList.contains("disabled")) return;  // Se disabilitata non fare niente
      if (!selezioneImmagine) return;                        // Se non è stata selezionata immagine, non fare niente

      selezioneConcetto = labelCard;                         // Segna questa carta come concetto selezionato
      associazioniUtente[selezioneImmagine] = labelCard.textContent;  // Associa l’immagine selezionata con il testo del concetto

      selezioneImmagine = null;    // Resetta la selezione immagine
      selezioneConcetto = null;    // Resetta la selezione concetto

      updateVisuals();             // Aggiorna l’interfaccia visiva
    });

    labelColumn.appendChild(labelCard);  // Aggiungo la carta concetto alla colonna concetti
  });

  //Aggiorno l’interfaccia per riflettere lo stato attuale
  updateVisuals();
}


 // Quando clicco sul bottone "Check"
checkButton.addEventListener("click", () => {
  clearAllStyles();  // Pulisco tutte le evidenziazioni precedenti
  let punteggio = 0; // Inizializzo il punteggio a 0

  // Ciclo tutte le associazioni fatte dall'utente (immagine -> concetto)
  for (const [imgSrc, concettoUtente] of Object.entries(associazioniUtente)) {
    // Controllo se l'associazione è corretta confrontando con quella giusta
    const corretta = associazioni.find(a => a.immagine === imgSrc)?.concetto === concettoUtente;

    // Trovo gli elementi visivi corrispondenti (immagine e label)
    const imgCard = [...imageColumn.children].find(c => c.dataset.src === imgSrc);
    const labelCard = [...labelColumn.children].find(c => c.textContent === concettoUtente);

    // Se uno dei due non esiste, passo al prossimo ciclo
    if (!imgCard || !labelCard) continue;

    if (corretta) {
      // Se la risposta è corretta:
      punteggio++;                      // aumento il punteggio
      imgCard.classList.add("correct"); 
      labelCard.classList.add("correct");
      // Cambio colori per evidenziare il corretto
      imgCard.style.borderColor = "#28a745";        
      labelCard.style.borderColor = "#28a745";
      imgCard.style.backgroundColor = "#d4edda";    
      labelCard.style.backgroundColor = "#d4edda";
      imgCard.style.color = "#155724";               
      labelCard.style.color = "#155724";
    } else {
      // Se la risposta è sbagliata:
      imgCard.classList.add("wrong");
      labelCard.classList.add("wrong");
      // Cambio colori per evidenziare l'errore
      imgCard.style.borderColor = "#dc3545";       
      labelCard.style.borderColor = "#dc3545";
      imgCard.style.backgroundColor = "#f8d7da";    
      labelCard.style.backgroundColor = "#f8d7da";
      imgCard.style.color = "#721c24";               
      labelCard.style.color = "#721c24";
    }
  }

  // Mostro il punteggio finale all'utente
  scoreDisplay.textContent = `Hai ottenuto ${punteggio} su ${associazioni.length} risposte corrette.`;

  // Disattivo i clic sulle immagini e label per evitare modifiche dopo la verifica
  document.querySelectorAll(".img-card, .label-card").forEach(card => {
    card.classList.add("disabled");
  });
});

// Quando clicco sul bottone "Reset"
resetButton.addEventListener("click", () => {
  initGioco();  // Riavvio il gioco da capo
  window.scrollTo({ top: 0, behavior: "smooth" });  // Scrolla in cima alla pagina in modo fluido
});

// Avvio il gioco appena la pagina è caricata
initGioco();
});