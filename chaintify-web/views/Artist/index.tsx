import React, { useEffect, useState } from "react";
import { Box, Typography, Stack, Button, Grid, Checkbox } from "@mui/material";
import { Favorite, MoreVert, Shuffle } from "@mui/icons-material";
import Image from "next/image";
import Wrap from "../wrap";
import SectionTitle from "../../components/SectionTitle";
import { list as listSong } from "../../apis/models/song/get_song";
import MusicList from "../../components/MusicList";
type TSong = {
  id: Number;
  imgUrl: "https://picsum.photos/100/100";
  name: String;
  artist: String;
  time: String;
  favorite: Boolean;
};

export default function Artist() {
  const [songs, setSongs] = useState<TSong[]>();
  useEffect(() => {
    const initSongs = async () => {
      let songs_ = await listSong({});
      songs_ = songs_.results;
      songs_ = songs_.map((item: any, index: any) => {
        return {
          id: item.id,
          imgUrl: "https://picsum.photos/100/100",
          name: item.name,
          artist: "African giant",
          time: item.length,
          favorite: true,
        } as TSong;
      });

      setSongs(songs_);
      console.log("songs", songs);
    };
    initSongs();
  }, []);
  // const songs = [
  //   {
  //     imgUrl: "https://picsum.photos/100/100",
  //     song: "Watin man go do ~ Burna",
  //     artist: "African giant",
  //     time: "4:17",
  //   },
  //   {
  //     imgUrl: "https://picsum.photos/100/100",
  //     song: "Stand strong ~ Davido",
  //     artist: "Single",
  //     time: "4:17",
  //   },
  //   {
  //     imgUrl: "https://picsum.photos/100/100",
  //     song: "Closa ~ Ybee",
  //     artist: "Obi datti",
  //     time: "4:17",
  //   },
  //   {
  //     imgUrl: "https://picsum.photos/100/100",
  //     song: "Let me love you ~ Krisx",
  //     artist: "Single",
  //     time: "4:17",
  //   },
  //   {
  //     imgUrl: "https://picsum.photos/100/100",
  //     song: "Let me love you ~ Krisx",
  //     artist: "Single",
  //     time: "4:17",
  //   },
  // ];
  // const Like = () => {
  //   return (
  //     <Stack spacing={1}>
  //       {songs.map((item, index) => {
  //         return (
  //           <Box
  //             key={index}
  //             sx={{
  //               backdropFilter: "blur(5px)",
  //               borderRadius: "15px",
  //               background: "rgba(51, 55, 59, 0.37)",
  //               padding: "5px",
  //             }}
  //           >
  //             <Grid container spacing={0} key={index}>
  //               <Grid
  //                 item
  //                 xs={1}
  //                 sx={{
  //                   display: "flex",
  //                   justifyContent: "start",
  //                   alignItems: "center",
  //                   color: "text.primary",
  //                 }}
  //               >
  //                 <Checkbox />
  //               </Grid>
  //               <Grid
  //                 item
  //                 xs={1}
  //                 sx={{
  //                   display: "flex",
  //                   justifyContent: "start",
  //                   alignItems: "center",
  //                   color: "text.primary",
  //                 }}
  //               >
  //                 <Image
  //                   src={item.imgUrl}
  //                   alt="Picture of the author"
  //                   width={40}
  //                   height={40}
  //                   style={{
  //                     borderRadius: "1px",
  //                   }}
  //                 />
  //               </Grid>
  //               <Grid
  //                 item
  //                 xs={3}
  //                 sx={{
  //                   display: "flex",
  //                   justifyContent: "start",
  //                   alignItems: "center",
  //                   color: "text.primary",
  //                 }}
  //               >
  //                 {item.song}
  //               </Grid>
  //               <Grid
  //                 item
  //                 xs={3}
  //                 sx={{
  //                   display: "flex",
  //                   justifyContent: "center",
  //                   alignItems: "center",
  //                   color: "text.primary",
  //                 }}
  //               >
  //                 {item.artist}
  //               </Grid>
  //               <Grid
  //                 item
  //                 xs={3}
  //                 sx={{
  //                   display: "flex",
  //                   justifyContent: "center",
  //                   alignItems: "center",
  //                   color: "text.primary",
  //                 }}
  //               >
  //                 {item.time}
  //               </Grid>
  //               <Grid
  //                 item
  //                 xs={1}
  //                 sx={{
  //                   display: "flex",
  //                   justifyContent: "end",
  //                   alignItems: "center",
  //                   color: "text.primary",
  //                 }}
  //               >
  //                 <Favorite />
  //                 <MoreVert />
  //               </Grid>
  //             </Grid>
  //           </Box>
  //         );
  //       })}
  //     </Stack>
  //   );
  // };
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
            BLACKPINK là nhóm nhạc nữ Hàn Quốc 4 thành viên đến từ công ty YG Entertainment. Debut vào năm 2016, nhóm nổi tiếng và trở thành một trong những nhóm nhạc KPop thành công nhất... XEM THÊM
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
        {songs && <MusicList list={songs} />}
      </Box>
    </Wrap>
  );
}
