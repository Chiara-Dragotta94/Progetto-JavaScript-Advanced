//Gioco quiz//
//Creo le domande//
const domande = {
  matematica: [
    {
      domanda: "Quanto fa 5 + 3?",
      opzioni: ["6", "7", "8", "9"],
      corretta: "8",
    },
    {
      domanda: "Qual è il numero pari?",
      opzioni: ["3", "5", "8", "7"],
      corretta: "8",
    },
    {
      domanda: "Quanto fa 10 - 4?",
      opzioni: ["6", "5", "7", "4"],
      corretta: "6",
    },
    {
      domanda: "Quanto fa 2 x 5?",
      opzioni: ["10", "7", "8", "12"],
      corretta: "10",
    },
    {
      domanda: "Qual è il doppio di 6?",
      opzioni: ["12", "10", "8", "14"],
      corretta: "12",
    },
    {
      domanda: "Quanto fa 9 + 1?",
      opzioni: ["10", "9", "11", "8"],
      corretta: "10",
    },
    {
      domanda: "Qual è la metà di 8?",
      opzioni: ["4", "2", "6", "3"],
      corretta: "4",
    },
    {
      domanda: "Quanto fa 7 + 6?",
      opzioni: ["12", "13", "14", "15"],
      corretta: "13",
    },
    {
      domanda: "Qual è il numero maggiore?",
      opzioni: ["4", "9", "2", "6"],
      corretta: "9",
    },
    {
      domanda: "Quanto fa 3 x 3?",
      opzioni: ["6", "9", "12", "3"],
      corretta: "9",
    },
    {
      domanda: "Quanto fa 12 - 5?",
      opzioni: ["7", "8", "6", "5"],
      corretta: "7",
    },
    {
      domanda: "Quanto fa 4 + 4?",
      opzioni: ["6", "7", "8", "9"],
      corretta: "8",
    },
    {
      domanda: "Quanto fa 15 ÷ 3?",
      opzioni: ["5", "4", "3", "6"],
      corretta: "5",
    },
    {
      domanda: "Quanto fa 2 x 6?",
      opzioni: ["10", "12", "14", "8"],
      corretta: "12",
    },
    {
      domanda: "Qual è il numero dispari?",
      opzioni: ["4", "2", "6", "7"],
      corretta: "7",
    },
  ],
  italiano: [
    {
      domanda: "Qual è il verbo nella frase: 'Luca corre veloce'?",
      opzioni: ["Luca", "corre", "veloce", "frase"],
      corretta: "corre",
    },
    {
      domanda: "Qual è il plurale di 'casa'?",
      opzioni: ["case", "casi", "caso", "cassa"],
      corretta: "case",
    },
    {
      domanda: "Quale tra queste è una congiunzione?",
      opzioni: ["ma", "cane", "grande", "parlare"],
      corretta: "ma",
    },
    {
      domanda: "Qual è un aggettivo?",
      opzioni: ["alto", "cane", "saltare", "bello"],
      corretta: "bello",
    },
    {
      domanda: "Come si chiama chi scrive poesie?",
      opzioni: ["Poeta", "Scrittore", "Cantante", "Attore"],
      corretta: "Poeta",
    },
    {
      domanda: "Qual è il soggetto in 'Il gatto dorme'?",
      opzioni: ["gatto", "dorme", "il", "soggetto"],
      corretta: "gatto",
    },
    {
      domanda: "'Mangiare' è un...?",
      opzioni: ["verbo", "sostantivo", "aggettivo", "pronome"],
      corretta: "verbo",
    },
    {
      domanda: "Quale parola è un sinonimo di 'bello'?",
      opzioni: ["carino", "brutto", "vecchio", "cattivo"],
      corretta: "carino",
    },
    {
      domanda: "Quale parola è un sostantivo?",
      opzioni: ["tavolo", "correre", "veloce", "e"],
      corretta: "tavolo",
    },
    {
      domanda: "Il contrario di 'buono' è...?",
      opzioni: ["cattivo", "grande", "alto", "carino"],
      corretta: "cattivo",
    },
    {
      domanda: "Quale frase è corretta?",
      opzioni: [
        "Io mangia pane",
        "Io mangio il pane",
        "Io mangi pane",
        "Io mangiamo pane",
      ],
      corretta: "Io mangio il pane",
    },
    {
      domanda: "Quale parola è accentata?",
      opzioni: ["città", "mare", "sole", "piano"],
      corretta: "città",
    },
    {
      domanda: "Quale tra questi è un pronome?",
      opzioni: ["lui", "parla", "veloce", "tavolo"],
      corretta: "lui",
    },
    {
      domanda: "'La sedia è rossa'. Qual è l'aggettivo?",
      opzioni: ["rossa", "sedia", "la", "è"],
      corretta: "rossa",
    },
    {
      domanda: "Quale tra questi è un verbo al passato?",
      opzioni: ["andai", "vado", "andrò", "andare"],
      corretta: "andai",
    },
  ],
  scienze: [
    {
      domanda: "Quale parte del corpo usiamo per vedere?",
      opzioni: ["Orecchie", "Piedi", "Occhi", "Mani"],
      corretta: "Occhi",
    },
    {
      domanda: "Quale animale è un mammifero?",
      opzioni: ["Rana", "Balena", "Pesce", "Gallina"],
      corretta: "Balena",
    },
    {
      domanda: "Qual è lo stato solido dell'acqua?",
      opzioni: ["Vapore", "Ghiaccio", "Liquido", "Neve"],
      corretta: "Ghiaccio",
    },
    {
      domanda: "Cosa producono le piante con la fotosintesi?",
      opzioni: ["Acqua", "Anidride carbonica", "Ossigeno", "Zucchero"],
      corretta: "Ossigeno",
    },
    {
      domanda: "Quale parte della pianta assorbe l'acqua?",
      opzioni: ["Foglie", "Radici", "Fusto", "Fiori"],
      corretta: "Radici",
    },
    {
      domanda: "Quale pianeta è il più vicino al Sole?",
      opzioni: ["Terra", "Venere", "Mercurio", "Marte"],
      corretta: "Mercurio",
    },
    {
      domanda: "Quale animale vive in una tana?",
      opzioni: ["Uccello", "Coniglio", "Pesce", "Rana"],
      corretta: "Coniglio",
    },
    {
      domanda: "Che cosa è un insetto?",
      opzioni: [
        "Animale con sei zampe",
        "Animale con quattro zampe",
        "Animale con ali solo",
        "Animale senza zampe",
      ],
      corretta: "Animale con sei zampe",
    },
    {
      domanda: "Qual è la funzione delle foglie?",
      opzioni: [
        "Respirare",
        "Assorbire acqua",
        "Fare il cibo",
        "Proteggere la pianta",
      ],
      corretta: "Fare il cibo",
    },
    {
      domanda: "Qual è il gas che respiriamo?",
      opzioni: ["Azoto", "Ossigeno", "Anidride carbonica", "Idrogeno"],
      corretta: "Ossigeno",
    },
    {
      domanda: "Quale animale è un uccello?",
      opzioni: ["Gatto", "Pappagallo", "Cane", "Pesce"],
      corretta: "Pappagallo",
    },
    {
      domanda: "Che cosa si usa per misurare la temperatura?",
      opzioni: ["Righello", "Bilancia", "Termometro", "Orologio"],
      corretta: "Termometro",
    },
    {
      domanda: "Quale parte del corpo ci serve per sentire?",
      opzioni: ["Bocca", "Naso", "Orecchie", "Occhi"],
      corretta: "Orecchie",
    },
    {
      domanda: "Da cosa sono fatte le ossa?",
      opzioni: ["Calcio", "Acqua", "Zucchero", "Proteine"],
      corretta: "Calcio",
    },
    {
      domanda: "Quale animale fa le uova?",
      opzioni: ["Gatto", "Gallina", "Cane", "Mucca"],
      corretta: "Gallina",
    },
  ],
  storia: [
    {
      domanda: "Chi è stato Cristoforo Colombo?",
      opzioni: ["Esploratore", "Pittore", "Scrittore", "Inventore"],
      corretta: "Esploratore",
    },
    {
      domanda: "In che anno è stata scoperta l'America?",
      opzioni: ["1492", "1500", "1600", "1800"],
      corretta: "1492",
    },
    {
      domanda: "Chi era Giulio Cesare?",
      opzioni: ["Imperatore romano", "Pittore", "Filosofo", "Re"],
      corretta: "Imperatore romano",
    },
    {
      domanda: "Cos'è una piramide?",
      opzioni: ["Monumento egizio", "Casa", "Fiume", "Montagna"],
      corretta: "Monumento egizio",
    },
    {
      domanda: "Chi erano i gladiatori?",
      opzioni: [
        "Combattenti nell'antica Roma",
        "Contadini",
        "Insegnanti",
        "Mercanti",
      ],
      corretta: "Combattenti nell'antica Roma",
    },
    {
      domanda: "Dove si trova la Torre di Pisa?",
      opzioni: ["Italia", "Francia", "Spagna", "Germania"],
      corretta: "Italia",
    },
    {
      domanda: "Che cos'è la Rivoluzione Francese?",
      opzioni: ["Un evento storico", "Una festa", "Una città", "Un libro"],
      corretta: "Un evento storico",
    },
    {
      domanda: "Chi era Leonardo da Vinci?",
      opzioni: ["Artista e inventore", "Re", "Scrittore", "Filosofo"],
      corretta: "Artista e inventore",
    },
    {
      domanda: "Quando finì la Seconda Guerra Mondiale?",
      opzioni: ["1945", "1939", "1918", "1960"],
      corretta: "1945",
    },
    {
      domanda: "Chi ha inventato la stampa?",
      opzioni: ["Gutenberg", "Newton", "Einstein", "Galileo"],
      corretta: "Gutenberg",
    },
    {
      domanda: "Cos'era l'Impero Romano?",
      opzioni: [
        "Un grande stato antico",
        "Una città",
        "Un regno moderno",
        "Una montagna",
      ],
      corretta: "Un grande stato antico",
    },
    {
      domanda: "Chi ha scoperto l'America?",
      opzioni: ["Cristoforo Colombo", "Marco Polo", "Galileo", "Leonardo"],
      corretta: "Cristoforo Colombo",
    },
    {
      domanda: "Cos'è la Preistoria?",
      opzioni: [
        "Periodo prima della scrittura",
        "Periodo moderno",
        "Un paese",
        "Un libro",
      ],
      corretta: "Periodo prima della scrittura",
    },
    {
      domanda: "Chi era Napoleone?",
      opzioni: ["Generale e imperatore", "Scrittore", "Pittore", "Re"],
      corretta: "Generale e imperatore",
    },
    {
      domanda: "Cos'è un castello?",
      opzioni: [
        "Una fortezza medievale",
        "Una casa moderna",
        "Una montagna",
        "Un fiume",
      ],
      corretta: "Una fortezza medievale",
    },
  ],
  geografia: [
    {
      domanda: "Qual è la capitale d'Italia?",
      opzioni: ["Roma", "Milano", "Napoli", "Torino"],
      corretta: "Roma",
    },
    {
      domanda: "Quale continente è più grande?",
      opzioni: ["Africa", "Europa", "Asia", "Oceania"],
      corretta: "Asia",
    },
    {
      domanda: "In quale continente si trova l'Egitto?",
      opzioni: ["Africa", "Asia", "Europa", "America"],
      corretta: "Africa",
    },
    {
      domanda: "Qual è il fiume più lungo del mondo?",
      opzioni: ["Nilo", "Amazzonia", "Mississippi", "Po"],
      corretta: "Nilo",
    },
    {
      domanda: "Qual è il mare che bagna l'Italia?",
      opzioni: [
        "Mare Adriatico",
        "Mare del Nord",
        "Mare Nero",
        "Mare Glaciale",
      ],
      corretta: "Mare Adriatico",
    },
    {
      domanda: "Quale continente è anche un paese?",
      opzioni: ["Australia", "Africa", "Europa", "Asia"],
      corretta: "Australia",
    },
    {
      domanda: "Qual è la montagna più alta del mondo?",
      opzioni: ["Everest", "K2", "Monte Bianco", "Mont Blanc"],
      corretta: "Everest",
    },
    {
      domanda: "Qual è l'oceano più grande?",
      opzioni: ["Pacifico", "Atlantico", "Indiano", "Artico"],
      corretta: "Pacifico",
    },
    {
      domanda: "Dove si trova il Colosseo?",
      opzioni: ["Roma", "Atene", "Parigi", "Londra"],
      corretta: "Roma",
    },
    {
      domanda: "Quale paese ha la più grande foresta pluviale?",
      opzioni: ["Brasile", "Cina", "Russia", "Canada"],
      corretta: "Brasile",
    },
    {
      domanda: "Qual è il deserto più grande?",
      opzioni: ["Sahara", "Gobi", "Kalahari", "Atacama"],
      corretta: "Sahara",
    },
    {
      domanda: "Qual è il fiume più lungo d'Europa?",
      opzioni: ["Volga", "Danubio", "Tevere", "Senna"],
      corretta: "Volga",
    },
    {
      domanda: "Qual è la capitale della Francia?",
      opzioni: ["Parigi", "Lione", "Marsiglia", "Nizza"],
      corretta: "Parigi",
    },
    {
      domanda: "Quale mare è vicino alla Sicilia?",
      opzioni: ["Mediterraneo", "Adriatico", "Ionio", "Egeo"],
      corretta: "Mediterraneo",
    },
    {
      domanda: "Qual è la capitale della Spagna?",
      opzioni: ["Madrid", "Barcellona", "Valencia", "Siviglia"],
      corretta: "Madrid",
    },
  ],
  inglese: [
    {
      domanda: "How do you say 'gatto' in English?",
      opzioni: ["Dog", "Cat", "Bird", "Fish"],
      corretta: "Cat",
    },
    {
      domanda: "What color is the sky?",
      opzioni: ["Blue", "Green", "Red", "Yellow"],
      corretta: "Blue",
    },
    {
      domanda: "What is the opposite of 'hot'?",
      opzioni: ["Cold", "Warm", "Cool", "Hot"],
      corretta: "Cold",
    },
    {
      domanda: "How do you say 'libro' in English?",
      opzioni: ["Pen", "Book", "Table", "Chair"],
      corretta: "Book",
    },
    {
      domanda: "What day comes after Monday?",
      opzioni: ["Sunday", "Tuesday", "Wednesday", "Friday"],
      corretta: "Tuesday",
    },
    {
      domanda: "What is the English word for 'cane'?",
      opzioni: ["Cat", "Dog", "Bird", "Fish"],
      corretta: "Dog",
    },
    {
      domanda: "How do you say 'scuola' in English?",
      opzioni: ["School", "House", "Park", "Shop"],
      corretta: "School",
    },
    {
      domanda: "What is the opposite of 'big'?",
      opzioni: ["Small", "Tall", "Short", "Long"],
      corretta: "Small",
    },
    {
      domanda: "How many days are in a week?",
      opzioni: ["5", "6", "7", "8"],
      corretta: "7",
    },
    {
      domanda: "What is the English word for 'amico'?",
      opzioni: ["Friend", "Enemy", "Teacher", "Student"],
      corretta: "Friend",
    },
    {
      domanda: "How do you say 'casa' in English?",
      opzioni: ["House", "Car", "Garden", "Room"],
      corretta: "House",
    },
    {
      domanda: "What color are bananas?",
      opzioni: ["Red", "Yellow", "Green", "Blue"],
      corretta: "Yellow",
    },
    {
      domanda: "What is the English word for 'acqua'?",
      opzioni: ["Water", "Fire", "Earth", "Air"],
      corretta: "Water",
    },
    {
      domanda: "How do you say 'mangiare' in English?",
      opzioni: ["Eat", "Run", "Sleep", "Play"],
      corretta: "Eat",
    },
    {
      domanda: "What is the opposite of 'day'?",
      opzioni: ["Night", "Morning", "Afternoon", "Evening"],
      corretta: "Night",
    },
  ],
  musica: [
    {
      domanda: "Quale strumento ha le corde?",
      opzioni: ["Pianoforte", "Batteria", "Flauto", "Tromba"],
      corretta: "Pianoforte",
    },
    {
      domanda: "Quante note ci sono nella scala musicale?",
      opzioni: ["5", "7", "8", "6"],
      corretta: "7",
    },
    {
      domanda: "Quale strumento si suona soffiando?",
      opzioni: ["Violino", "Chitarra", "Flauto", "Tamburo"],
      corretta: "Flauto",
    },
    {
      domanda: "Come si chiama il simbolo musicale che indica il tempo?",
      opzioni: ["Battuta", "Nota", "Chiave di violino", "Pentagramma"],
      corretta: "Battuta",
    },
    {
      domanda: "Quale strumento è percosso?",
      opzioni: ["Batteria", "Pianoforte", "Violino", "Flauto"],
      corretta: "Batteria",
    },
    {
      domanda: "Quanti suoni ci sono in una scala di Do maggiore?",
      opzioni: ["7", "8", "6", "5"],
      corretta: "7",
    },
    {
      domanda: "Qual è il nome della nota più bassa?",
      opzioni: ["Do", "Si", "Fa", "La"],
      corretta: "Do",
    },
    {
      domanda: "Cosa si usa per leggere la musica?",
      opzioni: ["Partitura", "Libro", "Foglio", "Penna"],
      corretta: "Partitura",
    },
    {
      domanda: "Quale strumento ha i tasti?",
      opzioni: ["Pianoforte", "Violino", "Tromba", "Flauto"],
      corretta: "Pianoforte",
    },
    {
      domanda: "Cos’è il ritmo?",
      opzioni: [
        "La sequenza dei suoni nel tempo",
        "La melodia",
        "La voce",
        "Il canto",
      ],
      corretta: "La sequenza dei suoni nel tempo",
    },
    {
      domanda: "Quale strumento è a fiato?",
      opzioni: ["Tromba", "Batteria", "Chitarra", "Pianoforte"],
      corretta: "Tromba",
    },
    {
      domanda: "Quale parte della batteria si colpisce con le bacchette?",
      opzioni: ["Tamburo", "Piatti", "Cassa", "Tutti"],
      corretta: "Tutti",
    },
    {
      domanda: "Cos’è una nota?",
      opzioni: ["Un suono musicale", "Un colore", "Un oggetto", "Una parola"],
      corretta: "Un suono musicale",
    },
    {
      domanda: "Che cos’è il pentagramma?",
      opzioni: [
        "Cinque linee per scrivere la musica",
        "Un tipo di strumento",
        "Una canzone",
        "Un cantante",
      ],
      corretta: "Cinque linee per scrivere la musica",
    },
    {
      domanda: "Come si chiama chi suona la chitarra?",
      opzioni: ["Chitarrista", "Pianista", "Batterista", "Cantante"],
      corretta: "Chitarrista",
    },
  ],
  arte: [
    {
      domanda: "Chi ha dipinto la 'Gioconda'?",
      opzioni: ["Leonardo da Vinci", "Michelangelo", "Raffaello", "Donatello"],
      corretta: "Leonardo da Vinci",
    },
    {
      domanda: "Cos'è un dipinto?",
      opzioni: ["Un quadro", "Una scultura", "Una canzone", "Un libro"],
      corretta: "Un quadro",
    },
    {
      domanda: "Che cosa usa un pittore?",
      opzioni: ["Pennello", "Martello", "Penna", "Chitarra"],
      corretta: "Pennello",
    },
    {
      domanda: "Quale colore si ottiene mescolando il blu e il giallo?",
      opzioni: ["Verde", "Viola", "Arancione", "Rosso"],
      corretta: "Verde",
    },
    {
      domanda: "Che cosa è una scultura?",
      opzioni: [
        "Un'opera d'arte tridimensionale",
        "Un dipinto",
        "Una canzone",
        "Un libro",
      ],
      corretta: "Un'opera d'arte tridimensionale",
    },
    {
      domanda: "Qual è il colore primario?",
      opzioni: ["Rosso", "Verde", "Nero", "Bianco"],
      corretta: "Rosso",
    },
    {
      domanda: "Cos’è un mosaico?",
      opzioni: [
        "Un'immagine fatta con tessere",
        "Un dipinto ad olio",
        "Una scultura",
        "Un libro",
      ],
      corretta: "Un'immagine fatta con tessere",
    },
    {
      domanda: "Chi ha scolpito il 'David'?",
      opzioni: ["Michelangelo", "Leonardo", "Raffaello", "Donatello"],
      corretta: "Michelangelo",
    },
    {
      domanda: "Quale forma ha un cerchio?",
      opzioni: ["Rotonda", "Quadrata", "Triangolare", "Ovale"],
      corretta: "Rotonda",
    },
    {
      domanda: "Come si chiama il colore ottenuto mescolando rosso e blu?",
      opzioni: ["Viola", "Arancione", "Verde", "Giallo"],
      corretta: "Viola",
    },
    {
      domanda: "Cos’è una tavolozza?",
      opzioni: [
        "Strumento per mescolare i colori",
        "Una tela",
        "Un pennello",
        "Un quadro",
      ],
      corretta: "Strumento per mescolare i colori",
    },
    {
      domanda: "Che cos’è un disegno?",
      opzioni: [
        "Un'immagine fatta a mano",
        "Una canzone",
        "Una scultura",
        "Un libro",
      ],
      corretta: "Un'immagine fatta a mano",
    },
    {
      domanda: "Chi ha dipinto la Cappella Sistina?",
      opzioni: ["Michelangelo", "Leonardo", "Raffaello", "Donatello"],
      corretta: "Michelangelo",
    },
    {
      domanda: "Qual è il colore opposto al giallo?",
      opzioni: ["Viola", "Verde", "Arancione", "Blu"],
      corretta: "Viola",
    },
    {
      domanda: "Come si chiama il luogo dove si espongono opere d’arte?",
      opzioni: ["Museo", "Scuola", "Teatro", "Cinema"],
      corretta: "Museo",
    },
  ],
};

