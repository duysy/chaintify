import common from "../common";
export type TUpdatePlayList = {
  name: string;
  song: any[];
};
export async function update(id: number, playlist: TUpdatePlayList) {
  const res = await common.put(`/playlists/private/${id}/`, playlist);
  return res.data;
}
