import { getPlayerDetails, score } from '../api/api';
import { load } from './domHandler';

const playerTemplate = document.querySelector('#player-template');

export function createPlayerCard(playerDetails) {
  const newCard = playerTemplate.cloneNode(true); //Clone from template
  newCard.id = '';
  newCard.querySelector('.fifa-fname').innerText = playerDetails.firstName;
  newCard.querySelector('.fifa-sname').innerText = playerDetails.surName;
  newCard.querySelector('.fifa-age').innerText = playerDetails.age;
  newCard.querySelector('.fifa-salary').innerText = playerDetails.salary;
  newCard.querySelector('.fifa-sleg').innerText = playerDetails.strongLeg;
  newCard.querySelector('.fifa-position').innerText = playerDetails.position;
  newCard.querySelector('.fifa-celebration').innerText =
    playerDetails.celebrationSentance;
  newCard.querySelector('.fifa-image').src = playerDetails.image;
  newCard.dataset.id = playerDetails.id;
  newCard.addEventListener('click', onEditClick);
  newCard.hidden = false;
  return newCard;
}

async function onEditClick(event) {
  if (event.target.classList.contains('fifa-edit')) {
    const editModal = document.querySelector('#edit');
    const card = event.target.closest('.col-sm');
    const id = card.dataset.id;
    editModal.dataset.id = id;

    const playerDetails = await getPlayerDetails(id);
    editModal.querySelector('.fifa-sname').value = playerDetails.surName;
    editModal.querySelector('.fifa-age').value = playerDetails.age;
    editModal.querySelector('.fifa-salary').value = playerDetails.salary;
    editModal.querySelector('.fifa-position').value = playerDetails.position;
    editModal.querySelector('.fifa-celebration').value =
      playerDetails.celebrationSentance;
    $('#edit').modal('show');
  } else if (event.target.classList.contains('fifa-score')) {
    const card = event.target.closest('.col-sm');
    const id = card.dataset.id;
    score(id);
    load();
  }
}
