// Funzione per attivare la ricerca nella barra di ricerca della home page
function searchBooks() {
  const category = document.getElementById('categoryInput').value.toLowerCase().trim();
  if (!category) return;

  localStorage.setItem('searchCategory', category);
  window.location.href = `ricerca.html`;
}

// Funzione per attivare la ricerca per categoria cliccando sui singoli bottoni
const buttons = document.querySelectorAll('.book');

buttons.forEach(btn => {
  if (btn.textContent.trim() !== '') {
    btn.addEventListener('click', () => {
      const category = btn.textContent.trim().toLowerCase();
      localStorage.setItem('searchCategory', category);
      window.location.href = `ricerca.html`;
    });
  }
});

// Funzione asincrona per caricare i libri
async function loadBooksByCategory() {
  const category = localStorage.getItem('searchCategory');
  const categoryTitle = document.getElementById('categoryTitle');
  const container = document.getElementById('booksContainer');

  if (!category) {
    categoryTitle.textContent = 'Nessuna categoria specificata.';
    container.innerHTML = '';
    return;
  }

  categoryTitle.textContent = `Risultati per: ${category}`;
  container.innerHTML = '';

  try {
    const res = await fetch(`https://openlibrary.org/subjects/${category}.json`);
    const data = await res.json();

    if (!data.works || data.works.length === 0) {
      container.innerHTML = '<p>Nessun libro trovato.</p>';
      return;
    }

    data.works.forEach(book => {
      const title = book.title || 'Titolo non disponibile';
      const authors = book.authors?.map(a => a.name).join(', ') || 'Autore sconosciuto';
      const key = book.key;

      // Div libro con sfondo chiaro e ombra più marcata
      const bookDiv = document.createElement('div');
      bookDiv.className = 'mb-4 p-3 border rounded shadow-lg';
      bookDiv.style.backgroundColor = '#dad6d6ff'; // sfondo chiaro, solido
      bookDiv.style.transition = 'transform 0.2s, box-shadow 0.2s';
      bookDiv.style.cursor = 'pointer';

      bookDiv.addEventListener('mouseover', () => {
        bookDiv.style.transform = 'translateY(-3px)';
        bookDiv.style.boxShadow = '8px 8px 20px rgba(0,0,0,0.2)';
      });
      bookDiv.addEventListener('mouseout', () => {
        bookDiv.style.transform = 'translateY(0)';
        bookDiv.style.boxShadow = '4px 4px 15px rgba(0,0,0,0.1)';
      });

      const h4 = document.createElement('h4');
      h4.textContent = title;

      const pAuthors = document.createElement('p');
      pAuthors.innerHTML = `<strong>Autori:</strong> ${authors}`;

      const btnDesc = document.createElement('button');
      btnDesc.className = 'btn btn-outline-primary btn-sm';
      btnDesc.textContent = 'Vedi descrizione';

      const descP = document.createElement('p');
      descP.className = 'mt-2';
      descP.style.display = 'none';

      let descriptionLoaded = false;

      btnDesc.addEventListener('click', async () => {
        if (!descriptionLoaded) {
          btnDesc.disabled = true;
          btnDesc.textContent = 'Caricamento...';

          try {
            const detailsRes = await fetch(`https://openlibrary.org${key}.json`);
            const details = await detailsRes.json();

            let description = 'Descrizione non disponibile.';
            if (typeof details.description === 'string') {
              description = details.description;
            } else if (details.description?.value) {
              description = details.description.value;
            }

            // Carta descrizione
            descP.textContent = description;
            descP.style.display = 'block';
            descP.style.padding = '12px 15px';
            descP.style.border = '1px solid #ddd';
            descP.style.borderRadius = '10px';
            descP.style.backgroundColor = '#fffdf5';
            descP.style.boxShadow = '6px 6px 18px rgba(0,0,0,0.15)';
            descP.style.marginTop = '8px';
            descP.style.whiteSpace = 'pre-wrap';
            descP.style.fontSize = '0.95rem';
            descP.style.color = '#333';
            descP.style.transform = 'rotate(-0.3deg)';
            descP.style.transition = 'all 0.3s ease';

            descriptionLoaded = true;
            btnDesc.textContent = 'Nascondi descrizione';
          } catch (error) {
            descP.textContent = 'Errore nel caricamento della descrizione.';
            descP.style.display = 'block';
            btnDesc.textContent = 'Riprova';
          } finally {
            btnDesc.disabled = false;
          }
        } else {
          if (descP.style.display === 'none') {
            descP.style.display = 'block';
            descP.style.opacity = '0';
            setTimeout(() => descP.style.opacity = '1', 10);
            btnDesc.textContent = 'Nascondi descrizione';
          } else {
            descP.style.opacity = '0';
            setTimeout(() => descP.style.display = 'none', 300);
            btnDesc.textContent = 'Vedi descrizione';
          }
        }
      });

      bookDiv.appendChild(h4);
      bookDiv.appendChild(pAuthors);
      bookDiv.appendChild(btnDesc);
      bookDiv.appendChild(descP);

      container.appendChild(bookDiv);
    });

  } catch (err) {
    console.error(err);
    container.innerHTML = '<p>Errore nel recupero dei dati.</p>';
  }
}

document.addEventListener('DOMContentLoaded', loadBooksByCategory);
