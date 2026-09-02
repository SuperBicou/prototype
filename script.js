// ============================================
// TOUT LE CODE APRÈS LE CHARGEMENT DE LA PAGE
// ============================================

window.addEventListener("load", () => {

    // Empêche le navigateur de restaurer
    // automatiquement l'ancienne position de scroll
    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }

    // ============================================
    // MENU ITINÉRAIRE
    // ============================================

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

});