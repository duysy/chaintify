import { createContext, ReactChild, useContext, useState, createRef, useEffect, useRef, RefObject } from "react";
export type MusicPlayerContextValue = {
  playerRef: any;
  setPlayerRef: any;
  hidden: any;
  setHidden: any;
  onPlay: () => void;
  onPause: () => void;
  onClickNext: () => void;
  onClickPrevious: () => void;
  onEnded: () => void;
  indexSongPlaylist: any;
  play: () => void;
  pause: () => void;
  isPlay: any;
  listSongMusicPlayer: any;
  setListSongMusicPlayer: any;
  playListRef: any;
  setListMusicPlayer: any;
};
export const MusicPlayer = createContext<MusicPlayerContextValue>({} as MusicPlayerContextValue);

type Props = {
  children: ReactChild;
};

const fakeSongs = [
  {
    path: "https://gateway.pinata.cloud/ipfs/QmYSsvafV8i9DHYTZPgzhs6pgGiKQA1nuVi9VDpwNMirPX",
    name: "Anh sai roi 1",
  },
  {
    path: "https://gateway.pinata.cloud/ipfs/Qmf6QpZ4ifmEPHFGZE1bFvwfJ5wkNgQEuAZEAr1kp1TiaU",
    name: "Anh sai roi 2",
  },
];
const MusicPlayerContextProvider = ({ children }: Props) => {
  const [playerRef, setPlayerRef] = useState<React.Ref<any>>();
  const [hidden, setHidden] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [indexSongPlaylist, setIndexSongPlaylist] = useState(0);
  const [listSongMusicPlayer, setListSongMusicPlayer] = useState([]);
  const playListRef: any = useRef({
    index: 0,
    list: [],
  });
  const onPlay = () => {
    console.log("onPlay");
    setIsPlay(true);
  };
  const onPause = () => {
    console.log("onPause");
    setIsPlay(false);
  };
  const onEnded = () => {
    console.log("onEnded");
    onClickNext();
  };

  const setListMusicPlayer = (listSongMusicPlayer_: any) => {
    setListSongMusicPlayer(listSongMusicPlayer_);
    setIndexSongPlaylist(0);
    setTimeout(() => {
      play();
      console.log("play");
    }, 1000);
  };

  const onClickNext = () => {
    console.log("onClickNext");
    let indexSongPlaylist_ = indexSongPlaylist + 1;
    if (indexSongPlaylist_ > listSongMusicPlayer.length - 1) {
      indexSongPlaylist_ = 0;
    }
    setIndexSongPlaylist(indexSongPlaylist_);
  };
  const onClickPrevious = () => {
    console.log("onClickPrevious");
    let indexSongPlaylist_ = indexSongPlaylist - 1;
    if (indexSongPlaylist_ < 0) {
      indexSongPlaylist_ = 0;
    }
    setIndexSongPlaylist(indexSongPlaylist_);
  };
  const play = () => {
    playerRef?.current?.audio?.current?.play();
  };
  const pause = () => {
    playerRef?.current?.audio?.current?.pause();
  };

  // const play = () => {
  //   playerRef?.current?.play();
  // };
  // const pause = () => {
  //   playerRef?.current?.pause();
  // };
  useEffect(() => {
    if (listSongMusicPlayer.length <= 0) {
      setHidden(true);
    } else {
      setHidden(false);
      play();
    }
  }, [listSongMusicPlayer, indexSongPlaylist]);

  return (
    <MusicPlayer.Provider
      value={{
        playerRef,
        setPlayerRef,
        hidden,
        setHidden,
        onPlay,
        onEnded,
        onClickNext,
        onClickPrevious,
        onPause,
        play,
        pause,
        isPlay,
        indexSongPlaylist,
        setListSongMusicPlayer,
        listSongMusicPlayer,
        playListRef,
        setListMusicPlayer,
      }}
    >
      {children}
    </MusicPlayer.Provider>
  );
};

export default MusicPlayerContextProvider;
export const useMusicPlayer = () => useContext(MusicPlayer);
