import common from "../common";
export type TCreateAlbum = {
  name: String;
  artist: Number[];
  cover: String;
  description: String;
};
export async function create(album: TCreateAlbum) {
  try {
    const res = await common.post("/albums/", album);
    return res.data;
  } catch (error) {}
}
