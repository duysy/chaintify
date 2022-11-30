import common from "../common";
type TPutArtist = {
  name: string;
  description: string;
  cover: string;
};
export async function put(artist: TPutArtist) {
  const res = await common.post("/artists/", artist);
  return res.data;
}