//Avvio gioco//
//Prende il contenitore dal HTML e lo visulizza solo dopo che la pagina è caricata//
document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quizContainer");

//Prende il valore della materia selezionata dal form//
  document.getElementById("avviaQuiz").addEventListener("click", () => {
    const materiaSelect = document.getElementById("materia");
    const materia = materiaSelect.value;
    quizContainer.innerHTML = ""; //Svuota il contenitore delle domande//

//Se la materia selezionata è inesistente o non viene selezionata nessuna materia viene mandato un messaggio d'errore//
    if (!materia || !domande[materia]) {
      quizContainer.innerHTML = "<p>Seleziona una materia valida.</p>";
      return;
    }

// Creo dinamicamente il testo della domanda con le possibili opzioni selezionabili e le aggiungo al contenitore del quiz//
    const domandeScelte = domande[materia];

    domandeScelte.forEach((q, index) => {
      const div = document.createElement("div");
      div.classList.add("question");
      //Serve a far partire il numero della domanda da 1 e non da 0//
      div.innerHTML = `
        <p><strong>Domanda ${index + 1}:</strong> ${q.domanda}</p> 
        <div class="options">
          ${q.opzioni
            .map(
              (opt) =>
                `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label>`
            )
            .join("")}
        </div>
      `;
      quizContainer.appendChild(div);
    });
    // Creo il bottone per inviare le risposte//
    const btnSubmit = document.createElement("button");
    btnSubmit.style.marginRight = "20px";
    btnSubmit.textContent = "Invia Risposte";

   btnSubmit.addEventListener("click", () => {
  let punteggio = 0; //Inizializzo il punteggio a zero//
  domandeScelte.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`); //Prende la risposta selezionata dall'utente//
    const opzioni = document.querySelectorAll(`input[name="q${i}"]`); //Prende tutte le opzioni//

// Colora di verde la risposta giuste e di rosso la risposta sbagliata//
    opzioni.forEach(opt => {
      const label = opt.parentElement;
      if (opt.value === q.corretta) {
        label.style.color = "green";
      } else if (opt.checked && opt.value !== q.corretta) {
        label.style.color = "red";
        // Aggiunge la risposta corretta se l'utente sbagliata//
        const rispostaCorretta = document.createElement("div");
        rispostaCorretta.textContent = `✔ Risposta corretta: ${q.corretta}`;
        rispostaCorretta.style.color = "green";
        label.parentElement.appendChild(rispostaCorretta);
      }
    });
// Aumenta il punteggio man mano che l'utente clicca sulle risposte corrette e mostra un messaggio riassuntivo alla fine//
    if (selected && selected.value === q.corretta) {
      punteggio++;
    }
  });

  // Rimuovi eventuale messaggio precedente
const oldResult = document.getElementById("quizResult");
if (oldResult) oldResult.remove();

// Crea e mostra il risultato nel contenitore quiz
const resultDiv = document.createElement("div");
resultDiv.id = "quizResult";
resultDiv.style.marginTop = "20px";
resultDiv.style.fontWeight = "bold";
resultDiv.style.fontSize = "1.2em";
resultDiv.textContent = `Hai ottenuto ${punteggio} su ${domandeScelte.length} risposte corrette!`;
quizContainer.appendChild(resultDiv);

  //Toglie la possibilità di cliccare sulle opzioni dopo che si sono inviate le risposte//
  const tuttiInput = document.querySelectorAll('input[type="radio"]');
  tuttiInput.forEach(input => {
    input.disabled = true;
  });
});

//Creo il bottone per resettare il gioco il quale una volta premuto svuota il contenitore del quiz,
// toglie il valore scelto della materia precedentemente selezionata e fa scrollare in automatico fino all'inizio della pagina//
    const btnReset = document.createElement("button");
    btnReset.textContent = "Reset del gioco";
    btnReset.addEventListener("click", () => {
      materiaSelect.value = "";
      quizContainer.innerHTML = "";
      window.scrollTo({ top: 0, behavior: "smooth" }); //La pagina scorre in maniera fluida verso l'alto//
    });
// I bottoni vengono aggiunti al contenitore//
    quizContainer.appendChild(btnSubmit);
    quizContainer.appendChild(btnReset);
  });
});
