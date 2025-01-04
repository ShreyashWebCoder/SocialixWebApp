import {
  Avatar,
  AvatarGroup,
  Badge,
  Stack,
  Stepper,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const PostOne = () => {
  const _300 = useMediaQuery("(min-width:300px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _650 = useMediaQuery("(min-width:650px)");
  return (
    <>
      <Stack
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Badge
          overlap="circular"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          badgeContent={
            <Avatar
              alt="+"
              src=""
              sx={{
                width: _650 ? 20 : 14,
                height: _650 ? 20 : 14,
                bgcolor: "green",
                position: "relative",
                right: _650 ? 4 : 1,
                bottom: _650 ? 4 : 1,
              }}
            >
              +
            </Avatar>
          }
        >
          <Avatar
            alt="pic"
            src=""
            sx={{
              width: _650 ? 40 : 32,
              height: _650 ? 40 : 32,
            }}
          />
        </Badge>
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
          height={"100%"}
        >
          <Stepper
            orientation={"vertical"}
            activeStep={0}
            sx={{
              border: _650 ? "0.1rem solid gray" : "0.09rem solid gray",
              width: "0px",
              height: "100%",
            }}
          ></Stepper>
          <AvatarGroup
            total={5}
            // max={3}
            sx={{
              "& .MuiAvatar-root": {
                width: _650 ? 24 : 16,
                height: _650 ? 24 : 16,
                fontSize: _650 ? 12 : 8,
              },
            }}
          >
            <Avatar src="" alt="" />
          </AvatarGroup>
        </Stack>
      </Stack>
    </>
  );
};

export default PostOne;
