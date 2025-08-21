function searchBooks() {
  const category = document.getElementById('categoryInput').value.trim();
  if (!category) return;
  // Salva la categoria codificata in localStorage
  localStorage.setItem('searchCategory', encodeURIComponent(category.toLowerCase()));
  window.location.href = "ricerca.html";
}

// Attiva ricerca anche premendo "Invio"
document.getElementById('categoryInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    searchBooks();
  }
});

// Funzione per attivare la ricerca per categoria cliccando sui singoli bottoni
const buttons = document.querySelectorAll('.book');

buttons.forEach(btn => {
  if (btn.textContent.trim() !== '') {
    btn.addEventListener('click', () => {
      const category = btn.textContent.trim().toLowerCase();
      // Salva la categoria codificata in localStorage
      localStorage.setItem('searchCategory', encodeURIComponent(category));
      window.location.href = "ricerca.html";
    });
  }
});