import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Box, Typography } from "@mui/material";
import { useMusicPlayer } from "../../contexts/useMusicPlayer";
import { useRef, useEffect } from "react";
import { Favorite } from "@mui/icons-material";
// import styles from "./MusicPlayer.module.css";
// import AudioPlayer from "../AudioPlayer";
export default function Player() {
  const { playListRef, hidden, listSongMusicPlayer, indexSongPlaylist, setPlayerRef, onPlay, onPause, onClickPrevious, onClickNext, onEnded } =
    useMusicPlayer();
  const playerRef: React.Ref<any> = useRef();
  useEffect(() => {
    if (playerRef) return;
    setPlayerRef(playerRef);
  }, [listSongMusicPlayer, indexSongPlaylist, playerRef]);
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: "100000",
        display: hidden && "none",
        // height: "15%",
      }}
    >
      {/* <AudioPlayer
        audioRefPlayer={playerRef}
        src={listSongMusicPlayer[indexSongPlaylist]?.path || ""}
        onPlay={onPlay}
        onPause={onPause}
        onClickNext={onClickNext}
        onClickPrevious={onClickPrevious}
        onEnded={onEnded}
        autoPlay={false}
        leftElement={
          <Box sx={{ color: "text.primary", width: "30rem", padding: "0 1rem" }}>
            <Typography variant="subtitle1">{listSongMusicPlayer[indexSongPlaylist]?.name || ""}</Typography>
            <Typography variant="subtitle2">
              {(listSongMusicPlayer[indexSongPlaylist]?.artist &&
                listSongMusicPlayer[indexSongPlaylist]?.artist.map((item: any) => item.name).join("|")) ||
                "Không có ca sỹ"}
            </Typography>
          </Box>
        }
      /> */}
      <AudioPlayer
        style={{
          display: "flex",
          flexDirection: "row",
          background: "#000000 !important",
          height: "100%",
        }}
        ref={playerRef}
        autoPlay={false}
        src={listSongMusicPlayer[indexSongPlaylist]?.path || ""}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onPlay={onPlay}
        onPause={onPause}
        onClickNext={onClickNext}
        onClickPrevious={onClickPrevious}
        onEnded={onEnded}
        autoPlayAfterSrcChange={false}
        header={
          <Box sx={{ color: "text.primary", width: "30rem", padding: "0 1rem" }}>
            <Typography variant="subtitle1">{listSongMusicPlayer[indexSongPlaylist]?.name || ""}</Typography>
            <Typography variant="subtitle2">
              {(listSongMusicPlayer[indexSongPlaylist]?.artist &&
                listSongMusicPlayer[indexSongPlaylist]?.artist.map((item: any) => item.name).join("|")) ||
                "Không có ca sĩ"}
            </Typography>
          </Box>
        }
        // customIcons={<Favorite/>}
        // other props here
      />
    </Box>
  );
}
