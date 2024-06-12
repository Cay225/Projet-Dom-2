document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const loader = document.getElementById('loader');
    const choixMenusSection = document.getElementById('choix-menus');
    const menuItems = document.querySelectorAll('.menu-item');
    const platsSelectionnes = document.getElementById('plats-selectionnes');
    const totalPlats = document.getElementById('totalPlats');
    let selectedPlats = [];

    // Ecouteur d'événement pour le formulaire d'enregistrement
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = registrationForm.elements['username'].value;
        const password = registrationForm.elements['password'].value;

        // Vérifier que le mot de passe a au moins 8 caractères
        if (password.length < 8) {
            alert('Le mot de passe doit contenir au moins 8 caractères.');
            return;
        }

        // Afficher le loader pendant le chargement
        loader.style.display = 'block';

        // Simuler une redirection après 2 secondes (loader de démonstration)
        setTimeout(() => {
            loader.style.display = 'none';
            choixMenusSection.style.display = 'block'; // Afficher la section de choix de menus
        }, 2000);
    });

    // Ecouteurs d'événements pour les boutons "Ajouter au Panier"
    menuItems.forEach((menuItem) => {
        menuItem.querySelector('.btn-ajouter').addEventListener('click', () => {
            const platName = menuItem.querySelector('p').textContent;
            const platPrice = parseFloat(menuItem.querySelector('.prix').textContent);
            selectedPlats.push({ name: platName, price: platPrice });

            // Mettre à jour l'affichage des plats sélectionnés
            displaySelectedPlats();
            // Calculer et afficher le total des plats sélectionnés
            calculateTotal();
        });
    });

    // Fonction pour afficher les plats sélectionnés dans le panier
    function displaySelectedPlats() {
        platsSelectionnes.innerHTML = '';
        selectedPlats.forEach((plat) => {
            const platElement = document.createElement('div');
            platElement.textContent = `${plat.name} - ${plat.price.toFixed(2)} €`;
            platsSelectionnes.appendChild(platElement);
        });
    }

    // Fonction pour calculer le total des plats sélectionnés
    function calculateTotal() {
        const total = selectedPlats.reduce((acc, plat) => acc + plat.price, 0);
        totalPlats.textContent = `Total : ${total.toFixed(2)} €`;
    }
});
