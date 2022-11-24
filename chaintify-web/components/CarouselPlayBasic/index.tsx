import React from "react";
import { Grid, Stack, Container, Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PlayCircle, PauseCircle } from "@mui/icons-material";
import styles from "./CarouselPlayBasic.module.css";
import { useMusicPlayer } from "../../contexts/useMusicPlayer";
export default function CarouselPlayBasic(props: any) {
  const list = props.list;
  const router = useRouter();
  const { play, pause, isPlay } = useMusicPlayer();
  return (
    <Stack direction="row" spacing={3}>
      {list.map((item: any, index: any) => {
        return (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              width: 150,
              height: 200,
            }}
            onClick={(event) => {
              event.stopPropagation();
              console.log("card click");
              router.push(item.url);
            }}
          >
            <Box position="relative" className={styles.card}>
              <Box
                className={styles.playClass}
                position="absolute"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  borderRadius: "20px",
                  width: "150px",
                  height: "150px",
                }}
              >
                {isPlay ? (
                  <PauseCircle
                    sx={{
                      fontSize: "2.5rem",
                    }}
                    onClick={(event) => {
                      event.stopPropagation();
                      console.log("Play icon click");
                      pause();
                    }}
                  />
                ) : (
                  <PlayCircle
                    sx={{
                      fontSize: "2.5rem",
                    }}
                    onClick={(event) => {
                      event.stopPropagation();
                      console.log("pause icon click");

                      play();
                    }}
                  />
                )}
              </Box>
              <Image
                src={item.imgUrl}
                alt="Picture of the author"
                width={150}
                height={150}
                style={{
                  borderRadius: "20px",
                }}
              />
            </Box>
            <nav
              style={{
                color: "#FFFFFF",
              }}
            >
              {item.name}
            </nav>
          </Box>
        );
      })}
    </Stack>
  );
}
