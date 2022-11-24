import * as React from "react";
import { useState, useEffect } from "react";
import { TextField, Dialog, Typography, Button, Box, Stack, TextareaAutosize, Autocomplete } from "@mui/material";

import { useRouter } from "next/router";

import { create as createFile } from "../../apis/file/post_file";
import { list as listAlbum } from "../../apis/models/album/get_album";
import { list as listArtist } from "../../apis/models/artist/get_artist";
import { create as createSongApi, TCreateSong } from "../../apis/models/song/post_song";
const style = {
  width: "500px",
  height: "auto",
  bgcolor: "background.default",
  boxShadow: 24,
  p: 3,
};
type Props = {
  open: boolean;
  setOpen: (state: boolean) => void;
};
export default function PopupMusicUpLoad(props: Props) {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [createSong, setCreateSong] = useState<TCreateSong | {}>({});

  const handleClosePopUp = () => props.setOpen(false);
  const handleTextFieldNameChange = (event: any) => {
    const name = event.target.value;
    const createSong_ = { ...createSong, ...{ name: name } };
    setCreateSong(createSong_);
  };

  const handleAutoCompleteAlbumChange = (event: any, value: any) => {
    if (!value) return;
    const album: Number = value.id;
    const createSong_ = { ...createSong, ...{ album: album } };
    setCreateSong(createSong_);
  };
  const handleAutoCompleteArtistChange = (event: any, value: any) => {
    if (!value) return;
    const artist: Number = value.id;

    const createSong_ = { ...createSong, ...{ artist: [artist] } };
    setCreateSong(createSong_);
  };
  const handleFileSelect = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSetPathFile = (path: String) => {
    const createSong_ = { ...createSong, ...{ path: path } };
    setCreateSong(createSong_);
  };

  const handleTextFieldLyricsChange = (event: any) => {
    const lyrics = event.target.value;
    const createSong_ = { ...createSong, ...{ lyrics: lyrics } };
    setCreateSong(createSong_);
  };

  const handleSubmit = async () => {
    const addMore = {
      length: 1,
      track: 1,
      disc: 1,
      mtime: 1,
    };
    const createSong_ = { ...createSong, ...addMore };
    console.log(createSong_);

    const response = await createSongApi(createSong_ as TCreateSong);
    if (response) {
      alert("Up load success new song");
    }
    handleClosePopUp()
  };
  useEffect(() => {
    const autoUploadFile = async () => {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("file_uploaded", selectedFile);

      const response = await createFile({ formData: formData });
      if (response) {
        alert("Success");
        const path = response.name;
        console.log(path);
        handleSetPathFile(path);
      } else {
        alert("Fail");
      }
    };
    autoUploadFile();
  }, [selectedFile]);

  useEffect(() => {
    const initAlbums = async () => {
      let albums_ = await listAlbum({});
      albums_ = albums_.results;
      albums_ = albums_.map((item: any, index: any) => {
        return {
          id: item.id,
          name: item.name,
        };
      });

      setAlbums(albums_);
      console.log("albums", albums_);
    };
    initAlbums();
  }, []);
  useEffect(() => {
    const initAlbums = async () => {
      let artists_ = await listArtist({});
      artists_ = artists_.results;
      artists_ = artists_.map((item: any, index: any) => {
        return {
          id: item.id,
          name: item.name,
        };
      });

      setArtists(artists_);
      console.log("artists", artists_);
    };
    initAlbums();
  }, []);

  return (
    <Dialog onClose={handleClosePopUp} open={props.open} sx={{ zIndex: 200000 }}>
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
          onClick={handleClosePopUp}
        >
          Close
        </Button>
        <Typography
          variant="h6"
          sx={{
            color: "text.primary",
          }}
        >
          Upload nhạc
        </Typography>
        <Stack
          spacing={3}
          direction="column"
          sx={{
            color: "text.primary",
          }}
        >
          <TextField label="Name" variant="standard" onChange={handleTextFieldNameChange} />
          {albums && (
            <Autocomplete
              disablePortal
              onChange={handleAutoCompleteAlbumChange}
              options={albums.map((option: any) => ({
                label: option.name,
                id: option.id,
              }))}
              renderInput={(params) => <TextField {...params} label="Album" variant="standard" />}
            />
          )}
          {artists && (
            <Autocomplete
              disablePortal
              onChange={handleAutoCompleteArtistChange}
              options={artists.map((option: any) => ({
                label: option.name,
                id: option.id,
              }))}
              renderInput={(params) => <TextField {...params} label="Artist" variant="standard" />}
            />
          )}
          <TextField name="file_uploaded" type="file" onChange={handleFileSelect} />
          <TextareaAutosize onChange={handleTextFieldLyricsChange} aria-label="empty textarea" placeholder="Lyrics" style={{ width: "100%", height: "10rem" }} />
          <Button type="button" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
}

const dataSearch: any = [
  { name: "The Shawshank Redemption", id: 1994 },
  { name: "The Godfather", id: 1972 },
  { name: "The Godfather: Part II", id: 1974 },
  { name: "The Dark Knight", id: 2008 },
  { name: "12 Angry Men", id: 1957 },
  { name: "Schindler's List", id: 1993 },
  { name: "Pulp Fiction", id: 1994 },
];
