import common from "../common";
export async function list({ depth = 0, limit = 1000, offset = 0 }) {
  try {
    const res = await common.get(`/albums/?depth=${depth}&limit=${limit}&offset=${offset}`);
    return res.data;
  } catch (error) {}
}
export async function detail(id: Number, { depth = 0 }) {
  try {
    const res = await common.get(`/albums/${id}/?depth=${depth}`);
    return res.data;
  } catch (error) {}
}
