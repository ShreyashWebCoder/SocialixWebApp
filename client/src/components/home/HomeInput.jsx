import {
  Avatar,
  Button,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const HomeInput = () => {
  const _300 = useMediaQuery("(min-width:300px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _650 = useMediaQuery("(min-width:650px)");
  return (
    <>
      {_650 ? (
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={_400 ? "60%" : "90%"}
          height={28}
          p={3}
          borderBottom={"2px solid gray"}
          my={5}
          mx={"auto"}
        >
          <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
            <Avatar src="" alt="A J" />
            <Typography color={"GrayText"}>Start with thread...</Typography>
          </Stack>
          <Button
            size="medium"
            sx={{
              bgcolor: "gray",
              color: "aliceblue",
              ":hover": { bgcolor: "black" },
              borderRadius: "3rem",
            }}
          >
            POST
          </Button>
        </Stack>
      ) : (
        <Stack marginBottom={"2rem"}></Stack>
      )}
    </>
  );
};

export default HomeInput;
