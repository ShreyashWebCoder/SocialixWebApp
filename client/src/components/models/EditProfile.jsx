import React, { useRef, useState } from "react";
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

const EditProfile = () => {
  const _650 = useMediaQuery("(min-width:650px)");

  const [pic, setPic] = useState();
  const [bio, setBio] = useState();

  const imgRef = useRef();

  const handlePhoto = () => {
    imgRef.current.click();
  };
  const handleClose = () => {};
  const handleUpdate = () => {};
  return (
    <>
      <Dialog
        open={true}
        onClose={handleClose}
        fullWidth
        fullScreen={_650 ? false : true}
      >
        <Box position={"absolute"} top={20} right={20} onClick={handleClose}>
          <RxCross2 size={28} />
        </Box>
        <DialogTitle textAlign={"center"} mb={5}>
          Edit Profile...
        </DialogTitle>
        <DialogContent>
          <Stack flexDirection={"column"} gap={1}>
            <Avatar
              src={pic ? URL.createObjectURL(pic) : ""}
              alt=""
              sx={{ width: 96, height: 96, alignSelf: "center" }}
            />
            <Button
              size="large"
              sx={{
                border: "2px solid gray",
                borderRadius: "10px",
                width: 96,
                height: 40,
                alignSelf: "center",
                my: 2,
                fontSize: "1rem",
                ":hover": {
                  cursor: "pointer",
                  bgcolor: "black",
                  color: "white",
                },
              }}
              onClick={handlePhoto}
            >
              Change
            </Button>
            <input
              type="file"
              className="file-input"
              accept="image/*"
              ref={imgRef}
              onChange={(e) => setPic(e.target.files[0])}
            />
            <Typography
              variant="subtitle1"
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              my={2}
            >
              Username
            </Typography>
            <input
              type="text"
              value={"Shreyash Wadhai"}
              readOnly
              className="text1"
            />
          </Stack>
          <Stack flexDirection={"column"} gap={1}>
            <Typography
              variant="subtitle1"
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              my={2}
            >
              Email
            </Typography>
            <input
              type="email"
              value={"Shreyash Wadhai"}
              readOnly
              className="text1"
            />
          </Stack>
          <Stack flexDirection={"column"} gap={1}>
            <Typography
              variant="subtitle1"
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              my={2}
            >
              Bio
            </Typography>
            <input
              type="email"
              className="text1"
              placeholder="Enter your bio..."
              onChange={(e) => setBio(e.target.value)}
            />
          </Stack>
          <Button
            size="large"
            sx={{
              border: "2px solid gray",
              borderRadius: "10px",
              bgcolor: "GrayText",
              color: "white",
              width: "100%",
              my: 2,
              fontSize: "1rem",
              ":hover": { bgcolor: "black", cursor: "pointer" },
            }}
            onClick={handleUpdate}
          >
            Update
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditProfile;
