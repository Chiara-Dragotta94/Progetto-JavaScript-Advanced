// Gioco quiz //

// Creo le domande //
const domande = {
  matematica: [
    { domanda: "Quanto fa 5 + 3?", opzioni: ["7", "6", "8", "9"], corretta: "8" },
    { domanda: "Qual è il numero pari?", opzioni: ["3", "8", "5", "7"], corretta: "8" },
    { domanda: "Quanto fa 10 - 4?", opzioni: ["4", "6", "5", "7"], corretta: "6" },
    { domanda: "Quanto fa 2 x 5?", opzioni: ["7", "12", "10", "8"], corretta: "10" },
    { domanda: "Qual è il doppio di 6?", opzioni: ["14", "12", "8", "10"], corretta: "12" },
    { domanda: "Quanto fa 9 + 1?", opzioni: ["10", "9", "11", "8"], corretta: "10" },
    { domanda: "Qual è la metà di 8?", opzioni: ["2", "4", "6", "3"], corretta: "4" },
    { domanda: "Quanto fa 7 + 6?", opzioni: ["12", "14", "15", "13"], corretta: "13" },
    { domanda: "Qual è il numero maggiore?", opzioni: ["4", "2", "6", "9"], corretta: "9" },
    { domanda: "Quanto fa 3 x 3?", opzioni: ["12", "6", "3", "9"], corretta: "9" }
  ],
  italiano: [
    { domanda: "Qual è il verbo nella frase: 'Luca corre veloce'?", opzioni: ["corre", "Luca", "veloce", "frase"], corretta: "corre" },
    { domanda: "Qual è il plurale di 'casa'?", opzioni: ["casi", "case", "caso", "cassa"], corretta: "case" },
    { domanda: "Quale tra queste è una congiunzione?", opzioni: ["ma", "cane", "grande", "parlare"], corretta: "ma" },
    { domanda: "Qual è un aggettivo?", opzioni: ["bello", "alto", "cane", "saltare"], corretta: "bello" },
    { domanda: "Come si chiama chi scrive poesie?", opzioni: ["Scrittore", "Poeta", "Cantante", "Attore"], corretta: "Poeta" },
    { domanda: "Qual è il soggetto in 'Il gatto dorme'?", opzioni: ["dorme", "gatto", "il", "soggetto"], corretta: "gatto" },
    { domanda: "'Mangiare' è un...?", opzioni: ["verbo", "sostantivo", "aggettivo", "pronome"], corretta: "verbo" },
    { domanda: "Quale parola è un sinonimo di 'bello'?", opzioni: ["brutto", "vecchio", "carino", "cattivo"], corretta: "carino" },
    { domanda: "Quale parola è un sostantivo?", opzioni: ["tavolo", "correre", "veloce", "e"], corretta: "tavolo" },
    { domanda: "Il contrario di 'buono' è...?", opzioni: ["grande", "cattivo", "alto", "carino"], corretta: "cattivo" }
  ],
  storia: [
    { domanda: "Chi ha scoperto l'America?", opzioni: ["Marco Polo", "Cristoforo Colombo", "Galileo Galilei", "Leonardo da Vinci"], corretta: "Cristoforo Colombo" },
    { domanda: "In che anno cadde l'Impero Romano d'Occidente?", opzioni: ["1492", "476", "1066", "1453"], corretta: "476" },
    { domanda: "Chi era Giulio Cesare?", opzioni: ["Condottiero", "Imperatore", "Senatore", "Filosofo"], corretta: "Condottiero" },
    { domanda: "Quando iniziò la Prima Guerra Mondiale?", opzioni: ["1914", "1939", "1812", "1918"], corretta: "1914" },
    { domanda: "Chi fu il re dei Franchi?", opzioni: ["Clodoveo", "Napoleone", "Cesare", "Federico"], corretta: "Clodoveo" },
    { domanda: "Quando cadde Costantinopoli?", opzioni: ["1453", "1492", "1204", "1302"], corretta: "1453" },
    { domanda: "Chi scrisse la Divina Commedia?", opzioni: ["Dante", "Petrarca", "Boccaccio", "Leopardi"], corretta: "Dante" },
    { domanda: "Quale impero conquistò l'Egitto?", opzioni: ["Romano", "Ottomano", "Greco", "Persiano"], corretta: "Ottomano" },
    { domanda: "Chi fu Luigi XIV?", opzioni: ["Re di Francia", "Re di Spagna", "Imperatore", "Generale"], corretta: "Re di Francia" },
    { domanda: "Quando fu la rivoluzione francese?", opzioni: ["1789", "1776", "1804", "1799"], corretta: "1789" }
  ],
  geografia: [
    { domanda: "Qual è la capitale d'Italia?", opzioni: ["Milano", "Roma", "Napoli", "Torino"], corretta: "Roma" },
    { domanda: "Qual è il fiume più lungo del mondo?", opzioni: ["Mississippi", "Amazzoni", "Nilo", "Gange"], corretta: "Amazzoni" },
    { domanda: "Quale continente è l'Egitto?", opzioni: ["Europa", "Asia", "Africa", "America"], corretta: "Africa" },
    { domanda: "Qual è la montagna più alta del mondo?", opzioni: ["Everest", "K2", "Mont Blanc", "Makalu"], corretta: "Everest" },
    { domanda: "Quale mare bagna l'Italia a sud?", opzioni: ["Mediterraneo", "Adriatico", "Tirreno", "Ionio"], corretta: "Mediterraneo" },
    { domanda: "Capitale della Francia?", opzioni: ["Parigi", "Lione", "Marsiglia", "Nizza"], corretta: "Parigi" },
    { domanda: "Quale continente è l'Australia?", opzioni: ["Oceania", "Asia", "Africa", "America"], corretta: "Oceania" },
    { domanda: "Qual è il deserto più grande?", opzioni: ["Sahara", "Gobi", "Kalahari", "Arabia"], corretta: "Sahara" },
    { domanda: "Quale fiume attraversa Londra?", opzioni: ["Tamigi", "Senna", "Po", "Danubio"], corretta: "Tamigi" },
    { domanda: "Capitale della Germania?", opzioni: ["Monaco", "Francoforte", "Berlino", "Amburgo"], corretta: "Berlino" }
  ],
  scienze: [
    { domanda: "Quale parte del corpo usiamo per vedere?", opzioni: ["Piedi", "Mani", "Occhi", "Orecchie"], corretta: "Occhi" },
    { domanda: "Quale animale è un mammifero?", opzioni: ["Pesce", "Balena", "Rana", "Gallina"], corretta: "Balena" },
    { domanda: "Qual è lo stato solido dell'acqua?", opzioni: ["Liquido", "Neve", "Vapore", "Ghiaccio"], corretta: "Ghiaccio" },
    { domanda: "Cosa producono le piante?", opzioni: ["Ossigeno", "Anidride carbonica", "Acqua", "Zucchero"], corretta: "Ossigeno" },
    { domanda: "Quale parte della pianta assorbe l'acqua?", opzioni: ["Foglie", "Fusto", "Radici", "Fiori"], corretta: "Radici" },
    { domanda: "Quale pianeta è il più vicino al Sole?", opzioni: ["Venere", "Marte", "Mercurio", "Terra"], corretta: "Mercurio" },
    { domanda: "Che cosa è un insetto?", opzioni: ["Animale con sei zampe", "Animale con quattro zampe", "Animale senza zampe", "Animale con ali solo"], corretta: "Animale con sei zampe" },
    { domanda: "Qual è la funzione delle foglie?", opzioni: ["Fare il cibo", "Respirare", "Assorbire acqua", "Proteggere la pianta"], corretta: "Fare il cibo" },
    { domanda: "Qual è il gas che respiriamo?", opzioni: ["Anidride carbonica", "Azoto", "Ossigeno", "Idrogeno"], corretta: "Ossigeno" },
    { domanda: "Quale parte del corpo ci serve per sentire?", opzioni: ["Bocca", "Orecchie", "Naso", "Occhi"], corretta: "Orecchie" }
  ],
  inglese: [
    { domanda: "Come si dice 'cane' in inglese?", opzioni: ["Dog", "Cat", "Mouse", "Bird"], corretta: "Dog" },
    { domanda: "Come si dice 'rosso' in inglese?", opzioni: ["Red", "Blue", "Green", "Yellow"], corretta: "Red" },
    { domanda: "Come si dice 'scuola' in inglese?", opzioni: ["House", "Book", "Teacher", "School"], corretta: "School" },
    { domanda: "Come si dice 'gatto' in inglese?", opzioni: ["Dog", "Cat", "Mouse", "Bird"], corretta: "Cat" },
    { domanda: "Come si dice 'acqua' in inglese?", opzioni: ["Water", "Milk", "Juice", "Beer"], corretta: "Water" },
    { domanda: "Come si dice 'libro' in inglese?", opzioni: ["Book", "Pen", "Notebook", "Paper"], corretta: "Book" },
    { domanda: "Come si dice 'sole' in inglese?", opzioni: ["Moon", "Sun", "Star", "Sky"], corretta: "Sun" },
    { domanda: "Come si dice 'amico' in inglese?", opzioni: ["Friend", "Enemy", "Parent", "Child"], corretta: "Friend" },
    { domanda: "Come si dice 'rosso' in inglese?", opzioni: ["Yellow", "Red", "Blue", "Green"], corretta: "Red" },
    { domanda: "Come si dice 'felice' in inglese?", opzioni: ["Happy", "Sad", "Angry", "Tired"], corretta: "Happy" }
  ],
  musica: [
    { domanda: "Quale nota musicale viene prima di 'Mi'?", opzioni: ["Fa", "Sol", "Re", "La"], corretta: "Re" },
    { domanda: "Quante note ci sono nella scala musicale?", opzioni: ["8", "5", "7", "12"], corretta: "7" },
    { domanda: "Chi ha composto la Nona Sinfonia?", opzioni: ["Mozart", "Bach", "Beethoven", "Vivaldi"], corretta: "Beethoven" },
    { domanda: "Che cos'è un pianoforte?", opzioni: ["Strumento musicale", "Dipinto", "Libro", "Film"], corretta: "Strumento musicale" },
    { domanda: "Chi ha composto 'Le Quattro Stagioni'?", opzioni: ["Vivaldi", "Mozart", "Beethoven", "Bach"], corretta: "Vivaldi" },
    { domanda: "Quale strumento ha corde e si suona con l'arco?", opzioni: ["Violino", "Pianoforte", "Chitarra", "Tromba"], corretta: "Violino" },
    { domanda: "Cosa indica il tempo in musica?", opzioni: ["Velocità", "Volume", "Tono", "Melodia"], corretta: "Velocità" },
    { domanda: "Che cos'è un tamburo?", opzioni: ["Strumento a percussione", "Corda", "Fiato", "Vocale"], corretta: "Strumento a percussione" },
    { domanda: "Chi è famoso per la musica rock?", opzioni: ["Elvis Presley", "Beethoven", "Mozart", "Vivaldi"], corretta: "Elvis Presley" },
    { domanda: "Qual è il tempo più lento?", opzioni: ["Adagio", "Allegro", "Presto", "Vivace"], corretta: "Adagio" }
  ],
  arte: [
    { domanda: "Chi ha dipinto la Gioconda?", opzioni: ["Michelangelo", "Caravaggio", "Leonardo da Vinci", "Raffaello"], corretta: "Leonardo da Vinci" },
    { domanda: "Chi ha scolpito il David?", opzioni: ["Donatello", "Michelangelo", "Bernini", "Canova"], corretta: "Michelangelo" },
    { domanda: "Quale stile è associato a Picasso?", opzioni: ["Cubismo", "Impressionismo", "Barocco", "Gotico"], corretta: "Cubismo" },
    { domanda: "Chi ha dipinto la Cappella Sistina?", opzioni: ["Raffaello", "Michelangelo", "Leonardo", "Donatello"], corretta: "Michelangelo" },
    { domanda: "Quale pittore è noto per le Ninfee?", opzioni: ["Monet", "Van Gogh", "Picasso", "Rembrandt"], corretta: "Monet" },
    { domanda: "Quale stile artistico è associato al Rinascimento?", opzioni: ["Rinascimento", "Barocco", "Gotico", "Cubismo"], corretta: "Rinascimento" },
    { domanda: "Chi ha dipinto 'Notte stellata'?", opzioni: ["Van Gogh", "Picasso", "Monet", "Rembrandt"], corretta: "Van Gogh" },
    { domanda: "Chi è considerato il padre della scultura moderna?", opzioni: ["Rodin", "Michelangelo", "Donatello", "Bernini"], corretta: "Rodin" },
    { domanda: "Quale pittore è noto per i girasoli?", opzioni: ["Van Gogh", "Monet", "Picasso", "Rembrandt"], corretta: "Van Gogh" },
    { domanda: "Che stile è associato a Caravaggio?", opzioni: ["Barocco", "Gotico", "Rinascimento", "Cubismo"], corretta: "Barocco" }
  ]
};

