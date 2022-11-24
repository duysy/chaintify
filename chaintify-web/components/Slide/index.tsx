import React from "react";
import { useState, useEffect } from "react";
import styles from "./Slide.module.css";
import { Stack } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

const itemData = [
  {
    img: "https://picsum.photos/300/200",
    title: "Breakfast",
  },
  {
    img: "https://picsum.photos/301/200",
    title: "Burger",
  },
  {
    img: "https://picsum.photos/302/200",
    title: "Camera",
  },
  {
    img: "https://picsum.photos/303/200",
    title: "Camera",
  },
  {
    img: "https://picsum.photos/304/200",
    title: "Camera",
  },
  ,
  {
    img: "https://picsum.photos/305/200",
    title: "Camera",
  },
];

export default function Slide() {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(3);
  useEffect(() => {
    const id = setInterval(() => next(), 5000);
    return () => clearInterval(id);
  });

  const back = () => {
    let from_ = from - 1;
    let to_ = to - 1;
    if (from_ < 0) {
      from_ = 0;
      to_ = from_ + 3;
    }
    setFrom(from_);
    setTo(to_);
  };
  const next = () => {
    let from_ = from + 1;
    let to_ = to + 1;
    if (to_ >= itemData.length - 1) {
      from_ = 0;
      to_ = 3;
    }
    setFrom(from_);
    setTo(to_);
  };
  return (
    <Stack
      direction="row"
      style={{
        position: "relative",
        left: 0,
        alignItems: "center",
      }}
    >
      <NavigateBefore
        sx={{
          position: "absolute",
          fontSize: "6rem",
          color: "text.primary",
        }}
        onClick={back}
      />
      <Stack sx={{ width: "100%", height: 180 }} direction="row" spacing={5}>
        {itemData.slice(from, to).map((item) => (
          <img
            key={item?.img}
            width="100%"
            src={item?.img}
            alt={item?.title}
            loading="lazy"
            style={{
              borderRadius: "25px",
            }}
          />
        ))}
      </Stack>
      <NavigateNext
        sx={{
          position: "absolute",
          right: 0,
          fontSize: "6rem",
          color: "text.primary",
        }}
        onClick={next}
      />
    </Stack>
  );
}
