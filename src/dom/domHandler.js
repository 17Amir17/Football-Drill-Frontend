const playerContainer = document.querySelector('#player-container');
const playerTemplate = document.querySelector('#player-template');

function createPlayerCard(playerDetails) {
  const newCard = playerTemplate.cloneNode(true); //Clone from template
  console.log(newCard);
  newCard.querySelector('.fifa-fname').innerText = playerDetails.firstName;
  newCard.querySelector('.fifa-sname').innerText = playerDetails.surName;
  newCard.querySelector('.fifa-age').innerText = playerDetails.age;
  newCard.querySelector('.fifa-sleg').innerText = playerDetails.strongLeg;
  newCard.querySelector('.fifa-position').innerText = playerDetails.position;
  newCard.querySelector('.fifa-celebration').innerText =
    playerDetails.celebrationSentance;
  newCard.hidden = false;
  return newCard;
}

playerContainer.appendChild(
  createPlayerCard({
    firstName: 'Chicharito',
    surName: 'Hernandez',
    salary: 550000,
    age: 32,
    image: 'https://pbs.twimg.com/media/Bprq3gRCUAE-UC7.jpg',
    strongLeg: 'Left',
    position: 'Middfield',
    celebrationSentance: 'Fuck Yeah!',
  })
);
