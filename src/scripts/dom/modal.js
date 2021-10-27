import { addPlayer, editPlayer } from '../api/api';
import { load } from './domHandler';

const closeEdit = document.querySelector('#closeEdit');
const saveEdit = document.querySelector('#saveEdit');
const editModal = document.querySelector('#edit');

const addButton = document.querySelector('#add-button');
const closeAdd = document.querySelector('#closeAdd');
const saveAdd = document.querySelector('#saveAdd');
const addModal = document.querySelector('#add');

export function init() {
  console.log('INIT');
  closeEdit.addEventListener('click', (e) => {
    $('#edit').modal('hide');
  });
  saveEdit.addEventListener('click', onEditSaveClick);
  addButton.addEventListener('click', onAddClick);
  closeAdd.addEventListener('click', (e) => {
    $('#add').modal('hide');
  });
  saveAdd.addEventListener('click', onSaveAddClick);
}

async function onEditSaveClick(event) {
  const playerDetails = {};
  playerDetails.surName = editModal.querySelector('.fifa-sname').value;
  playerDetails.age = editModal.querySelector('.fifa-age').value;
  playerDetails.salary = editModal.querySelector('.fifa-salary').value;
  playerDetails.position = editModal.querySelector('.fifa-position').value;
  playerDetails.celebrationSentance =
    editModal.querySelector('.fifa-celebration').value;
  const response = await editPlayer(editModal.dataset.id, playerDetails);
  load();
  $('#edit').modal('hide');
}

async function onAddClick(event) {
  $('#add').modal('show');
}

async function onSaveAddClick(event) {
  const playerDetails = {};
  playerDetails.firstName = addModal.querySelector('.fifa-fname').value;
  playerDetails.surName = addModal.querySelector('.fifa-sname').value;
  playerDetails.age = Number(addModal.querySelector('.fifa-age').value);
  playerDetails.salary = Number(addModal.querySelector('.fifa-salary').value);
  playerDetails.position = addModal.querySelector('.fifa-position').value;
  playerDetails.celebrationSentance =
    addModal.querySelector('.fifa-celebration').value;
  playerDetails.image = addModal.querySelector('.fifa-image').value;
  playerDetails.strongLeg = addModal.querySelector('.fifa-sleg').value;

  const response = await addPlayer(playerDetails);
  console.log(response);
  load();
}
