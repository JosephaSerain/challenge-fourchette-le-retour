//objet game
const game = {
    //avant d'y mettre une variable on pense à mettre une valeur vide (null, false, 0..)
    randomNumber: null,
    attempts: 1,
    scores: [],
}

// Le nombre max
const MAX_NUMBER = 500; 

function generateRandomNumber(min,max) {
    const randomNumber = Math.round(Math.random() * (max - min)) + min;
     
    while (randomNumber>max)
        randomNumber = Math.round(Math.random() * (max - min)) + min;
    
    return randomNumber
}


function play(min, max) {
    
    
    while(true) {
        const askPlay = prompt(`Veux-tu jouer à un jeu ?`).toLowerCase;

        if (askPlay===`oui`){
            console.log(`Lancer le jeu`);
        } if (askPlay!== `oui`) {
            alert(`Passez une bonne journée !`);

            
        }

            // Le nombre cherché
        const searchedNumber= generateRandomNumber(min,max)
        console.log(searchedNumber)
        // Le nombre saisi
        let enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));

        // Le nombre d'essais
        let attempts = 1;

        // Tant que le nombre saisi n'est pas bon on redemande un nombre
        while (enteredNumber !== searchedNumber) {
            // on vérifie que l'utilisateur a répondu, sinon on sort de la boucle
            if(!enteredNumber){
                break;
            }
            // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
            if (enteredNumber < searchedNumber) {
                enteredNumber = parseInt(prompt('C\'est plus'));
            }
            else {
                enteredNumber = parseInt(prompt('C\'est moins'));
            }
            // on incrémente le nombre d'essais
            attempts += 1;
        }

        // on est sorti de la boucle, c'est soit que le nombre saisi est bien le nombre cherché
        // soit que le joueur n'a pas répondu et que enteredNumber est 'falsy'
        if(enteredNumber){
            // on affiche un message de victoire
            alert('Bravo ! C\'était bien ' + searchedNumber + ' - Nombre d\'essais : ' + attempts);
        } else {
            // on affiche un message d'abandon
            alert('Vous abandonnez ? Dommage...');
        }
    }   
}

play(10,20)