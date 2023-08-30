import { request } from "../requestMethod";

const postAxios = async (url, payload = {}) => {
  try {
    const { data } = await request.post(url, payload);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default postAxios;
