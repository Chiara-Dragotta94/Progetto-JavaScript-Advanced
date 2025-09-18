document.addEventListener('DOMContentLoaded', () => {
  function searchBooks() {
    const inputEl = document.getElementById('categoryInput');
    if (!inputEl) return;
    const category = inputEl.value.trim();
    if (!category) return;
    localStorage.setItem('searchCategory', encodeURIComponent(category.toLowerCase()));
    window.location.href = "ricerca.html";
  }

  const categoryInput = document.getElementById('categoryInput');
  if (categoryInput) {
    categoryInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        searchBooks();
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

  const searchBtn = document.querySelector('button.btn');
  if (searchBtn && categoryInput) {
    searchBtn.addEventListener('click', searchBooks);
  }
});