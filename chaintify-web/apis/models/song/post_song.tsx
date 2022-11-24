import common from "../common";
export type TCreateSong = {
  album: Number | null;
  artist: Number[] | null;
  name: String | null;
  length: Number | null;
  track: Number | null;
  disc: Number | null;
  lyrics: String | null;
  path: String | null;
  mtime: Number | null;
};
export async function create(song: TCreateSong) {
  try {
    const res = await common.post("/songs/", {
      album: song.album,
      artist: song.artist,
      name: song.name,
      length: song.length,
      track: song.track,
      disc: song.disc,
      lyrics: song.lyrics,
      path: song.path,
      mtime: song.mtime,
    });
    return res.data;
  } catch (error) {}
}
