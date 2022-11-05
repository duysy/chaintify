import React from "react";
import { Grid, Stack, Container, Box, Typography } from "@mui/material";
import Image from "next/image";
export default function CarouselBasic(props: any) {
  const history = props.list;
  return (
    <Stack direction="row" spacing={3}>
      {history.map((item: any, index: any) => {
        return (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              width: 150,
              height: 200,
            }}
          >
            <Image
              src={item.imgUrl}
              alt="Picture of the author"
              width={150}
              height={150}
              style={{
                borderRadius: "20px",
              }}
            />
            <nav
              style={{
                color: "#FFFFFF",
              }}
            >
              {item.title}
            </nav>
          </Box>
        );
      })}
    </Stack>
  );
}
