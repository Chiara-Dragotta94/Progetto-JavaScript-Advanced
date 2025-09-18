// Aspetta che l'intero contenuto della pagina sia caricato prima di eseguire lo script
import _ from 'lodash';

document.addEventListener("DOMContentLoaded", () => {

  // Prende il box delle curiosità (inizialmente nascosto)
  const infoBox = document.getElementById("infoBox");

  // Prende il paragrafo dove verrà scritta la curiosità
  const curiositaP = document.getElementById("curiosita");

  // Prende il bottone per chiudere il box delle curiosità
  const closeBtn = document.getElementById("closeInfoBox");

  // Prende l’elemento che contiene i "continenti" cliccabili (il globo)
  const globo = document.getElementById("globo");

  // Oggetto che contiene le curiosità associate agli ID dei continenti
  const curiosita = {
    europa: "In Europa ci sono tantissimi castelli medievali!",
    africa: "L'Africa ha il deserto più grande del mondo, il Sahara!",
    sudamerica: "La foresta Amazzonica è in Sud America, piena di animali!",
    asia: "In Asia si trova la montagna più alta del mondo, l'Everest!",
    australia: "In Australia vivono tanti simpatici canguri saltellanti!",
    nordamerica: "In Nord America puoi trovare il Grand Canyon!",
    antartide: "L'Antartide è il continente più freddo del mondo!",
    groenlandia: "La Groenlandia è l'isola più grande del mondo, coperta quasi tutta da ghiaccio!"
  };

  // Per ogni continente cliccabile dentro il globo...
  _.forEach(globo.querySelectorAll(".continent"), el => {
    el.addEventListener("click", (e) => {
      // Impedisce che il click si propaghi oltre (evita la chiusura automatica del box)
      e.stopPropagation();

      // Prende l'ID del continente cliccato (es: 'africa', 'asia', ecc.)
      const id = e.target.id;

      // Prende la curiosità associata a quell'ID
      const testo = curiosita[id];

      // Scrive il testo della curiosità dentro il paragrafo
      curiositaP.textContent = testo;

      // Ottiene la posizione e dimensioni del globo rispetto alla pagina
      const rect = globo.getBoundingClientRect();

      // Ottiene la posizione e dimensioni del continente cliccato
      const elRect = e.target.getBoundingClientRect();

      // Calcola le coordinate relative al globo per posizionare il box
      let x = elRect.left - rect.left + elRect.width / 2; // centro in orizzontale
      let y = elRect.top - rect.top + elRect.height / 2;  // centro in verticale

      // Centra la infoBox sopra il bottone cliccato
      x = x - 115; // 230 / 2
      y = y - 80;

      // Controlli per non uscire fuori
      if (x < 0) x = 0;
      if (x + 230 > rect.width) x = rect.width - 230;
      if (y < 0) y = 0;
      if (y + 120 > rect.height) y = rect.height - 120;

      // Posiziona e mostra la infoBox
      infoBox.style.left = `${x}px`;
      infoBox.style.top = `${y}px`;
      infoBox.hidden = false;
    });
  });

  // Quando si clicca sul bottone di chiusura, nasconde la infoBox
  closeBtn.addEventListener("click", () => {
    infoBox.hidden = true;
  });

  // Se si clicca **fuori** dal globo o dalla infoBox, la infoBox viene nascosta
  document.body.addEventListener("click", (e) => {
    // Se il click non è dentro globo e nemmeno dentro infoBox...
    if (!globo.contains(e.target) && !infoBox.contains(e.target)) {
      // ...nascondi la infoBox
      infoBox.hidden = true;
    }
  });

});
