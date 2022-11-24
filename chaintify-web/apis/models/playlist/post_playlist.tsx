import common from "../common";
type TCreatePlayList = {
  name: String;
  description: String;
};
export async function create(playlist: TCreatePlayList) {
  try {
    const res = await common.post("/playlists/", playlist);
    return res.data;
  } catch (error) {}
}
