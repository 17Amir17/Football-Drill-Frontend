import axios from 'axios';

const baseURL = 'https://footballdrill.herokuapp.com/';

export async function getAllPlayers() {
  try {
    const response = await axios.get(`${baseURL}get/`);
    return response.data;
  } catch (error) {
    alert(error);
  }
}

export async function getPlayerDetails(id) {
  try {
    const response = await axios.get(`${baseURL}get/player/${id}`);
    return response.data;
  } catch (error) {
    alert(error);
  }
}

export async function editPlayer(
  id,
  { salary, age, surName, position, celebrationSentance }
) {
  try {
    const response = await axios.patch(`${baseURL}set/player/${id}`, null, {
      params: {
        salary,
        age,
        surName,
        position,
        celebrationSentance,
      },
    });
    return response.data;
  } catch (error) {
    alert(error);
  }
}

export async function score(id) {
  try {
    const response = await axios.post(`${baseURL}goal/player/${id}`);
    return response.data;
  } catch (error) {
    alert(error);
  }
}

export async function addPlayer(playerDetails) {
  try {
    console.log(playerDetails);
    const response = await axios.post(`${baseURL}create/player/`, null, {
      body: playerDetails,
    });
    return response.data;
  } catch (error) {
    alert(error);
  }
}
