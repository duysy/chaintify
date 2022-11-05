import { Box, Stack, Button, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import styles from "./SideBar.module.css";
import {
  LibraryMusic,
  Album,
  AirlineStops,
  Bookmark,
  Add,
} from "@mui/icons-material";
export default function SideBar() {
  const router = useRouter();
  const listMenuTop = [
    {
      iconElement: <LibraryMusic />,
      title: "Cá nhân",
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
  const listMenuBottom = [
    {
      iconElement: <LibraryMusic />,
      title: "Nhạc mới",
      href: "/mymusic",
    },
    {
      iconElement: <Album />,
      title: "Thể Loại ",
      href: "/mymusic",
    },
    {
      iconElement: <AirlineStops />,
      title: "Top 100",
      href: "/mymusic",
    },
    {
      iconElement: <Bookmark />,
      title: "Mv",
      href: "/mymusic",
    },
  ];
  const ListLink = () => {
    return (
      <Stack spacing={2}>
        {listMenuTop.map((item, index) => {
          return (
            <Box
              className={styles.SideBar_link}
              key={item?.title}
              sx={{
                color: "text.primary",
              }}
              onClick={() => {
                router.push(item?.href);
              }}
            >
              <Box display="flex" sx={{ margin: "8px 0", padding: "0 15px" }}>
                <Box
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  sx={{ flex: 2 }}
                >
                  {item?.iconElement}
                </Box>
                <Box
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                  sx={{ flex: 10 }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      marginLeft: "1rem",
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    {item?.title}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    );
  };
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        borderRadius: "20px",
        // width: "fit-content",
        height: "100vh",
        padding: "60px 0",
      }}
    >
      <ListLink />
      <hr />
      <ListLink />
      <Button
        startIcon={<Add />}
        sx={{
          width: "100%",
          background: "#E8AC24",
          borderRadius: "15px",
          height: "2.5rem",
        }}
      >
        <Typography
          sx={{
            textTransform: "none",
            color: "text.primary",
          }}
        >
          Tạo playlist mới
        </Typography>
      </Button>
    </Box>
  );
}
