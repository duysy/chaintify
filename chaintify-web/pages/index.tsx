import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TopNav from "../components/TopNav";
import Slide from "../components/Slide";
import common from "../apis/models/common";
import React, { useEffect } from "react";
import {list as listAlbum } from "../apis/models/album/get_album";
import MusicList from "../components/MusicList";
import { Autocomplete, TextField } from "@mui/material";
type TSong = {
  imgUrl: "https://picsum.photos/100/100";
  name: String;
  artist: String;
  time: String;
  favorite: Boolean;
};
export default function Home() {
  useEffect(() => {
    const load = async () => {
      const res = await listAlbum({});
      console.log(res.results);
    };
    load();
  }, []);
  const data: TSong[] = [
    {
      imgUrl: "https://picsum.photos/100/100",
      name: "String",
      artist: "String",
      time: "String",
      favorite: true,
    },
    {
      imgUrl: "https://picsum.photos/100/100",
      name: "String",
      artist: "String",
      time: "String",
      favorite: true,
    },
    {
      imgUrl: "https://picsum.photos/100/100",
      name: "String",
      artist: "String",
      time: "String",
      favorite: true,
    },
  ];
  return (
    <>
      {/* <MusicList list={data as TSong[]} /> */}
      <Autocomplete sx={{ zIndex: 1000000000 }} {...flatProps} id="flat-demo" renderInput={(params) => <TextField {...params} sx={{ zIndex: 1000000000 }} label="flat" variant="standard" />} />
    </>
  );
}
const top100Films: any = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];
const flatProps = {
  options: top100Films.map((option: any) => option.title),
};
