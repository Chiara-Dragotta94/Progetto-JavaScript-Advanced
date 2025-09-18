document.addEventListener('DOMContentLoaded', () => {
  const categoryInput = document.getElementById('categoryInput');
  if (categoryInput) {
    categoryInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' && typeof window.searchBooks === 'function') {
        window.searchBooks();
      }
    });
  }

  const buttons = document.querySelectorAll('.book');
  if (buttons && buttons.length > 0) {
    buttons.forEach(btn => {
      if (btn.textContent.trim() !== '') {
        btn.addEventListener('click', () => {
          const category = btn.textContent.trim().toLowerCase();
          localStorage.setItem('searchCategory', encodeURIComponent(category));
          window.location.href = "ricerca.html";
        });
      }
    });
  }

  const searchBtn = document.getElementById('searchButton');
  if (searchBtn && typeof window.searchBooks === 'function') {
    searchBtn.addEventListener('click', window.searchBooks);
  }
});