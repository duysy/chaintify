import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Box, Typography } from "@mui/material";
import { useMusicPlayer } from "../../contexts/useMusicPlayer";
import { useRef, useEffect } from "react";
import { Favorite } from "@mui/icons-material";
export default function Player() {
  const { listSongMusicPlayer, playerRef, setPlayerRef, hidden, onPlay, onPause, onClickNext, onClickPrevious, onEnded, indexSongPlaylist } = useMusicPlayer();
  const player: React.Ref<any> = useRef();
  useEffect(() => {
    setPlayerRef(player);
  }, [listSongMusicPlayer, indexSongPlaylist]);
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: "100000",
        display: hidden && "none",
        height: "15%",
      }}
    >
      <AudioPlayer
        style={{
          display: "flex",
          flexDirection: "row",
          background: "#000000 !important",
          height: "100%",
        }}
        ref={player}
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
            <Typography variant="subtitle2">{listSongMusicPlayer[indexSongPlaylist]?.artist[0].name || ""}</Typography>
          </Box>
        }
        // customIcons={<Favorite/>}
        // other props here
      />
    </Box>
  );
}
