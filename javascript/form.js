// Aspetta che tutto il contenuto della pagina sia completamente caricato prima di eseguire il codice JavaScript
import _ from 'lodash';

document.addEventListener("DOMContentLoaded", function () {
  // Recupera i form da HTML
  const contactForm = document.getElementById("contactForm");
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  // ----------- FORM CONTATTACI -----------
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Evita che il form venga inviato normalmente
      let valid = true; // Variabile per tenere traccia della validità generale

      // Recupera i campi dal form
      const nameField = document.getElementById("contactName");
      const emailField = document.getElementById("contactEmail");
      const messageField = document.getElementById("contactMessage");

      // Validazione nome: obbligatorio, non deve contenere numeri
      if (nameField.value.trim() === "") {
        showError(nameField, "Il nome è obbligatorio.");
        valid = false;
      } else if (/\d/.test(nameField.value)) {
        showError(nameField, "Il nome non può contenere numeri.");
        valid = false;
      } else {
        showSuccess(nameField);
      }

      // Validazione email: obbligatoria e con formato valido
      if (emailField.value.trim() === "") {
        showError(emailField, "L'email è obbligatoria.");
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
        showError(emailField, "Inserisci un'email valida, es: nome@email.it");
        valid = false;
      } else {
        showSuccess(emailField);
      }

      // Validazione messaggio: non vuoto
      if (messageField.value.trim() === "") {
        showError(messageField, "Il messaggio non può essere vuoto.");
        valid = false;
      } else {
        showSuccess(messageField);
      }

      // Se tutto è valido, mostra messaggio e resetta il form
      if (valid) {
        alert("Messaggio inviato correttamente!");
        contactForm.reset(); // Pulisce i campi del form
        _.forEach([nameField, emailField, messageField], (field) =>
          field.classList.remove("is-valid")
        );
      }
    });
  }

  // ----------- FORM REGISTRAZIONE -----------
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;

      const name = document.getElementById("registerName");
      const email = document.getElementById("registerEmail");
      const password = document.getElementById("registerPassword");

      // Nome: non vuoto, senza numeri
      if (name.value.trim() === "") {
        showError(name, "Il nome è obbligatorio.");
        valid = false;
      } else if (/\d/.test(name.value)) {
        showError(name, "Il nome non può contenere numeri.");
        valid = false;
      } else {
        showSuccess(name);
      }

      // Email: obbligatoria e con formato corretto
      if (email.value.trim() === "") {
        showError(email, "L'email è obbligatoria.");
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        showError(email, "Inserisci un'email valida, es: nome@email.it");
        valid = false;
      } else {
        showSuccess(email);
      }

      // Password: almeno 8 caratteri, un numero, un simbolo
      if (password.value.trim() === "") {
        showError(password, "La password è obbligatoria.");
        valid = false;
      } else if (
        !/^.*(?=.{8,})(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).*$/.test(
          password.value
        )
      ) {
        showError(
          password,
          "La password deve contenere almeno 8 caratteri, un numero e un simbolo."
        );
        valid = false;
      } else {
        showSuccess(password);
      }

      // Se tutto è valido, mostra messaggio di successo
      if (valid) {
        alert("Registrazione avvenuta con successo!");
        registerForm.reset();
        _.forEach([name, email, password], (field) =>
          field.classList.remove("is-valid")
        );
      }
    });
  }

  // ----------- FORM LOGIN (ACCESSO) -----------
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;

      const name = document.getElementById("loginName");
      const email = document.getElementById("loginEmail");
      const password = document.getElementById("loginPassword");

      // Nome: obbligatorio, senza numeri
      if (name.value.trim() === "") {
        showError(name, "Il nome è obbligatorio.");
        valid = false;
      } else if (/\d/.test(name.value)) {
        showError(name, "Il nome non può contenere numeri.");
        valid = false;
      } else {
        showSuccess(name);
      }

      // Email: obbligatoria e con formato corretto
      if (email.value.trim() === "") {
        showError(email, "L'email è obbligatoria.");
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        showError(email, "Inserisci una email valida.");
        valid = false;
      } else {
        showSuccess(email);
      }

      // Password: almeno 8 caratteri, un numero, un simbolo
      if (password.value.trim() === "") {
        showError(password, "La password è obbligatoria.");
        valid = false;
      } else if (
        !/^.*(?=.{8,})(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).*$/.test(
          password.value
        )
      ) {
        showError(
          password,
          "La password deve contenere almeno 8 caratteri, un numero e un simbolo."
        );
        valid = false;
      } else {
        showSuccess(password);
      }

      // Se tutto è valido, saluta l'utente
      if (valid) {
        alert("Ciao, " + name.value.trim() + "!");
        loginForm.reset();
        _.forEach([name, email, password], (field) =>
          field.classList.remove("is-valid")
        );
      }
    });
  }

  // ----------- FUNZIONI DI SUPPORTO -----------

  // Mostra un errore sul campo: aggiunge classe 'is-invalid' di Bootstrap e imposta il messaggio
  function showError(input, message) {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");

    const feedback = input.nextElementSibling;
    if (feedback && feedback.classList.contains("invalid-feedback")) {
      feedback.textContent = message;
    }
  }

  // Mostra successo: rimuove 'is-invalid' e aggiunge 'is-valid'
  function showSuccess(input) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  }
});
