import React from "react";
import styles from "./CarouselBoxCircle.module.css";

import { Favorite, MoreVert, Shuffle, FilterDrama } from "@mui/icons-material";
import { Grid, Stack, Container, Box, Typography, Checkbox } from "@mui/material";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useMusicPlayer } from "../../../../contexts/useMusicPlayer";

type TProps = {
  list: TPlaylist[];
};

type TPlaylist = {
  name: String;
  imgUrl: String;
  clickHrefTo: String;
};

export default function CarouselBoxCircle(props: TProps) {
  const list = props.list;
  const router = useRouter();
  const { play, pause, isPlay } = useMusicPlayer();
  const handelOnClick = (to: String) => {
    if (!to) return;
    router.push(to.toString());
  };
  return (
    <Stack direction="row" spacing={3}>
      {list.map((item: any, index: any) => {
        return (
          <Box
            key={index}
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: 150,
              height: 200,
            }}
            onClick={() => {
              handelOnClick(item.clickHrefTo);
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                position: "absolute",
                top: 120,
                right: 5,
                color: "black",
                bgcolor: "background.paper",
                borderRadius: "1000px",
                padding: "5px",
              }}
            >
              <Shuffle
                sx={{
                  color: "text.primary",
                }}
              />
            </Box>
            <Image
              src={item.imgUrl}
              alt="Picture of the author"
              width={150}
              height={150}
              style={{
                borderRadius: "1000px",
              }}
            />
            <Typography
              sx={{
                color: "text.primary",
                marginTop: "10px",
              }}
            >
              {item.name}
            </Typography>
          </Box>
        );
      })}
    </Stack>
  );
}
