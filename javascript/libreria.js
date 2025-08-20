// Funzione per attivare la ricerca nella barra di ricerca della home page

function searchBooks() {
  const category = document.getElementById('categoryInput').value.toLowerCase().trim();
  if (!category) return;
  // Salva la categoria in localStorage
  localStorage.setItem('searchCategory', category);
  window.location.href = `ricerca.html`;
}

// Funzione per attivare la ricerca per categoria cliccando sui singoli bottoni

const buttons = document.querySelectorAll('.book');

buttons.forEach(btn => {
  if (btn.textContent.trim() !== '') {
    btn.addEventListener('click', () => {
      const category = btn.textContent.trim().toLowerCase();
      // Salva la categoria in localStorage
      localStorage.setItem('searchCategory', category);
      window.location.href = `ricerca.html`;
    });
  }
});

// Entrambe le funzioni ora salvano la categoria cercata in localStorage
