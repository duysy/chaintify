import { useMusicPlayer } from "../../contexts/useMusicPlayer";
import React, { useRef, useEffect, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Shuffle, SkipPrevious, PauseCircleOutline, PlayCircleOutline, SkipNext, SettingsBackupRestore } from "@mui/icons-material";
import { border } from "@mui/system";
type TProps = {
  onPlay: () => void | null;
  onPause: () => void | null;
  onEnded: () => void | null;
  onClickNext: () => void | null;
  onClickPrevious: () => void | null;
  src: String | (() => String);
  autoPlay: Boolean | null;
  audioRefPlayer: any;
  leftElement: any;
};
export default function Player(props: TProps) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const [toggle, setToggle] = useState<Boolean>(false);
  const [autoPlay, setAutoPlay] = useState<Boolean | null>(props.autoPlay);
  const [duration, setDuration] = useState(0);
  const [percent, setPercent] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const volumeRef: any = useRef();
  const barPlayRef: any = useRef();
  // const audioRefPlayer: any = useRef();
  const audioRefPlayer: any = props.audioRefPlayer;

  const handelPause = () => {
    if (!audio) return;
    audio?.pause();
  };
  const handelPlay = () => {
    if (!audio) return;
    audio?.play();
  };

  const handelClickNext = props.onClickNext;
  const handelClickPrevious = props.onClickPrevious;
  const onPlay = (event: any) => {
    setToggle(true);
    if (props.onPlay) {
      props.onPlay();
    }
  };
  const onPause = (event: any) => {
    if (props.onPause) {
      props.onPause();
    }
    setToggle(false);
    checkOnEnded();
  };
  const onEnd = (event: any) => {
    // console.log("onEnd");
    setToggle(false);
    if (props.onEnded) {
      props.onEnded();
    }
  };
  const updateDuration = () => {
    if (!audio) return;
    const duration_ = audio.duration;
    setDuration(duration_);
  };

  const onTimeupdate = (event: any) => {
    if (!audio) return;
    const currentTime_ = audio.currentTime;
    const duration_ = audio.duration;
    let percent_ = (currentTime_ / duration_) * 100;

    if (currentTime_) setCurrentTime(currentTime_);
    if (percent_) setPercent(percent_);

    // console.log("currentTime : ", currentTime);
    // console.log("duration : ", duration);
    // console.log("percent : ", percent_);

    const volume = volumeRef.current.value;
    audio.volume = volume;
    // console.log("volume : ", audio.volume);
  };
  const onPlaying = (event: any) => {
    // console.log("onPlaying");
    setToggle(true);
  };

  const checkOnEnded = () => {
    if (!audio) return;
    const currentTime_ = audio.currentTime;
    const duration_ = audio.duration;
    if (currentTime_ - duration_ >= 0) {
      props.onEnded();
    }
  };
  const onLoadstart = (event: any) => {
    // console.log("onLoadstart");
    setTimeout(() => {
      updateDuration();
    }, 1000);
    // setToggle(false);
  };
  const onSeeked = (event: any) => {
    // console.log("seeked");
    updateDuration();
  };
  useEffect(() => {
    if (audioRefPlayer.current) {
      setAudio(audioRefPlayer.current);
      return;
    }
    audioRefPlayer.current = new Audio();
    setAudio(audioRefPlayer.current);
  }, [audioRefPlayer.current]);

  useEffect(() => {
    if (!audio) return;
    audio.autoplay = autoPlay as boolean;
  }, [audio]);

  useEffect(() => {
    if (!audio) return;
    audio.src = props.src as string;
  }, [props.src]);

  useEffect(() => {
    if (!audio) return;
    audio.addEventListener("seeked", onSeeked);
    audio.addEventListener("loadstart", onLoadstart);
    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("timeupdate", onTimeupdate);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", () => onEnd);
    return () => {
      audio.removeEventListener("seeked", onSeeked);
      audio.removeEventListener("loadstart", onLoadstart);
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("timeupdate", onTimeupdate);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", () => onEnd);
    };
  }, [audio]);

  return (
    <Box
      sx={{
        display: "fex",
        flexDirection: "row",
        width: "100%",
        bgcolor: "red",
        height: "100px",
      }}
    >
      <Box sx={{ width: "25%", height: "100%", bgcolor: "yellow" }}>{props.leftElement}</Box>
      <Box sx={{ width: "50%", height: "100%", bgcolor: "red" }} display="flex" flexDirection="column">
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          sx={{ width: "100%", height: "50px", bgcolor: "gray", padding: "0 10%" }}
        >
          <Shuffle />
          <SkipPrevious onClick={handelClickPrevious} />
          {toggle ? (
            <PauseCircleOutline
              onClick={handelPause}
              sx={{
                fontSize: "3rem",
              }}
            />
          ) : (
            <PlayCircleOutline
              onClick={handelPlay}
              sx={{
                fontSize: "3rem",
              }}
            />
          )}
          <SkipNext onClick={handelClickNext} />
          <SettingsBackupRestore />
        </Box>
        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ width: "100%", height: "50px", bgcolor: "#123123", padding: "0 3rem" }}
        >
          <nav>{(currentTime / 60).toFixed(2)}</nav>
          <Box
            ref={barPlayRef}
            sx={{ width: "80%", height: "5px", bgcolor: "#FFFFFF", position: "relative" }}
            onMouseDown={(e) => {
              if (!barPlayRef) return;
              if (!audio) return;
              const coordinatesX = barPlayRef?.current?.offsetLeft;
              const coordinatesY = barPlayRef?.current?.offsetTop;

              const width = barPlayRef?.current?.offsetWidth;
              const height = barPlayRef?.current?.offsetHeight;

              const cursorX = e.clientX;
              const cursorY = e.clientY;

              // console.log(coordinatesX, cursorX, width);

              const present_ = (cursorX - coordinatesX) / width;
              const currentTime_ = +(present_ * audio.duration).toFixed(0);
              if (currentTime_) {
                audio.currentTime = currentTime_;
              }
            }}
          >
            <Box
              sx={{
                width: `${percent}%`,
                height: "5px",
                bgcolor: "#FACD66",
                position: "absolute",
                top: "0",
                left: "0",
                borderRight: "5px solid red",
              }}
            ></Box>
          </Box>
          <nav>{(duration / 60).toFixed(2)}</nav>
        </Box>
      </Box>
      <Box sx={{ width: "25%", height: "100%", bgcolor: "blue" }}>
        <nav>Hello</nav>
        <button onClick={handelPause}>Pause</button>
        <button onClick={handelPlay}>Play </button>
        <input type="number" ref={volumeRef} defaultValue={0.8} />
      </Box>
    </Box>
  );
}
