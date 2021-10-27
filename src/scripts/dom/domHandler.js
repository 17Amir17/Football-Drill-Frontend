import { createPlayerCard } from './playerCard.js';
import { getAllPlayers } from '../api/api.js';

const playerContainer = document.querySelector('#player-container');

getAllPlayers();
playerContainer.appendChild(
  createPlayerCard({
    firstName: 'Chicharito',
    surName: 'Hernandez',
    salary: 550000,
    age: 32,
    image: 'chicharito.png',
    strongLeg: 'Left',
    position: 'Middfield',
    celebrationSentance: 'Fuck Yeah!',
    id: 2,
  })
);
