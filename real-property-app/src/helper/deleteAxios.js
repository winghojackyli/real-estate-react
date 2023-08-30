import { request } from "../requestMethod";

const deleteAxios = async (url) => {
  try {
    const res = await request.delete(url);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export default deleteAxios;
