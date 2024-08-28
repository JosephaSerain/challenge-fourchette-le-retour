//objet game
const game = {
    //avant d'y mettre une variable on pense à mettre une valeur vide (null, false, 0..)
    searchedNumber: null,
    attempts: 0,
    scores: [`7`,`5`,`4`,`3`],
}

//on va faire une fonction pour ajouter un tableau des scores dans le html
function displayScores() {
    //on cible l'élément possédant l'id scores (si l'élément est vide ici  je n'ai pas utilisé le bon sélecteur)
    const target = document.getElementById(`scores`);
    console.log(target);

    //créer un élement h1 pour rajouter un titre
    const title = document.createElement(`h1`); //h1 vide
    title.classList.add(`scores-title`); //h1 class scores-title
    title.textContent = `Résultats de vos parties ${game.scores.length} parties`;

    

    //il faut ajouter l'éléments dans le doc
    target.append(title);

    console.log(title);
}

displayScores()

//on vient définir une autre fonction pour générer le nb aléatoire
function generateRandomNumber(min, max) {
    //dans le livre clean code : soyez explicite dans le choix du nom de la fonction et doit faire 10 a 20 lignes max
    //0 à 10 puis 10 à 20 je dois rajouter 10 à l'opération
    const number = min + Math.round(Math.random() * (max-min));
    return number;

}


function play() {

    game.searchedNumber = generateRandomNumber(10,20);
    console.log(game.searchedNumber)
    let enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));

    //marche grace au fameux gruyère vers le haut
    game.attempts = 1;


    while (enteredNumber !== game.searchedNumber) {
        if (!enteredNumber) {
            break;
        }
        if (enteredNumber < game.searchedNumber) {
            enteredNumber = parseInt(prompt('C\'est plus'));
        } else {
            enteredNumber = parseInt(prompt('C\'est moins'));
        }
        game.attempts += 1;
    }

    if (enteredNumber) {

        //voici les scores
        let scoreMessage = ""
        for (let compteur = 0; compteur < game.scores.length; compteur ++) {
            //on va chercher avec la boucle la valeur du score
            const attempts = game.scores[compteur];
            scoreMessage+= `Partie ${compteur+1} - nombre d'essais ${attempts}`
        }

        alert(`Score précédent : ` + scoreMessage)

        alert('Bravo ! C\'était bien ' + game.searchedNumber + ' - Nombre d\'essais : ' + game.attempts);
        //Ici stocker le score / push permet de rajouter une ligne dans le tableau
        game.scores.push(game.attempts)
        //On rejoue ?
        play()
    } else {

        alert('Vous abandonnez ? Dommage...');
    }
}

//je lance la fonction play
play()