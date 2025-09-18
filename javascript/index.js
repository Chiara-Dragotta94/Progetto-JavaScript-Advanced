import './associazioni.js';
import './form.js';
import './libreria.js';
import './mondo.js';
import './quiz.js';
import './ricerca.js';
import '../styles/style.scss';

// Esporta funzioni che servono agli HTML senza inline handlers
export function searchBooks() {
  const inputEl = document.getElementById('categoryInput');
  if (!inputEl) return;
  const category = inputEl.value.trim();
  if (!category) return;
  localStorage.setItem('searchCategory', encodeURIComponent(category.toLowerCase()));
  window.location.href = "ricerca.html";
}

// Rende disponibili le funzioni in global scope per gli HTML esistenti
if (typeof window !== 'undefined') {
  window.searchBooks = searchBooks;
}

