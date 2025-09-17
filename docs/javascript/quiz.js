// Gioco quiz //

// Creo le domande //
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
  // ... altre materie (storia, geografia, inglese, musica, arte) come sopra
};

// Avvio gioco //
// Prende il contenitore dal HTML e lo visualizza solo dopo che la pagina è caricata //
document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quizContainer");

  // Prende il valore della materia selezionata dal form //
  document.getElementById("avviaQuiz").addEventListener("click", () => {
    const materiaSelect = document.getElementById("materia");
    const materia = materiaSelect.value;
    quizContainer.innerHTML = ""; // Svuota il contenitore delle domande //

    // Se la materia selezionata è inesistente o non viene selezionata nessuna materia viene mandato un messaggio d'errore //
    if (!materia || !domande[materia]) {
      quizContainer.innerHTML = "<p>Seleziona una materia valida.</p>";
      return;
    }

    // Creo dinamicamente il testo della domanda con le possibili opzioni selezionabili e le aggiungo al contenitore del quiz //
    const domandeScelte = domande[materia];

    domandeScelte.forEach((q, index) => {
      const div = document.createElement("div");
      div.classList.add("question");
      // Serve a far partire il numero della domanda da 1 e non da 0 //
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

    // Creo il bottone per inviare le risposte //
    const btnSubmit = document.createElement("button");
    btnSubmit.style.marginRight = "20px";
    btnSubmit.textContent = "Invia Risposte";

    btnSubmit.addEventListener("click", () => {
      let punteggio = 0; // Inizializzo il punteggio a zero //
      domandeScelte.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`); // Prende la risposta selezionata dall'utente //
        const opzioni = document.querySelectorAll(`input[name="q${i}"]`); // Prende tutte le opzioni //

        // Colora di verde la risposta giusta e di rosso la risposta sbagliata //
        opzioni.forEach((opt) => {
          const label = opt.parentElement;
          if (opt.value === q.corretta) {
            label.style.color = "green";
          } else if (opt.checked && opt.value !== q.corretta) {
            label.style.color = "red";
            // Aggiunge la risposta corretta se l'utente sbaglia //
            const rispostaCorretta = document.createElement("div");
            rispostaCorretta.textContent = `✔ Risposta corretta: ${q.corretta}`;
            rispostaCorretta.style.color = "green";
            label.parentElement.appendChild(rispostaCorretta);
          }
        });

        // Aumenta il punteggio man mano che l'utente clicca sulle risposte corrette e mostra un messaggio riassuntivo alla fine //
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

      // Toglie la possibilità di cliccare sulle opzioni dopo che si sono inviate le risposte //
      const tuttiInput = document.querySelectorAll('input[type="radio"]');
      tuttiInput.forEach((input) => {
        input.disabled = true;
      });
    });

    // Creo il bottone per resettare il gioco il quale una volta premuto svuota il contenitore del quiz,
    // toglie il valore scelto della materia precedentemente selezionata e fa scrollare in automatico fino all'inizio della pagina //
    const btnReset = document.createElement("button");
    btnReset.textContent = "Reset del gioco";
    btnReset.addEventListener("click", () => {
      materiaSelect.value = "";
      quizContainer.innerHTML = "";
      window.scrollTo({ top: 0, behavior: "smooth" }); // La pagina scorre in maniera fluida verso l'alto //
    });

    // I bottoni vengono aggiunti al contenitore //
    quizContainer.appendChild(btnSubmit);
    quizContainer.appendChild(btnReset);
  });
});
