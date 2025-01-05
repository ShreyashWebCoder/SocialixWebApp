import { Avatar, Menu, MenuItem, Stack, Typography, useMediaQuery } from "@mui/material";
import { IoIosMore } from "react-icons/io";
import React from "react";

const Comments = () => {
  const _300 = useMediaQuery("(min-width:300px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _650 = useMediaQuery("(min-width:650px)");


  const handleClose = () => {};
  const handleDeleteComment = () => {};
  
  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        px={_400 ? 1 : 0}
        pb={4}
        borderBottom={"1px solid gray"}
        mx={"auto"}
        width={"90%"}
      >
        <Stack flexDirection={"row"} gap={_650 ? 2 : 1}>
          <Avatar src="" alt="" />
          <Stack flexDirection={"column"}>
            <Typography variant="h6" fontWeight={"bold"} fontSize={"0.9rem"}>
              Shreyash_001
            </Typography>
            <Typography
              variant="subtitle2"
              fontSize={ "0.9rem"}
            >
              This is a Comment.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          flexDirection={"row"}
          gap={1}
          alignItems={"center"}
          color={"GrayText"}
          fontSize={_400 ? "0.9rem" : "0.8rem"}
        >
          <p>24min</p>
          <IoIosMore size={25} cursor={"pointer"} />
        </Stack>
      </Stack>
      <Menu
        anchorEl={""}
        open={true}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleDeleteComment}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default Comments;
