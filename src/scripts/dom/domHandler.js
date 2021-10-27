import { createPlayerCard } from './playerCard.js';
import { getAllPlayers } from '../api/api.js';
import { init } from './modal.js';

const playerContainer = document.querySelector('#player-container');

export async function load() {
  playerContainer.innerHTML = '';
  const allPlayers = await getAllPlayers();
  console.log(allPlayers);
  loadPlayers(allPlayers.playersData);
}

function loadPlayers(players) {
  for (const p of players) {
    console.log(p);
    playerContainer.appendChild(createPlayerCard(p));
  }
}

init();
load();
