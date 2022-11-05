import React from "react";
import { Grid, Box, TextField, Paper, Stack, Button } from "@mui/material";
import {
  NavigateBefore,
  NavigateNext,
  CloudUpload,
  Search,
  Settings,
  Person,
} from "@mui/icons-material";
import styles from "./TopNav.module.css";
export default function TopNav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={1}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            sx={{ height: "100%" }}
          >
            <NavigateBefore
              sx={{
                color: "text.primary",
                fontSize: "2rem",
              }}
            />
            <NavigateNext
              sx={{
                color: "text.primary",
                fontSize: "2rem",
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            sx={{ height: "100%" }}
            style={{
              position: "relative",
            }}
          >
            <TextField
              type="text"
              className={styles.searchInput}
              placeholder="Tìm kiếm bài hát, nghệ sỹ..."
              sx={{
                "& fieldset": { border: "none" },
              }}
            />
            <Search
              sx={{
                top: 0,
                left: 10,
                position: "absolute",
                height: "100%",
                color: "text.primary",
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="end"
            sx={{ height: "100%" }}
          >
            <Box
              className={styles.circle}
              sx={{ bgcolor: "background.default" }}
            >
              <CloudUpload
                sx={{
                  color: "text.primary",
                }}
              />
            </Box>
            <Box
              className={styles.circle}
              sx={{ bgcolor: "background.default" }}
            >
              <Settings
                sx={{
                  color: "text.primary",
                }}
              />
            </Box>
            <Box
              className={styles.circle}
              sx={{ bgcolor: "background.default" }}
            >
              <Person
                sx={{
                  color: "text.primary",
                }}
              />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
