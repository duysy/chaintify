import * as React from "react";
import { useState, useEffect } from "react";
import { TextField, Dialog, Checkbox, Typography, Button, Box, Stack, Autocomplete, Alert } from "@mui/material";

import { useRouter } from "next/router";
import { list as listPlaylist } from "../../apis/models/playlist/get_playlist";
import { update as updatePlaylist, TUpdate } from "../../apis/models/playlist/put_playlist";
const style = {
  width: 400,
  minHeight: 400,
  bgcolor: "background.default",
  boxShadow: 24,
  p: 4,
};
type Props = {
  open: boolean;
  setOpen: (state: boolean) => void;
  listSong: any[];
};
export default function PopupAddMusicToPlaylist(props: Props) {
  const [playlists, setPlaylists] = useState([]);
  const [statusAdd, setStatusAdd] = useState("");
  const handleClose = () => props.setOpen(false);
  const handlePost = async (value: any) => {
    const label: any = value.label;
    const idPlayList: any = value.id;

    const listSong = props.listSong;
    const playlist_: TUpdate = { name: label, song: [...listSong] };

    console.log(idPlayList, value);

    const res = await updatePlaylist(+idPlayList, playlist_);
    if (res) {
      setStatusAdd("SUCCESS");
    }

    setTimeout(() => {
      handleClose();
    }, 1000);
  };
  useEffect(() => {
    const initPlaylists = async () => {
      let playlists_ = await listPlaylist({});
      playlists_ = playlists_.results;
      playlists_ = playlists_.map((item: any, index: any) => {
        return {
          name: item.name,
          id: item.id,
        };
      });
      setPlaylists(playlists_);
      // console.log("playlists", playlists_);
    };
    initPlaylists();
  }, [props.open]);
  return (
    <div>
      <Dialog onClose={handleClose} open={props.open}>
        <Box
          sx={style}
          style={{
            position: "relative",
          }}
        >
          <Button
            style={{
              position: "absolute",
              right: 0,
              top: 0,
            }}
            onClick={handleClose}
          >
            Close
          </Button>
          <Stack direction="column" spacing={3}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "text.primary",
              }}
            >
              Thêm nhạc đã chọn vào playlist
            </Typography>

            <Autocomplete
              disablePortal
              options={playlists.map((option: any) => ({
                id: option.id,
                label: option.name,
              }))}
              onChange={(e, value: any) => {
                handlePost(value);
              }}
              renderInput={(params) => {
                return <TextField {...params} label="PlayList Search" variant="standard" />;
              }}
            />
            {statusAdd != "" && <Alert severity="warning"> {statusAdd}</Alert>}
          </Stack>
        </Box>
      </Dialog>
    </div>
  );
}
