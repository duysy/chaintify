import { Box, Stack, Button, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import { useMusicPlayer } from "../../contexts/useMusicPlayer";
import styles from "./SideBar.module.css";
import PopupCreatePlaylist from "../popups/PopupCreatePlaylist";
import { LibraryMusic, Album, AirlineStops, Bookmark, Add } from "@mui/icons-material";
export default function SideBar() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const listMenuTop = [
    {
      iconElement: <LibraryMusic />,
      title: "Cá Nhân",
      href: "/mymusic",
    },
    {
      iconElement: <Album />,
      title: "Khám Phá",
      href: "/home",
    },
    {
      iconElement: <AirlineStops />,
      title: "Trending",
      href: "/mymusic",
    },
    {
      iconElement: <Bookmark />,
      title: "Theo Dõi",
      href: "/mymusic",
    },
  ];
  const ListLink = () => {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        sx={{
          height: "100%",
          boxSizing: "box-sizing",
          padding: "0",
        }}
      >
        {listMenuTop.map((item, index) => {
          return (
            <Box
              className={styles.SideBar_link}
              key={item?.title}
              sx={{
                color: "text.primary",
                "&:hover": {
                  bgcolor: "background.paper",
                  borderLeft: "2px solid #E8AC24",
                },
              }}
              onClick={() => {
                router.push(item?.href);
              }}
            >
              {item?.iconElement}
              <Typography
                variant="button"
                sx={{
                  marginLeft: "0.5rem",
                  display: { xs: "none", sm: "block" },
                  fontWeight: "500",
                }}
              >
                {item?.title}
              </Typography>
            </Box>
          );
        })}
      </Box>
    );
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      sx={{
        bgcolor: "background.default",
        borderRadius: "20px",
        height: "100%",
        padding: "1rem 0",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <ListLink />
      </Box>
      <hr
        style={{
          margin: "1rem",
        }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <ListLink />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "3rem", width: "100%" }}
        onClick={() => {
          console.log("Create Playlist");
          setOpen(true);
        }}
      >
        <Button
          sx={{
            width: "80%",
            background: "#E8AC24",
            borderRadius: "15px",
            height: "2.5rem",
            color: "text.primary",
          }}
        >
          <>
            <Add />
            <Typography
              sx={{
                textTransform: "none",
                display: { xs: "none", sm: "block" },
              }}
            >
              Tạo playlist mới
            </Typography>
          </>
        </Button>
      </Box>
      <>
        <PopupCreatePlaylist open={open} setOpen={setOpen} />
      </>
    </Box>
  );
}
