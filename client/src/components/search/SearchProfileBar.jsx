import {
  Avatar,
  Button,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const SearchProfileBar = () => {
  const _300 = useMediaQuery("(min-width:300px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _650 = useMediaQuery("(min-width:650px)");
  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        px={1}
        py={1}
        mx={"auto"}
        boxShadow={"5px 5px 5px gray"}
        width={_400 ? "90%" : "100%"}
        borderRadius={"15px"}
        sx={{
          ":hover": { cursor: "pointer", boxShadow: "10px 10px 10px gray" },
          transition: "all ease-in-out 0.3s",
        }}
      >
        <Stack flexDirection={"row"} gap={2}>
          <Avatar src="" alt="" />
          <Stack flexDirection={"column"}>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              fontSize={_650 ? "1rem" : "0.9rem"}
            >
              Codez
            </Typography>
            <Typography
              variant="caption"
              fontSize={_650 ? "1rem" : "0.75rem"}
              color={"gray"}
            >
              This is bio
            </Typography>
            <Typography variant="caption" fontSize={_650 ? "1rem" : "0.9rem"}>
              3 followers
            </Typography>
          </Stack>
        </Stack>
        <Button
          size="medium"
          sx={{
            border: "1px solid gray",
            color: "black",
            borderRadius: "10px",
            p: 2,
            zIndex: 1,
            bgcolor: "gray",
            height: _650 ? 40 : 35,
            my: 2,
            alignItems: "center",
            ":hover": {
              bgcolor: "black",
              color: "white",
            },
          }}
        >
          Follow
        </Button>
      </Stack>
    </>
  );
};

export default SearchProfileBar;
