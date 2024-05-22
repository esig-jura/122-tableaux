/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

const personnes = [
    {
        nom: 'Doe',
        prenom: 'John',
        age: 25,
        localite: 'New York',
    },
    {
        nom: 'Doe',
        prenom: 'Alex',
        age: 30,
        localite: 'Los Angeles',
    },
    {
        nom: 'Doe',
        prenom: 'Jack',
        age: 28,
        localite: 'Chicago',
    },
    {
        nom: 'Doe',
        prenom: 'Jill',
        age: 35,
        localite: 'Miami',
    },
    {
        nom: 'Doe',
        prenom: 'Jim',
        age: 40,
        localite: 'San Francisco',
    }
];

// Récupère le 1er formulaire du document
const formulaire = document.querySelector('form');
// Récupère les champs textes
const txtNom = document.querySelector('#nom');
const txtPrenom = document.querySelector('#prenom');
const txtAge = document.querySelector('#age');
const txtLocalite = document.querySelector('#localite');
// Récupère le premier corps de tableau <tbody>
const tableBody = document.querySelector('tbody');
// Colonne de tri par défaut
let tri = 'prenom';
// Test si la récupération des éléments HTML est OK
console.log(formulaire, txtNom, tableBody);

// Fonction qui trie le tableau par la colonne passée en paramètre avec localeCompare
function trierTableau(colonne) {
    personnes.sort(function(a, b) {
        if(typeof a[colonne] === 'string') {
            return a[colonne].localeCompare(b[colonne], 'fr');
        }
        return a[colonne] - b[colonne];
    });
}

// Méthode qui construit le tableau HTML à partir du tableau JS personnes
function construireTableau() {
    // Trie le tableau par la colonne passée en paramètre
    trierTableau(tri);
    // Crée une chaîne de caractères vide
    let tableHTML = '';
    // Parcours le tableau personnes
    personnes.forEach(function(personne) {
        // Ajoute une nouvelle ligne au tableau HTML
        tableHTML += `
            <tr>
                <td>${ personne.prenom }</td>
                <td>${ personne.nom }</td>
                <td>${ personne.age }</td>
                <td>${ personne.localite }</td>
            </tr>
        `;
    });
    // Ajoute le contenu HTML au <tbody>
    tableBody.innerHTML = tableHTML;
}

// Ecouter l'envoi du formulaire
formulaire.addEventListener('submit', function envoyer(event) {
    // Stopper l'envoi du formulaire
    event.preventDefault();
    // Ajoute une nouvelle personne au tableau
    personnes.push({
        nom: txtNom.value,
        prenom: txtPrenom.value,
        age: txtAge.value,
        localite: txtLocalite.value,
    });
    // Reconstruit le tableau
    construireTableau();
    // Vide tous les champs du formulaire
    formulaire.reset();
    // Focus sur le prénom
    txtPrenom.focus();
});

// Après le chargement de la page, on construit le tableau
window.addEventListener('load', construireTableau);
