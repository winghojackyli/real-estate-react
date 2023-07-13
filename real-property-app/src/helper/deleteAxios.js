import axios from "axios";

const deleteAxios = async (url) => {
  try {
    const res = await axios.delete(url);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export default deleteAxios;
