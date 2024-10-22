import axios from "axios";

const getPlayerStatsRequest = async (id) => {
  const options = {
    method: 'GET',
    url: `https://v3.football.api-sports.io/players?id=${id}6&season=2022`,
    params: {
      id: id,
      season: '2022'
    },
    headers: {
      'x-rapidapi-key': 'b723fc8e77388911f8df6d66d49b20d6',
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  };

  try {
    return  await axios.request(options)
  } catch (error) {
    console.error(error);
    return null
  }
}

export {
  getPlayerStatsRequest
}