const playerTemplate = document.querySelector('#player-template');

export function createPlayerCard(playerDetails) {
  const newCard = playerTemplate.cloneNode(true); //Clone from template
  newCard.id = '';
  newCard.querySelector('.fifa-fname').innerText = playerDetails.firstName;
  newCard.querySelector('.fifa-sname').innerText = playerDetails.surName;
  newCard.querySelector('.fifa-age').innerText = playerDetails.age;
  newCard.querySelector('.fifa-sleg').innerText = playerDetails.strongLeg;
  newCard.querySelector('.fifa-position').innerText = playerDetails.position;
  newCard.querySelector('.fifa-celebration').innerText =
    playerDetails.celebrationSentance;
  newCard.dataset.id = playerDetails.id;
  newCard.addEventListener('click', onEditClick);
  newCard.hidden = false;
  return newCard;
}

function onEditClick(event) {
  if (event.target.classList.contains('fifa-edit')) {
    //Do stuff
    const card = event.target.closest('.col-sm');
    const id = card.dataset.id;
  }
}
