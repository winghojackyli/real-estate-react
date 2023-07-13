import axios from "axios";

const postAxios = async (url, payload = {}) => {
  try {
    const { data } = await axios.post(url, payload);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default postAxios;
