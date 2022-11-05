import React from "react";
import { useState } from "react";
import Wrap from "../wrap";
import { Box, Typography, Stack, Grid, Checkbox, Button } from "@mui/material";
import { Favorite, MoreVert, Shuffle } from "@mui/icons-material";
import Image from "next/image";
import SectionTitle from "../../components/SectionTitle";
import CarouselBasic from "../../components/CarouselBasic";
export default function MyMusic() {
  const [tab, setTab] = useState("like");
  const history = [
    {
      title: "Top chart",
      imgUrl: "https://picsum.photos/301/200",
    },
    {
      title: "Top chart",
      imgUrl: "https://picsum.photos/302/200",
    },
    {
      title: "Top chart",
      imgUrl: "https://picsum.photos/303/200",
    },
    {
      title: "Top chart",
      imgUrl: "https://picsum.photos/304/200",
    },
    {
      title: "Top chart",
      imgUrl: "https://picsum.photos/305/200",
    },
    {
      title: "Top chart",
      imgUrl: "https://picsum.photos/306/200",
    },
  ];
  const songs = [
    {
      imgUrl: "https://picsum.photos/100/100",
      song: "Watin man go do ~ Burna",
      singer: "African giant",
      time: "4:17",
    },
    {
      imgUrl: "https://picsum.photos/100/100",
      song: "Stand strong ~ Davido",
      singer: "Single",
      time: "4:17",
    },
    {
      imgUrl: "https://picsum.photos/100/100",
      song: "Closa ~ Ybee",
      singer: "Obi datti",
      time: "4:17",
    },
    {
      imgUrl: "https://picsum.photos/100/100",
      song: "Let me love you ~ Krisx",
      singer: "Single",
      time: "4:17",
    },
    {
      imgUrl: "https://picsum.photos/100/100",
      song: "Let me love you ~ Krisx",
      singer: "Single",
      time: "4:17",
    },
  ];
  const Like = () => {
    return (
      <Stack spacing={1}>
        {songs.map((item, index) => {
          return (
            <Box
              sx={{
                backdropFilter: "blur(5px)",
                borderRadius: "15px",
                background: "rgba(51, 55, 59, 0.37)",
                padding: "5px",
              }}
            >
              <Grid container spacing={0} key={index}>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    color: "text.primary",
                  }}
                >
                  <Checkbox />
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    color: "text.primary",
                  }}
                >
                  <Image
                    src={item.imgUrl}
                    alt="Picture of the author"
                    width={40}
                    height={40}
                    style={{
                      borderRadius: "1px",
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={3}
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    color: "text.primary",
                  }}
                >
                  {item.song}
                </Grid>
                <Grid
                  item
                  xs={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "text.primary",
                  }}
                >
                  {item.singer}
                </Grid>
                <Grid
                  item
                  xs={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "text.primary",
                  }}
                >
                  {item.time}
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    color: "text.primary",
                  }}
                >
                  <Favorite />
                  <MoreVert />
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Stack>
    );
  };
  const Upload = () => {
    return <Box>Bạn chưa có bào nào trong thư viện</Box>;
  };
  return (
    <Wrap>
      <Box>
        <SectionTitle>Thư viện</SectionTitle>
        <Stack direction="row" spacing={3}>
          {history.map((item, index) => {
            return (
              <Box
                position="relative"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: 150,
                  height: 200,
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
                    bgcolor: "text.primary",
                    borderRadius: "1000px",
                    padding: "5px",
                  }}
                >
                  <Shuffle />
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
                <nav
                  style={{
                    color: "#FFFFFF",
                    marginTop: "10px",
                  }}
                >
                  {item.title}
                </nav>
              </Box>
            );
          })}
        </Stack>
      </Box>
      <Box>
        <SectionTitle>Playlist</SectionTitle>
        <CarouselBasic list={history} />
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
              tab == "like"
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
              setTab("like");
            }}
          >
            Yêu thích
          </Button>
          <Button
            onClick={() => {
              setTab("upload");
            }}
            sx={
              tab == "upload"
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
        {tab == "like" && <Like />}
        {tab == "upload" && <Upload />}
      </Box>
    </Wrap>
  );
}
