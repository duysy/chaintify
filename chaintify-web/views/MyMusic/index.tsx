import React from "react";
import { useState, useEffect } from "react";

import { Box, Typography, Stack, Grid, Checkbox, Button } from "@mui/material";
import Image from "next/image";

import Wrap from "../wrap";
import SectionTitle from "../../components/SectionTitle";
import CarouselBasic from "../../components/CarouselPlayBasic";
import MusicList from "../../components/MusicList";
import CarouselPlayAlbum from "./components/CarouselPlayAlbum";

import { TMusicList } from "../../components/MusicList/types";

import LikeSongTab from "./components/LikeSongTab";
import UploadTab from "./components/UploadTab";
import CarouselBoxCircle from "./components/CarouselBoxCircle";

import { list as listAlbum } from "../../apis/models/album/get_album";
import { list as listPlaylist } from "../../apis/models/playlist/get_playlist";
import { list as listSong } from "../../apis/models/song/get_song";

type TTabView = "likeSongTab" | "UploadTab";
type TAlbum = {
  name: String;
  imgUrl: String;
  url: String;
};

type TPlaylist = {
  name: String;
  imgUrl: String;
  clickHrefTo: String;
};
export default function MyMusic() {
  const [tab, setTab] = useState<TTabView>("likeSongTab");

  const [albums, setAlbums] = useState<TAlbum[]>();
  const [playlists, setPlaylists] = useState<TPlaylist[]>();
  const [songs, setSongs] = useState<TMusicList[]>();

  useEffect(() => {
    const initPlaylists = async () => {
      let playlists_ = await listPlaylist({ limit: 5, offset: 0 });
      playlists_ = playlists_.results;
      playlists_ = playlists_.map((item: any, index: any) => {
        return {
          name: item.name,
          imgUrl: "https://picsum.photos/301/200",
          clickHrefTo: `/playlist/${item.id}`,
        };
      });

      setPlaylists(playlists_);
      console.log("playlists", playlists_);
    };
    initPlaylists();
  }, []);
  useEffect(() => {
    const initAlbums = async () => {
      let albums_ = await listAlbum({ limit: 5, offset: 0 });
      albums_ = albums_.results;
      albums_ = albums_.map((item: any, index: any) => {
        return {
          name: item.name,
          imgUrl: "https://picsum.photos/301/200",
          url: `/album/${item.id}`,
        };
      });
      setAlbums(albums_);
      console.log("albums", albums_);
    };
    initAlbums();
  }, []);
  useEffect(() => {
    const initSongs = async () => {
      let songs_ = await listSong({ depth: 1 });
      songs_ = songs_.results;
      songs_ = songs_.map((item: any, index: any) => {
        return {
          id: item.id,
          imgUrl: "https://picsum.photos/100/100",
          name: item.name,
          artist: item?.artist && item.artist.map((item: any) => item.name).join("|"),
          album: item.album?.name,
          time: item.length,
          favorite: true,
          checkBoxStatus: false,
        } as TMusicList;
      });

      setSongs(songs_);
      console.log("songs", songs);
    };
    initSongs();
  }, []);
  const LikeSongTabWrap = () => {
    return <MusicList list={songs as TMusicList[]} />;
  };
  return (
    <Wrap>
      <Box>
        <Typography
          variant="h3"
          sx={{
            color: "text.primary",
          }}
        >
          Thư viện
        </Typography>
      </Box>
      <Box>
        <SectionTitle>Playlist</SectionTitle>
        {playlists ? <CarouselBoxCircle list={playlists} /> : <h1>Loading</h1>}
      </Box>
      <Box>
        <SectionTitle>Album</SectionTitle>
        {albums ? <CarouselPlayAlbum list={albums} /> : <h1>Loading</h1>}
      </Box>
      <Box>
        <SectionTitle>Bài hát</SectionTitle>
        <Box
          sx={{
            paddingBottom: "3rem",
          }}
        >
          <Button
            sx={
              tab == "likeSongTab"
                ? {
                    borderRadius: "100px",
                    padding: "0.3rem 2rem",
                    background: "#E8AC24",
                    color: "text.primary",
                  }
                : {
                    borderRadius: "100px",
                    padding: "0.3rem 2rem",
                  }
            }
            onClick={() => {
              setTab("likeSongTab");
            }}
          >
            Yêu thích
          </Button>
          <Button
            onClick={() => {
              setTab("uploadTab" as TTabView);
            }}
            sx={
              tab == ("uploadTab" as TTabView)
                ? {
                    borderRadius: "100px",
                    padding: "0.3rem 2rem",
                    background: "#E8AC24",
                    color: "text.primary",
                  }
                : {
                    borderRadius: "100px",
                    padding: "0.3rem 2rem",
                  }
            }
          >
            Đã tải lên
          </Button>
        </Box>
        {tab == ("likeSongTab" as TTabView) && <LikeSongTabWrap />}
        {tab == ("uploadTab" as TTabView) && <UploadTab />}
      </Box>
    </Wrap>
  );
}
