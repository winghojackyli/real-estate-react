import axios from "axios";

const putAxios = async (url, payload = {}) => {
  try {
    const { data } = await axios.put(url, payload);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default putAxios;
