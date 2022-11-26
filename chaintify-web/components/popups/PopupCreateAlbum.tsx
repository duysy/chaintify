import * as React from "react";
import { useState, useEffect } from "react";
import { TextField, Dialog, Typography, Button, Box, Stack, TextareaAutosize, Autocomplete, Chip, Avatar } from "@mui/material";

import { useRouter } from "next/router";

import { list as listArtist } from "../../apis/models/artist/get_artist";
import { create as createAlbum, TCreateAlbum } from "../../apis/models/album/post_album";

import FileUpload from "../../components/FileUpload";
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
export default function PopupCreateAlbum(props: Props) {
  const [artists, setArtists] = useState([]);
  const [createSong, setCreateSong] = useState<TCreateAlbum | {}>({});
  const [artistsPicker, setArtistsPicker] = useState<any[]>([]);
  const [pathImage, setPathImage] = useState(null);

  const handleClose = () => props.setOpen(false);
  const handleTextFieldNameChange = (event: any) => {
    const name = event.target.value;
    const createSong_ = { ...createSong, ...{ name: name } };
    setCreateSong(createSong_);
  };

  const handleAutoCompleteArtistChange = (event: any, value: any) => {
    if (!value) return;
    const artistId: Number = value.id;
    const artistLabel: Number = value.label;

    const artistsPicker_: any[] = [
      ...artistsPicker,
      ...[
        {
          id: +artistId,
          name: artistLabel,
        },
      ],
    ];
    setArtistsPicker(artistsPicker_);
  };

  useEffect(() => {
    const createSong_ = { ...createSong, ...{ cover: pathImage } };
    setCreateSong(createSong_);
  }, [pathImage]);
  const handleTextFieldDescriptionChange = (event: any) => {
    const description = event.target.value;
    const createSong_ = { ...createSong, ...{ description: description } };
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

    const response = await createAlbum(createSong_ as TCreateAlbum);
    if (response) {
      alert("Create album success");
    }
  };
  useEffect(() => {
    const artistIds_ = artistsPicker.map((item: any) => {
      return item.id;
    });
    const createSong_ = { ...createSong, ...{ artist: artistIds_ } };
    setCreateSong(createSong_);
  }, [artistsPicker]);

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
    <Dialog onClose={handleClose} open={props.open} sx={{ zIndex: 200000 }} keepMounted={false}>
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
        <Typography
          variant="h6"
          sx={{
            color: "text.primary",
          }}
        >
          Tạo album
        </Typography>
        <Stack
          spacing={3}
          direction="column"
          sx={{
            color: "text.primary",
          }}
        >
          <TextField label="Name" variant="standard" onChange={handleTextFieldNameChange} />
          <Box>
            {artistsPicker &&
              artistsPicker.map((item) => {
                const id = item.id;
                const name = item.name;
                return <Chip key={id} avatar={<Avatar>{`${id}`}</Avatar>} label={`${name}`} sx={{ margin: "2px" }} />;
              })}
          </Box>

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
          <FileUpload setPath={setPathImage} />
          <TextareaAutosize onChange={handleTextFieldDescriptionChange} aria-label="empty textarea" placeholder="Description" style={{ width: "100%", height: "10rem" }} />
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
