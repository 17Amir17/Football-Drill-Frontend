import axios from 'axios';

const baseURL = 'https://footballdrill.herokuapp.com/';
export async function getAllPlayers() {
  const response = await axios.get(`${baseURL}get/`);
  console.log(response);
}
