import common from "../common";
export type TCreateAlbum = {
  name: string;
  artist: number[];
  cover: string;
  description: string;
  isPublic: boolean;
};

export async function create(album: TCreateAlbum) {
  const res = await common.post("/albums/private/", album);
  return res.data;
}
