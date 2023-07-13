import axios from "axios";

const getAxios = async (url) => {
  try {
    const { data } = await axios(url);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getAxios;
