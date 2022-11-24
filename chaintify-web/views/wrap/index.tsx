import TextButtons from "../../components/TextButtons";
import { Grid, Stack, Container, Box } from "@mui/material";
import SideBar from "../../components/SideBar";
import TopNav from "../../components/TopNav";
import Slide from "../../components/Slide";
import Image from "next/image";
import MusicPlayerContextProvider, { useMusicPlayer } from "../../contexts/useMusicPlayer";
import MusicPlay from "../../components/MusicPlayer";
export default function Wrap(props: any) {
  const { hidden } = useMusicPlayer();
  return (
    <Grid
      container
      spacing={0}
      rowSpacing={0}
      sx={{
        bgcolor: "#1D2123",
        height: "100vh",
        width: "100%",
      }}
    >
      <Grid item xs={2} sx={{ height: "8%" }}>
        LOGO
      </Grid>
      <Grid item xs={10} sx={{ height: "8%" }}>
        <TopNav />
      </Grid>
      <Grid item xs={2} sx={{ height: `calc(100% - ${hidden ? 8 : 15 + 8}%)` }}>
        <SideBar />
      </Grid>
      <Grid item xs={10} sx={{ height: `calc(100% - ${hidden ? 8 : 15 + 8}%)`, overflowY: "scroll", padding: "0 2rem" }}>
        <Box sx={{ padding: "0 2rem" }}>{props.children}</Box>
      </Grid>
      <Grid item xs={12} sx={{ height: "15%", display: hidden && "none" }}>
        {/* <MusicPlayerContextProvider>
          <MusicPlay />
        </MusicPlayerContextProvider> */}
      </Grid>
    </Grid>
  );
}
