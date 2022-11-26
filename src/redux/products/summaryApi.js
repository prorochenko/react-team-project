import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const axiosDayInfo = async userData => {
  const { data } = await axios.post('/day/info', userData);
  return data;
};
