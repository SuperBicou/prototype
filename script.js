// ============================================
// TOUJOURS REVENIR EN HAUT AU RECHARGEMENT
// ============================================

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {

    // Supprime éventuellement #contact, #salon, etc.
    if (window.location.hash) {
        history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search
        );
    }

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });

});

const menuItineraire =
    document.querySelector(".itineraire-menu");

const optionsItineraire =
    document.querySelector(".itineraire-options");


// Ferme le menu uniquement si la souris
// n'est ni sur le bouton ni sur les options
function verifierFermeture() {

    const sourisSurBouton =
        menuItineraire.matches(":hover");

    const sourisSurOptions =
        optionsItineraire.matches(":hover");

    if (
        !sourisSurBouton &&
        !sourisSurOptions
    ) {
        menuItineraire.open = false;
    }
}


// Quand la souris quitte le bouton
menuItineraire.addEventListener(
    "mouseleave",
    () => {
        setTimeout(verifierFermeture, 50);
    }
);


// Quand la souris quitte le menu déroulant
optionsItineraire.addEventListener(
    "mouseleave",
    () => {
        setTimeout(verifierFermeture, 50);
    }
);


// Si on clique ailleurs dans la page
document.addEventListener(
    "click",
    (event) => {

        if (!menuItineraire.contains(event.target)) {
            menuItineraire.open = false;
        }

    }
);
