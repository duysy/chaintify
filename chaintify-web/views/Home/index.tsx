import { Grid, Stack, Container, Box, Typography } from "@mui/material";
import { useState } from "react";
import Slide from "../../components/Slide";
import Image from "next/image";
import Wrap from "../wrap";
import SectionTitle from "../../components/SectionTitle";
import CarouselBasic from "../../components/CarouselPlayBasic";
import {  listPublic as listPublicPublic} from "../../apis/models/album/get_album";
import { list as listSong } from "../../apis/models/song/get_song";
import { useQuery } from "react-query";
import config from "../../config";
import { TCarouselPlayBasic } from "../../components/CarouselPlayBasic";
import NewBoxList from "./components/NewListBox";
import { TNewBoxList } from "./components/NewListBox";
export default function Home() {
  const [albums, setAlbums] = useState<TCarouselPlayBasic[]>([]);
  const [songs, setSongs] = useState<TNewBoxList[]>([]);
  const queryAlbum = useQuery(
    ["listPublicPublic_0_5_0"],
    async () => {
      return await listPublicPublic({ depth: 0, limit: 5, offset: 0 });
    },
    {
      onSuccess: (data) => {
        let albums = data.results.map((item: any, index: any) => {
          return {
            name: item.name,
            cover: `${config.baseMedia}${item.cover}`,
            clickHrefTo: `/album/${item.id}`,
          } as TCarouselPlayBasic;
        });
        setAlbums(albums);
      },
    }
  );
  const querySong = useQuery(
    ["listAlbum_1_6_0"],
    async () => {
      return await listSong({ depth: 1, limit: 6, offset: 0 });
    },
    {
      onSuccess: (data) => {
        let songs = data.results.map((item: any, index: any) => {
          const dateNow = Date.now();
          const updated_at = new Date(item.updated_at).getTime();
          let datetime = (Math.abs(dateNow - updated_at) / 3600000).toFixed(0);
          datetime = +datetime < 1 ? "Vài phút trước" : `${datetime} giờ trước`;
          return {
            id: item.id,
            cover: `${config.baseMedia}${item.cover}`,
            name: item.name,
            artist: item?.artist && item.artist.map((item: any) => item.name).join("|"),
            updated_at: datetime,
          } as TNewBoxList;
        });
        setSongs(songs);
      },
    }
  );
  return (
    <Wrap>
      <Slide />
      <Box>
        <SectionTitle>Gần đây</SectionTitle>
        <CarouselBasic list={albums} />
      </Box>
      <Box>
        <SectionTitle>Mới phát hành</SectionTitle>
        <NewBoxList list={songs} />
      </Box>
      <Box>
        <SectionTitle>Album</SectionTitle>
        <CarouselBasic list={albums} />
      </Box>
    </Wrap>
  );
}
