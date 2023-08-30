import { request } from "../requestMethod";

const putAxios = async (url, payload = {}) => {
  try {
    const { data } = await request.put(url, payload);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default putAxios;
