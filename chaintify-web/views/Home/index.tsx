import { Grid, Stack, Container, Box, Typography } from "@mui/material";
import Slide from "../../components/Slide";
import Image from "next/image";
import Wrap from "../wrap";
import SectionTitle from "../../components/SectionTitle";
import CarouselBasic from "../../components/CarouselPlayBasic";
export default function Home() {
  const recently = [
    {
      name: "Top chart",
      imgUrl: "https://picsum.photos/301/200",
      url: "artist",
    },
    {
      name: "Top chart",
      imgUrl: "https://picsum.photos/302/200",
      url: "artist",
    },
    {
      name: "Top chart",
      imgUrl: "https://picsum.photos/303/200",
      url: "artist",
    },
    {
      name: "Top chart",
      imgUrl: "https://picsum.photos/304/200",
      url: "artist",
    },
    {
      name: "Top chart",
      imgUrl: "https://picsum.photos/305/200",
      url: "artist",
    },
    {
      name: "Top chart",
      imgUrl: "https://picsum.photos/306/200",
      url: "artist",
    },
  ];
  const news = [...recently];
  const albums = [...recently];
  return (
    <Wrap>
      <Slide />
      <Box>
        <SectionTitle>Gần đây</SectionTitle>
        <CarouselBasic list={recently} />
      </Box>
      <Box>
        <SectionTitle>Mới phát hành</SectionTitle>
        <Grid container spacing={2}>
          {news.map((item, index) => {
            return (
              <Grid item xs={6} md={4} key={index}>
                <Box
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                  sx={{
                    padding: "10px",
                    width: "100%",
                    background: "rgba(255, 255, 255, 0.15)",
                    boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(5px)",
                    /* Note: backdrop-filter has minimal browser support */
                    borderRadius: "15px",
                  }}
                >
                  <Image
                    src={item.imgUrl}
                    alt="Picture of the author"
                    width={65}
                    height={65}
                    style={{
                      borderRadius: "15px",
                    }}
                  />
                  <Box
                    sx={{
                      marginLeft: "1rem",
                    }}
                  >
                    <Typography variant="subtitle1">Matias Bagato</Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      Untitled C
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      1 giờ trước
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box>
        <SectionTitle>Album</SectionTitle>
        <CarouselBasic list={albums} />
      </Box>
    </Wrap>
  );
}
