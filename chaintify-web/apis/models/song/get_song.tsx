import common from "../common";
export async function list({depth = 0, limit = 1000, offset = 0}) {
  try {
    const res = await common.get(`/songs/?depth=${depth}&limit=${limit}&offset=${offset}`);
    console.log(res);
    return res.data;
  } catch (error) {}
}
export async function detail({ id = null, depth = 0 }) {
  try {
    const res = await common.get(`/songs/${id}/?depth=${depth}`);
    return res.data;
  } catch (error) {}
}
