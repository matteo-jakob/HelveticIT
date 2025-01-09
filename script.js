// Elemente auswählen
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const closePopup = document.getElementById("close-popup");

// Funktion, um das Popup anzuzeigen
function showPopup(message) {
  popupMessage.textContent = message; // Setzt die Nachricht
  popup.classList.remove("hidden"); // Entfernt 'hidden'
  popup.classList.add("flex"); // Fügt 'flex' hinzu, um das Popup sichtbar zu machen
}

// Funktion, um das Popup zu schließen
function closePopupHandler() {
  popup.classList.remove("flex"); // Entfernt 'flex'
  popup.classList.add("hidden"); // Fügt 'hidden' hinzu
}

// Event Listener für den Schließen-Button
closePopup.addEventListener("click", closePopupHandler);

// Beispiel: Popup anzeigen, wenn das Formular erfolgreich abgeschickt wurde
document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault(); // Verhindert das Standard-Submit-Verhalten

  const formData = new FormData(e.target); // Holt die Formulardaten

  try {
    const response = await fetch("contact.php", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.status === "success") {
      showPopup(result.message); // Popup mit Erfolgsmeldung anzeigen
    } else {
      showPopup(result.message); // Popup mit Fehlermeldung anzeigen
    }
  } catch (error) {
    showPopup("Es gab einen Fehler. Bitte versuchen Sie es später erneut."); // Allgemeine Fehlermeldung
  }
});

const hamburgerButton = document.getElementById("hamburger-button");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelectorAll("#mobile-menu a");

hamburgerButton.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    setTimeout(() => {
      mobileMenu.classList.remove("-translate-x-full");
      mobileMenu.classList.add("translate-x-0");
    }, 10); // Slight delay to ensure the transition applies
  } else {
    closeMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

function closeMenu() {
  mobileMenu.classList.remove("translate-x-0");
  mobileMenu.classList.add("-translate-x-full");
  mobileMenu.addEventListener(
    "transitionend",
    () => {
      mobileMenu.classList.add("hidden");
    },
    { once: true } // Ensures the event listener is removed after the transition ends
  );
}

// Smooth scrolling with JavaScript
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor click behavior

    const targetId = this.getAttribute("href").substring(1); // Get the target ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth", // Smooth scrolling
      });
    }
  });
});
