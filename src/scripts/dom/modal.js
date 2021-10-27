import { editPlayer } from '../api/api';
import { load } from './domHandler';

const closeEdit = document.querySelector('#closeEdit');
const saveEdit = document.querySelector('#saveEdit');
const editModal = document.querySelector('#edit');
export function init() {
  console.log('INIT');
  closeEdit.addEventListener('click', (e) => {
    $('#edit').modal('hide');
  });
  saveEdit.addEventListener('click', onEditSaveClick);
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
