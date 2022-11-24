import { createContext, ReactChild, useContext, useState, createRef, useEffect } from "react";
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
  setListSongMusicPlayer: any;
  listSongMusicPlayer: any;
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
  {
    path: "https://gateway.pinata.cloud/ipfs/QmeHpB14tRGr8546orR5NCvrJeafHb33QgstCfW1YGJq69",
    name: "Anh sai roi 3",
  },
  {
    path: "https://gateway.pinata.cloud/ipfs/QmQYQ26DnWQb76V3PqkQjNvrTkpZWHGdUGhDQ3BQQQH1gC",
    name: "Anh sai roi 4",
  },
  {
    path: "https://gateway.pinata.cloud/ipfs/QmX7hDT4XR8qzfhAGWM28jbyW5YMMxdRPgUAQ9j69vZ3p5",
    name: "Anh sai roi 5",
  },
  {
    path: "https://gateway.pinata.cloud/ipfs/QmeHmeiLVY1hTJAvdKEGuDiLXupEZQYsrRGQjse1JyrQs2",
    name: "Anh sai roi 6",
  },
  {
    path: "https://gateway.pinata.cloud/ipfs/QmXb1PAEctNgUXDUzgWCretV8YAqpyE1V5FeTPCz5h9ELJ",
    name: "Anh sai roi 7",
  },
];
const MusicPlayerContextProvider = ({ children }: Props) => {
  const [playerRef, setPlayerRef] = useState<React.Ref<any>>();
  const [hidden, setHidden] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [listSongMusicPlayer, setListSongMusicPlayer] = useState([]);
  const [indexSongPlaylist, setIndexSongPlaylist] = useState(0);
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
  useEffect(() => {
    setTimeout(() => {
      play();
    }, 1000);
  }, [indexSongPlaylist, listSongMusicPlayer]);

  useEffect(() => {
    setIndexSongPlaylist(0);
  }, [listSongMusicPlayer]);

  useEffect(() => {
    if (listSongMusicPlayer.length == 0) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }, [listSongMusicPlayer]);

  useEffect(() => {
    if (indexSongPlaylist > 0) {
      play();
    }
  }, [indexSongPlaylist]);
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
        indexSongPlaylist,
        play,
        pause,
        isPlay,
        setListSongMusicPlayer,
        listSongMusicPlayer,
      }}
    >
      {children}
    </MusicPlayer.Provider>
  );
};

export default MusicPlayerContextProvider;
export const useMusicPlayer = () => useContext(MusicPlayer);
