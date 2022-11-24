import * as React from "react";
import { useState } from "react";
import { TextField, Dialog, Checkbox, Typography, Button, Box, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { create as createPlayList } from "../../apis/models/playlist/post_playlist";
const style = {
  width: 300,
  height: 300,
  bgcolor: "background.default",
  boxShadow: 24,
  p: 4,
};
type Props = {
  open: boolean;
  setOpen: (state: boolean) => void;
};
export default function PopupCreatePlaylist(props: Props) {
  const router = useRouter();
  const [playListName, setPlayListName] = useState<String | null>(null);
  const [playListDescription, setPlayListDescription] = useState<String | null>(null);
  const handleClose = () => props.setOpen(false);
  const handlePost = async () => {
    if (!playListName || !playListDescription) return;
    const res = await createPlayList({
      name: playListName,
      description: playListDescription,
    });
    if (res) {
      console.log("createPlayList", res);
      router.push(`/playlist/${res.id}`);
      handleClose();
    }
  };
  const handleTextFieldNameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const playListName_ = event.target.value;
    if (!playListName_) return;
    // console.log(playListName_);
    setPlayListName(playListName_);
  };

  const handleTextFieldDescriptionChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const setPlayListDescription_ = event.target.value;
    if (!setPlayListDescription_) return;
    // console.log(setPlayListDescription_);
    setPlayListDescription(setPlayListDescription_);
  };

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
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            // alignItems="center"
            sx={{ height: "100%" }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "text.primary",
              }}
            >
              Tạo playlist mới
            </Typography>
            <TextField id="standard-basic" label="Name" variant="standard" onChange={handleTextFieldNameChange} />
            <TextField id="standard-basic" label="Description" variant="standard" onChange={handleTextFieldDescriptionChange} />
            <Stack direction="row">
              <Checkbox defaultChecked />
              <Typography variant="inherit">Mọi người có thể truy cập playlist này</Typography>
            </Stack>

            <Button onClick={handlePost}>Tạo mới</Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