// Il resto del codice rimane invariato per avviare il quiz
document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quizContainer");

  document.getElementById("avviaQuiz").addEventListener("click", () => {
    const materiaSelect = document.getElementById("materia");
    const materia = materiaSelect.value;
    quizContainer.innerHTML = "";

    if (!materia || !domande[materia]) {
      quizContainer.innerHTML = "<p>Seleziona una materia valida.</p>";
      return;
    }

    const domandeScelte = domande[materia];

    domandeScelte.forEach((q, index) => {
      const div = document.createElement("div");
      div.classList.add("question");
      div.innerHTML = `
        <p><strong>Domanda ${index + 1}:</strong> ${q.domanda}</p> 
        <div class="options">
          ${q.opzioni
            .map((opt) => `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label>`)
            .join("")}
        </div>
      `;
      quizContainer.appendChild(div);
    });

    const btnSubmit = document.createElement("button");
    btnSubmit.style.marginRight = "20px";
    btnSubmit.textContent = "Invia Risposte";

    btnSubmit.addEventListener("click", () => {
      let punteggio = 0;
      domandeScelte.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        const opzioni = document.querySelectorAll(`input[name="q${i}"]`);
        opzioni.forEach((opt) => {
          const label = opt.parentElement;
          if (opt.value === q.corretta) {
            label.style.color = "green";
          } else if (opt.checked && opt.value !== q.corretta) {
            label.style.color = "red";
            const rispostaCorretta = document.createElement("div");
            rispostaCorretta.textContent = `✔ Risposta corretta: ${q.corretta}`;
            rispostaCorretta.style.color = "green";
            label.parentElement.appendChild(rispostaCorretta);
          }
        });

        if (selected && selected.value === q.corretta) punteggio++;
      });

      const oldResult = document.getElementById("quizResult");
      if (oldResult) oldResult.remove();

      const resultDiv = document.createElement("div");
      resultDiv.id = "quizResult";
      resultDiv.style.marginTop = "20px";
      resultDiv.style.fontWeight = "bold";
      resultDiv.style.fontSize = "1.2em";
      resultDiv.textContent = `Hai ottenuto ${punteggio} su ${domandeScelte.length} risposte corrette!`;
      quizContainer.appendChild(resultDiv);

      const tuttiInput = document.querySelectorAll('input[type="radio"]');
      tuttiInput.forEach((input) => input.disabled = true);
    });

    const btnReset = document.createElement("button");
    btnReset.textContent = "Reset del gioco";
    btnReset.addEventListener("click", () => {
      materiaSelect.value = "";
      quizContainer.innerHTML = "";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    quizContainer.appendChild(btnSubmit);
    quizContainer.appendChild(btnReset);
  });
});
