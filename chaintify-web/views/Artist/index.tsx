import React, { useEffect, useState } from "react";
import { Box, Typography, Stack, Button, Grid, Checkbox } from "@mui/material";
import Image from "next/image";
import Wrap from "../wrap";
import SectionTitle from "../../components/SectionTitle";
import { list as listSong } from "../../apis/models/song/get_song";
import MusicList from "../../components/MusicList";
import { TMusicList } from "../../components/MusicList/types";
export default function Artist() {
  const [songs, setSongs] = useState<TMusicList[]>();
  useEffect(() => {
    const initSongs = async () => {
      let songs_ = await listSong({});
      songs_ = songs_.results;
      songs_ = songs_.map((item: any, index: any) => {
        return {
          id: item.id,
          checkBoxStatus: false,
          name: item.name,
          cover: "https://picsum.photos/100/100",
          artist: "African giant",
          album: "Album",
          time: item.length,
          favorite: true,
        } as TMusicList;
      });

      setSongs(songs_);
      console.log("songs", songs);
    };
    initSongs();
  }, []);
  return (
    <Wrap>
      <Box display="flex">
        <Box display="flex" flexDirection="column" justifyContent="space-around" sx={{ flex: 3 }}>
          <Typography
            variant="h4"
            sx={{
              color: "text.primary",
            }}
          >
            BLACKPINK
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "text.primary",
            }}
          >
            BLACKPINK là nhóm nhạc nữ Hàn Quốc 4 thành viên đến từ công ty YG Entertainment. Debut vào năm 2016, nhóm nổi tiếng và trở thành một trong
            những nhóm nhạc KPop thành công nhất... XEM THÊM
          </Typography>
          <Stack direction="row" spacing={5}>
            <Button
              sx={{
                background: "rgba(255, 198, 27, 0.85)",
                border: "1px solid #FFFFFF",
                borderRadius: " 25px",
                color: "text.primary",
                padding: "0 10px",
              }}
            >
              PHÁT NHẠC
            </Button>
            <Typography
              variant="h6"
              sx={{
                border: "1px solid #FFFFFF",
                borderRadius: " 25px",
                color: "text.primary",
                padding: "0 10px",
              }}
            >
              Đã quan tâm:2000
            </Typography>
          </Stack>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            flex: 2,
          }}
        >
          <Image
            src="https://picsum.photos/500/500"
            alt="Picture of the author"
            width={300}
            height={300}
            style={{
              borderRadius: "1000px",
              objectFit: "cover"
            }}
          />
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        sx={{
          background: "#33373B",
          borderRadius: "20px",
          padding: "0 20px",
          margin: "3rem 0",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "text.primary",
          }}
        >
          TỔNG QUAN
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "text.primary",
          }}
        >
          BÀI HÁT
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "text.primary",
          }}
        >
          SIGNER
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "text.primary",
          }}
        >
          ALBUM
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "text.primary",
          }}
        >
          MV
        </Typography>
      </Box>
      <Box>
        <SectionTitle>Danh sách bài hát</SectionTitle>
        {songs && <MusicList list={songs as TMusicList[]} />}
      </Box>
    </Wrap>
  );
}
