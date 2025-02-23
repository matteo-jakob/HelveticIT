//////////////////////////////////////
//         POPUP MESSAGE            //
//////////////////////////////////////

// Elemente auswählen
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const closePopup = document.getElementById("close-popup");

// Funktion, um das Popup darzustellen
function showPopup(message) {
  popupMessage.textContent = message; // Setzt die Nachricht
  popup.classList.remove("hidden"); // Entfernt 'hidden'
  popup.classList.add("flex"); // Fügt 'flex' hinzu, um das Popup sichtbar zu machen

  document.body.style.overflow = "hidden";
  setTimeout(() => {
    popup.style.opacity = "100%";
  }, 10);
}

// Funktion, um das Popup zu schließen
function closePopupHandler() {
  popup.classList.remove("flex"); // Entfernt 'flex'
  popup.classList.add("hidden"); // Fügt 'hidden' hinzu
  setTimeout(() => {
    popup.style.opacity = "0%";
  }, 10);
  document.body.style.overflow = "";
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

//////////////////////////////////////
//       NAV HAMBURGER MENU         //
//////////////////////////////////////

const hamburgerButton = document.getElementById("hamburger-button");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelectorAll("#mobile-menu a");

hamburgerButton.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    //document.body.classList.add("overflow-hidden");
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
  document.body.style.overflow = "";
  //document.body.classList.remove("overflow-hidden");

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

//////////////////////////////////////
//     Nav Hide/Show on scroll      //
//////////////////////////////////////

let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  if (scrollTop <= 20) {
    // Wenn ganz oben, Navbar sicher anzeigen
    navbar.style.transform = "translateY(0)";
  } else if (scrollTop > lastScrollTop) {
    // Nach unten scrollen -> Navbar ausblenden
    navbar.style.transform = "translateY(-100%)";
  } else {
    // Nach oben scrollen -> Navbar einblenden
    navbar.style.transform = "translateY(0)";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Verhindert negative Werte
});
