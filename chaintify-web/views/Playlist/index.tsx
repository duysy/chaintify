import React from "react";
import { useState, useEffect } from "react";
import { Grid, Box, Checkbox, Typography, Button, Stack } from "@mui/material";
import { Favorite, MoreVert, PlayCircle, PauseCircle } from "@mui/icons-material";

import Image from "next/image";

import Wrap from "../wrap";
import MusicList from "../../components/MusicList";
import { detail as detailPlayList } from "../../apis/models/playlist/get_playlist";
import { useMusicPlayer } from "../../contexts/useMusicPlayer";
import { TMusicList } from "../../components/MusicList/types";

type Props = {
  id: string | string[] | undefined;
};
export default function PlayList(props: Props) {
  const id = props.id;
  const { setListSongMusicPlayer, play, pause, isPlay } = useMusicPlayer();
  const [playlist, setPlaylist] = useState<any | {}>({});
  const [songs, setSongs] = useState<TMusicList[] | null>(null);
  const handelButtonPlayClick = () => {
    const listSongMusicPlay_ = playlist.song.map((item: any) => {
      return {
        ...item,
        ...{ path: `http://127.0.0.1:8000/music/upload/?path=${item.path}` },
      };
    });
    console.log(listSongMusicPlay_);
    setListSongMusicPlayer(listSongMusicPlay_);
    play();

    console.log("play");
  };
  const handelButtonPauseClick = () => {
    pause();
    console.log("pause");
  };
  useEffect(() => {
    const initPlaylist = async () => {
      if (!id) return;
      const playlist_ = await detailPlayList(+id, { depth: 2 });
      // console.log(playlist_);
      setPlaylist(playlist_);
    };
    initPlaylist();
  }, [id]);
  useEffect(() => {
    const initSongs = async () => {
      if (!playlist || Object.keys(playlist).length === 0) return;
      let songs_: TMusicList[] = playlist.song.map((item: any, index: any) => {
        return {
          id: item.id,
          imgUrl: "https://picsum.photos/100/100",
          name: item.name,
          artist: item.artist[0]?.name,
          album: item.album?.name,
          time: item.length,
          favorite: true,
          checkBoxStatus: false,
        } as TMusicList;
      });

      console.log(songs_);
      setSongs(songs_);
    };
    initSongs();
  }, [playlist]);
  return (
    <Wrap>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginTop="5rem">
            <Image
              src="https://picsum.photos/500/500"
              alt="Image album"
              width={300}
              height={300}
              style={{
                borderRadius: "20px",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                color: "text.primary",
              }}
            >
              {playlist?.name ? playlist.name : "Không có tên bài hát"}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "text.primary",
              }}
            >
              {playlist?.description ? playlist.description : "Không có description"}
            </Typography>
            <Box>
              {isPlay ? (
                <Button
                  startIcon={<PauseCircle fontSize="large" />}
                  sx={{
                    bgcolor: "#E8AC24",
                    borderRadius: "20px",
                    color: "text.primary",
                    padding: "0.5rem 0",
                    margin: "1.5rem 0",
                    width: "8rem",
                  }}
                  onClick={handelButtonPauseClick}
                >
                  Tạm dừng
                </Button>
              ) : (
                <Button
                  startIcon={<PlayCircle fontSize="large" />}
                  sx={{
                    bgcolor: "#E8AC24",
                    borderRadius: "20px",
                    color: "text.primary",
                    padding: "0.5rem 0",
                    margin: "1.5rem 0",
                    width: "8rem",
                  }}
                  onClick={handelButtonPlayClick}
                >
                  Play
                </Button>
              )}
            </Box>
            <Stack direction="row" spacing={3}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  padding: "0.5rem",
                  borderRadius: "10000px",
                  bgcolor: "#333333",
                }}
              >
                <Favorite
                  sx={{
                    color: "text.primary",
                  }}
                />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  padding: "0.5rem",
                  borderRadius: "10000px",
                  bgcolor: "#333333",
                }}
              >
                <MoreVert
                  sx={{
                    color: "text.primary",
                  }}
                />
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography
            variant="subtitle1"
            sx={{
              color: "text.primary",
              padding: "1rem 0",
            }}
          >
            {playlist?.isPublic ? "Album này được public, mọi người có thể truy cập" : "Album này được không public, mọi người không thể truy cập"}
          </Typography>
          {/* <Like songs={songs} /> */}
          {songs && <MusicList list={songs} />}
        </Grid>
      </Grid>
    </Wrap>
  );
}
