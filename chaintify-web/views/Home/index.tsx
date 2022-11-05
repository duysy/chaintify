import { Grid, Stack, Container, Box, Typography } from "@mui/material";
import Slide from "../../components/Slide";
import Image from "next/image";
import Wrap from "../wrap";
import SectionTitle from "../../components/SectionTitle";
import CarouselBasic from "../../components/CarouselBasic";
export default function Home() {
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
  return (
    <Wrap>
      <Slide />
      <Box>
        <SectionTitle>Gần đây</SectionTitle>
        <CarouselBasic list={history} />
      </Box>
      <Box>
        <SectionTitle>Mới phát hành</SectionTitle>
        <Grid container spacing={2}>
          {history.map((item, index) => {
            return (
              <Grid item xs={6} md={4}>
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
                    <nav
                      style={{
                        fontFamily: "Ubuntu",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "1.2rem",
                        lineHeight: "18px",
                      }}
                    >
                      Matias Bagato
                    </nav>
                    <nav
                      style={{
                        fontFamily: "Ubuntu",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        color: "rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      Untitled C
                    </nav>
                    <nav
                      style={{
                        fontFamily: "Ubuntu",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        color: "rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      1 giờ trước
                    </nav>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box>
        <SectionTitle>Album</SectionTitle>
        <CarouselBasic list={history} />
      </Box>
    </Wrap>
  );
}
