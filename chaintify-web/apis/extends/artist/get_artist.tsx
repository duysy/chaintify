import common from "../common";
export async function get() {
  const res = await common.get(`/artists/`);
  return res.data;
}
