import { request } from "../requestMethod";

const getAxios = async (url) => {
  try {
    const { data } = await request.get(url);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getAxios;
