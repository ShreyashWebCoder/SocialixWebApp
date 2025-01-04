import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { IoMdImages } from "react-icons/io";
import React from "react";

const AddPostModel = () => {
  const _300 = useMediaQuery("(min-width:300px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _500 = useMediaQuery("(min-width:500px)");
  const _650 = useMediaQuery("(min-width:650px)");

  const handleModelClose = () => {};

  return (
    <>
      <Dialog
        open={true}
        onClose={handleModelClose}
        fullWidth
        fullScreen={_650 ? false : true}
      >
        <Box
          position={"absolute"}
          top={20}
          right={20}
          onclick={handleModelClose}
          sx={{cursor:"pointer"}}
        >
          <RxCross2 size={28} />
        </Box>
        <DialogTitle textAlign={"center"} mb={5}>
          New Post...
        </DialogTitle>
        <DialogContent>
          <Stack flexDirection={"row"} gap={2} mb={5}>
            <Avatar src="" alt="" />
            <Stack width={"90%"} >
              <Typography variant="h6" fontWeight={"bold"} fontSize={"1rem"} >
                Shreyash_01
              </Typography>
              <textarea
                cols={_500 ? 40 : 25}
                rows="2"
                className="  border-none outline-none py-[5px] px-[10px] relative left-[-10px] text-gray-600 mb-[20px]"
                placeholder="Start a Post..."
                autoFocus
              
              />
            
              <img
                src=""
                alt=""
                id="url-img"
                width={_500 ? 300 : _300 ? 200 : 100}
                height={_500 ? 300 : _300 ? 200 : 100}
              />
              <IoMdImages size={28} />
              <input type="file" accept="images/*" className="none" />
            </Stack>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h6" fontSize={"1rem"} color="gray">
              Any one can reply
            </Typography>
            <Button
              size="large"
              sx={{
                bgcolor: "GrayText",
                color: "white",
                borderRadius: "10px",
                ":hover": { bgcolor: "gray", cursor: "pointer" },
              }}
            >
              Post
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddPostModel;
