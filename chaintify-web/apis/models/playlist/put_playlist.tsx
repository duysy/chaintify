import common from "../common";
export type TUpdatePlayList = {
  name: String;
  song: any[];
};
export async function update(id: Number, playlist: TUpdatePlayList) {
  try {
    const res = await common.put(`/playlists/${id}/`, playlist);
    return res.data;
  } catch (error) {}
}
