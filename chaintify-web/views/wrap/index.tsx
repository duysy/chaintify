import TextButtons from "../../components/TextButtons";
import { Grid, Stack, Container, Box } from "@mui/material";
import SideBar from "../../components/SideBar";
import TopNav from "../../components/TopNav";
import Slide from "../../components/Slide";
import Image from "next/image";
export default function Wrap(props: any) {
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: "20px 0",
        bgcolor: "#1D2123",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={2}>
          LOGO
        </Grid>
        <Grid item xs={10}>
          <TopNav />
        </Grid>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10}>
          {props.children}
        </Grid>
      </Grid>
    </Container>
  );
}
